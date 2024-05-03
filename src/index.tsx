import { useMemo } from "react"
import Select from "react-select"
import spacetime, { type Spacetime } from "spacetime"
import soft from "timezone-soft"
import allTimezones from "./timezone-list.js"
import type { Props, ITimezone, ITimezoneOption, ILabelStyle } from "./types/timezone"
import { TimezoneSelectOptions } from "./types/timezone"

export function useTimezoneSelect({
  timezones = allTimezones,
  labelStyle = "original",
  displayValue = "GMT",
  currentDatetime,
}: TimezoneSelectOptions): {
  parseTimezone: (zone: ITimezone) => ITimezoneOption
  options: ITimezoneOption[]
} {
  const options = useMemo(() => {
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
              label = `${prefix} (${abbr})`
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

  const findFuzzyTz = (zone: string): ITimezoneOption => {
    let currentTime: Spacetime
    try {
      currentTime = (currentDatetime ? spacetime(currentDatetime) : spacetime.now()).goto(zone)
    } catch (err) {
      currentTime = (currentDatetime ? spacetime(currentDatetime) : spacetime.now()).goto("GMT")
    }

    return options
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
      .sort((a, b) => b.score - a.score)[0].tz
  }

  const parseTimezone = (zone: ITimezone) => {
    if (typeof zone === "object" && zone.value && zone.label) return zone
    if (typeof zone === "string") {
      return (
        options.find((tz) => tz.value === zone) || (zone.indexOf("/") !== -1 && findFuzzyTz(zone))
      )
    } else if (zone.value && !zone.label) {
      return options.find((tz) => tz.value === zone.value)
    }
  }

  return { options, parseTimezone }
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
  const { options, parseTimezone } = useTimezoneSelect({
    timezones,
    labelStyle,
    displayValue,
    currentDatetime,
  })

  const handleChange = (tz: ITimezoneOption) => {
    onChange && onChange(tz)
  }

  return (
    <Select
      value={parseTimezone(value)}
      onChange={handleChange}
      options={options}
      onBlur={onBlur}
      {...props}
    />
  )
}

export { TimezoneSelect as default, allTimezones }
export type { ITimezone, ITimezoneOption, Props, ILabelStyle, TimezoneSelectOptions }
