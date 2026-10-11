import { type TimeZone, getTimeZones } from "@vvo/tzdb"
import { useMemo } from "react"
import Select from "react-select"
import allTimezones from "./timezone-list.js"
import type { ILabelStyle, ITimezone, ITimezoneOption, Props } from "./types/timezone"
import type { TimezoneSelectOptions } from "./types/timezone"

type TimezoneOptionWithDst = ITimezoneOption & { hasDst: boolean }

// UTC offset in hours at a given date, like -7 or 5.5. Throws for unknown time zones.
function getOffset(timeZone: string, date: Date): number {
  const parts: Record<string, number> = {}
  const format = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
  for (const { type, value } of format.formatToParts(date)) {
    parts[type] = Number(value)
  }
  const wallClock = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour % 24, parts.minute)
  return Math.round((wallClock - date.getTime()) / 60000) / 60
}

function getLongName(timeZone: string, date: Date): string | undefined {
  return new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "long" })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value
}

// Every IANA name, current or deprecated, mapped to its @vvo/tzdb time zone
function getTimeZonesByName(date: Date): Map<string, TimeZone> {
  const timeZonesByName = new Map<string, TimeZone>()
  for (const timeZone of getTimeZones({ date, includeUtc: true, includeGmtOffsets: true })) {
    for (const name of timeZone.group) {
      timeZonesByName.set(name, timeZone)
    }
  }
  return timeZonesByName
}

export function useTimezoneSelect({
  timezones = allTimezones,
  labelStyle = "original",
  displayValue = "GMT",
  currentDatetime,
}: TimezoneSelectOptions): {
  parseTimezone: (zone: ITimezone) => ITimezoneOption
  options: ITimezoneOption[]
  filterOption: (
    option: { label: string; value: string; data: ITimezone },
    inputValue: string,
  ) => boolean
} {
  const { date, timeZonesByName } = useMemo(() => {
    const date = currentDatetime ? new Date(currentDatetime) : new Date()
    return { date, timeZonesByName: getTimeZonesByName(date) }
  }, [currentDatetime])

  const allOptions = useMemo(() => {
    return Object.entries(timezones)
      .map(([value, name]): TimezoneOptionWithDst | null => {
        try {
          const offset = getOffset(value, date)
          const timeZone = timeZonesByName.get(value)
          const isDst = timeZone ? offset * 60 > timeZone.rawOffsetInMinutes : false
          const abbr =
            isDst && timeZone?.dstAbbreviation ? timeZone.dstAbbreviation : timeZone?.abbreviation
          const altName = getLongName(value, date)

          const min = offset * 60
          const hr = `${(min / 60) ^ 0}:${min % 60 === 0 ? "00" : Math.abs(min % 60)}`
          const prefix = `(${displayValue}${hr.includes("-") ? hr : `+${hr}`}) ${name}`

          let label = ""

          switch (labelStyle) {
            case "original":
              label = prefix
              break
            case "altName":
              label = `${prefix} ${altName ? `(${altName})` : ""}`
              break
            case "abbrev":
              label = `${prefix} ${abbr ? `(${abbr})` : ""}`
              break
            case "offsetHidden":
              label = `${prefix.replace(/^\(.*?\)\s*/, "")}`
              break
            default:
              label = `${prefix}`
          }

          return {
            value,
            label,
            offset,
            abbrev: abbr,
            altName,
            hasDst: Boolean(timeZone?.dstAbbreviation),
          }
        } catch {
          return null
        }
      })
      .filter((option): option is TimezoneOptionWithDst => option !== null)
      .sort((a, b) => (a.offset ?? 0) - (b.offset ?? 0))
  }, [labelStyle, displayValue, timezones, date, timeZonesByName])

  const customTimezoneKeys = useMemo(() => {
    const defaultKeys = new Set(Object.keys(allTimezones))
    return new Set(Object.keys(timezones).filter((key) => !defaultKeys.has(key)))
  }, [timezones])

  const options = useMemo(() => {
    return allOptions
      .filter((item, idx, arr) => {
        if (customTimezoneKeys.has(item.value)) return true
        return arr.findIndex((t) => t.offset === item.offset && t.hasDst === item.hasDst) === idx
      })
      .map(({ hasDst: _, ...item }) => ({
        ...item,
        searchTerms: allOptions
          .filter((t) => t.offset === item.offset && t.hasDst === _)
          .map((t) => t.label)
          .join(" "),
      }))
  }, [allOptions, customTimezoneKeys])

  const filterOption = (
    option: { label: string; value: string; data: ITimezone },
    inputValue: string,
  ): boolean => {
    const data = option.data as ITimezoneOption
    const term = inputValue.toLowerCase()
    return (
      data.label?.toLowerCase().includes(term) ||
      (data.searchTerms?.toLowerCase().includes(term) ?? false)
    )
  }

  const findFuzzyTz = (zone: string): ITimezoneOption | undefined => {
    // Names that show the same time share a tzdb group, like Asia/Calcutta and Asia/Kolkata
    const timeZone = timeZonesByName.get(zone)
    const sameTime = timeZone && allOptions.find((tz) => timeZone.group.includes(tz.value))
    if (sameTime) {
      return sameTime
    }

    let offset = 0
    try {
      offset = getOffset(zone, date)
    } catch {
      // Unknown time zones fall back to GMT
    }
    const hasDst = Boolean(timeZone?.dstAbbreviation)
    const region = zone.substring(0, zone.indexOf("/")).toLowerCase()
    const city = zone.substring(zone.indexOf("/") + 1).toLowerCase()

    return allOptions
      .filter((tz) => tz.offset === offset)
      .map((tz) => {
        let score = 0
        if (tz.hasDst === hasDst) {
          if (tz.value.toLowerCase().indexOf(city) !== -1) {
            score += 8
          }
          if (tz.label.toLowerCase().indexOf(city) !== -1) {
            score += 4
          }
          if (tz.value.toLowerCase().indexOf(region) !== -1) {
            score += 2
          }
          score += 1
        } else if (tz.value === "GMT") {
          score += 1
        }
        return { tz, score }
      })
      .sort((a, b) => b.score - a.score)?.[0]?.tz
  }

  function isObject(item: unknown) {
    return typeof item === "object" && !Array.isArray(item) && item !== null
  }

  const parseTimezone = (zone: ITimezone) => {
    if (typeof zone === "string") {
      return (
        allOptions.find((tz) => tz.value === zone) ||
        (zone.indexOf("/") !== -1 && findFuzzyTz(zone))
      )
    } else if (isObject(zone) && !zone.label) {
      return allOptions.find((tz) => tz.value === zone.value)
    } else {
      return zone
    }
  }

  return { options, parseTimezone, filterOption }
}

const TimezoneSelect = ({
  value,
  onBlur,
  onChange,
  labelStyle,
  displayValue,
  timezones,
  currentDatetime,
  ...props
}: Props) => {
  const { options, parseTimezone, filterOption } = useTimezoneSelect({
    timezones,
    labelStyle,
    displayValue,
    currentDatetime,
  })

  const handleChange = (tz: ITimezoneOption) => {
    if (!onChange) return
    const { searchTerms: _, ...rest } = tz
    onChange(rest as ITimezoneOption)
  }

  return (
    <Select
      value={parseTimezone(value)}
      onChange={handleChange}
      options={options}
      filterOption={filterOption}
      onBlur={onBlur}
      {...props}
    />
  )
}

export { TimezoneSelect as default, allTimezones }
export type { ITimezone, ITimezoneOption, Props, ILabelStyle, TimezoneSelectOptions }
