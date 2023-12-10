import * as React from 'react'
import Select from 'react-select'
import spacetime from 'spacetime'
import soft from 'timezone-soft'
import allTimezones from './timezone-list.js'
import type {
  Props,
  ITimezone,
  ITimezoneOption,
  ILabelStyle,
} from './types/timezone'
import { TimezoneSelectOptions } from './types/timezone'

export function useTimezoneSelect({
  timezones = allTimezones,
  labelStyle = 'original',
  displayValue = 'GMT',
  maxAbbrLength = 4,
}: TimezoneSelectOptions): {
  parseTimezone: (zone: ITimezone) => ITimezoneOption
  options: ITimezoneOption[]
} {
  const options = React.useMemo(() => {
    return Object.entries(timezones)
      .map(zone => {
        try {
          const now = spacetime.now(zone[0])
          const tz = now.timezone()
          const tzStrings = soft(zone[0])

          let label = ''

          const standardAbbr = tzStrings?.[0]?.standard?.abbr ?? ''
          const dstAbbr = tzStrings?.[0]?.daylight?.abbr ?? standardAbbr

          let abbr = now.isDST() ? dstAbbr : standardAbbr

          const standardAltName = tzStrings?.[0]?.standard?.name ?? ''
          const dstAltName = tzStrings?.[0]?.daylight?.name ?? standardAltName

          let altName = now.isDST() ? dstAltName : standardAltName

          const min = tz.current.offset * 60
          const hr =
            `${(min / 60) ^ 0}:` + (min % 60 === 0 ? '00' : Math.abs(min % 60))
          const prefix = `(${displayValue}${
            hr.includes('-') ? hr : `+${hr}`
          }) ${zone[1]}`

          switch (labelStyle) {
            case 'original':
              label = prefix
              break
            case 'altName':
              label = `${prefix} ${altName ? `(${altName})` : ''}`
              break
            case 'abbrev':
              label = `${prefix} (${abbr.substring(0, maxAbbrLength)})`
              break
            case 'offsetHidden':
              label = `${prefix.replace(/^\(.*?\)\s*/, '')}`
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
  }, [labelStyle, timezones])

  const findFuzzyTz = (zone: string): ITimezoneOption => {
    let currentTime = spacetime.now('GMT')
    try {
      currentTime = spacetime.now(zone)
    } catch (err) {
      return
    }
    return options
      .filter(
        (tz: ITimezoneOption) =>
          tz.offset === currentTime.timezone().current.offset
      )
      .map((tz: ITimezoneOption) => {
        let score = 0
        if (
          currentTime.timezones[tz.value.toLowerCase()] &&
          !!currentTime.timezones[tz.value.toLowerCase()].dst ===
            currentTime.timezone().hasDst
        ) {
          if (
            tz.value
              .toLowerCase()
              .indexOf(
                currentTime.tz.substring(currentTime.tz.indexOf('/') + 1)
              ) !== -1
          ) {
            score += 8
          }
          if (
            tz.label
              .toLowerCase()
              .indexOf(
                currentTime.tz.substring(currentTime.tz.indexOf('/') + 1)
              ) !== -1
          ) {
            score += 4
          }
          if (
            tz.value
              .toLowerCase()
              .indexOf(currentTime.tz.substring(0, currentTime.tz.indexOf('/')))
          ) {
            score += 2
          }
          score += 1
        } else if (tz.value === 'GMT') {
          score += 1
        }
        return { tz, score }
      })
      .sort((a, b) => b.score - a.score)
      .map(({ tz }) => tz)[0]
  }

  const parseTimezone = (zone: ITimezone) => {
    if (typeof zone === 'object' && zone.value && zone.label) return zone
    if (typeof zone === 'string') {
      return (
        options.find(tz => tz.value === zone) ||
        (zone.indexOf('/') !== -1 && findFuzzyTz(zone))
      )
    } else if (zone.value && !zone.label) {
      return options.find(tz => tz.value === zone.value)
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
  maxAbbrLength,
  timezones,
  ...props
}: Props) => {
  const { options, parseTimezone } = useTimezoneSelect({
    timezones,
    labelStyle,
    displayValue,
    maxAbbrLength,
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
export type {
  ITimezone,
  ITimezoneOption,
  Props,
  ILabelStyle,
  TimezoneSelectOptions,
}
