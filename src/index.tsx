import { useMemo } from "react"
import Select from "react-select"
import spacetime, { type Spacetime } from "spacetime"
import soft from "timezone-soft"
import allTimezones from "./timezone-list.js"
import type { Props, ITimezone, ITimezoneOption, ILabelStyle } from "./types/timezone"
import type { TimezoneSelectOptions } from "./types/timezone"

export function useTimezoneSelect({
  timezones = allTimezones,
  labelStyle = "original",
  displayValue = "GMT",
  currentDatetime,
}: TimezoneSelectOptions): {
  parseTimezone: (zone: ITimezone) => ITimezoneOption
  options: ITimezoneOption[]
  filterOption: (option: { label: string; value: string; data: ITimezone }, inputValue: string) => boolean
} {
  const allOptions = useMemo(() => {
    return Object.entries(timezones)
      .map((zone) => {
        try {
          const now = (currentDatetime ? spacetime(currentDatetime) : spacetime.now()).goto(zone[0])
          const isDstString = now.isDST() ? "daylight" : "standard"
          const tz = now.timezone()
          const tzStrings = soft(zone[0])

          const abbr = tzStrings?.[0]?.[isDstString]?.abbr
          const altName = tzStrings?.[0]?.[isDstString]?.name

          const min = tz.current.offset * 60
          const hr = `${(min / 60) ^ 0}:${min % 60 === 0 ? "00" : Math.abs(min % 60)}`
          const prefix = `(${displayValue}${hr.includes("-") ? hr : `+${hr}`}) ${zone[1]}`

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
            value: tz.name,
            label: label,
            offset: tz.current.offset,
            abbrev: abbr,
            altName: altName,
          }
        } catch {
          return null
        }
      })
      .filter(Boolean)
      .sort((a: ITimezoneOption, b: ITimezoneOption) => a.offset - b.offset)
  }, [labelStyle, timezones, currentDatetime])

  const customTimezoneKeys = useMemo(() => {
    const defaultKeys = new Set(Object.keys(allTimezones))
    return new Set(Object.keys(timezones).filter((key) => !defaultKeys.has(key)))
  }, [timezones])

  const options = useMemo(() => {
    return allOptions
      .filter((item: ITimezoneOption, idx: number, arr: ITimezoneOption[]) => {
        if (customTimezoneKeys.has(item.value)) return true
        return arr.findIndex((t) => t.offset === item.offset) === idx
      })
      .map((item) => ({
        ...item,
        searchTerms: allOptions
          .filter((t) => t.offset === item.offset)
          .map((t) => t.label)
          .join(" "),
      }))
  }, [allOptions, customTimezoneKeys])

  const filterOption = (option: { label: string; value: string; data: ITimezone }, inputValue: string): boolean => {
    const data = option.data as ITimezoneOption
    const term = inputValue.toLowerCase()
    return (
      data.label?.toLowerCase().includes(term) ||
      (data.searchTerms?.toLowerCase().includes(term) ?? false)
    )
  }

  const findFuzzyTz = (zone: string): ITimezoneOption => {
    let currentTime: Spacetime
    try {
      currentTime = (currentDatetime ? spacetime(currentDatetime) : spacetime.now()).goto(zone)
    } catch (err) {
      currentTime = (currentDatetime ? spacetime(currentDatetime) : spacetime.now()).goto("GMT")
    }

    return allOptions
      .filter((tz: ITimezoneOption) => tz.offset === currentTime.timezone().current.offset)
      .map((tz: ITimezoneOption) => {
        let score = 0
        if (
          currentTime.timezones[tz.value.toLowerCase()] &&
          !!currentTime.timezones[tz.value.toLowerCase()].dst === currentTime.timezone().hasDst
        ) {
          if (
            tz.value
              .toLowerCase()
              .indexOf(currentTime.tz.substring(currentTime.tz.indexOf("/") + 1)) !== -1
          ) {
            score += 8
          }
          if (
            tz.label
              .toLowerCase()
              .indexOf(currentTime.tz.substring(currentTime.tz.indexOf("/") + 1)) !== -1
          ) {
            score += 4
          }
          if (
            tz.value
              .toLowerCase()
              .indexOf(currentTime.tz.substring(0, currentTime.tz.indexOf("/"))) !== -1
          ) {
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
