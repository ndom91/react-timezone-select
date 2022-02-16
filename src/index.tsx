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

export { allTimezones }
export type { ITimezone, ITimezoneOption, Props, ILabelStyle }

const TimezoneSelect = ({
  value,
  onBlur,
  onChange,
  labelStyle = 'original',
  timezones,
  date,
  ...props
}: Props) => {
  if (!timezones) timezones = allTimezones
  const getOptions = React.useMemo(() => {
    return Object.entries(timezones)
      .reduce<ITimezoneOption[]>((selectOptions, zone) => {
        const currentDate = date
          ? spacetime(date, zone[0])
          : spacetime.now(zone[0])
        const tz = currentDate.timezone()
        const tzStrings = soft(zone[0])

        let label = ''
        let abbr = currentDate.isDST()
          ? // @ts-expect-error
            tzStrings[0].daylight?.abbr
          : // @ts-expect-error
            tzStrings[0].standard?.abbr
        let altName = currentDate.isDST()
          ? tzStrings[0].daylight?.name
          : tzStrings[0].standard?.name

        const min = tz.current.offset * 60
        const hr =
          `${(min / 60) ^ 0}:` + (min % 60 === 0 ? '00' : Math.abs(min % 60))
        const prefix = `(GMT${hr.includes('-') ? hr : `+${hr}`}) ${zone[1]}`

        switch (labelStyle) {
          case 'original':
            label = prefix
            break
          case 'altName':
            label = `${prefix} ${altName?.length ? `(${altName})` : ''}`
            break
          case 'abbrev':
            label = `${prefix} ${abbr?.length < 5 ? `(${abbr})` : ''}`
            break
          default:
            label = `${prefix}`
        }

        selectOptions.push({
          value: tz.name,
          label: label,
          offset: tz.current.offset,
          abbrev: abbr,
          altName: altName,
        })

        return selectOptions
      }, [])
      .sort((a: ITimezoneOption, b: ITimezoneOption) => a.offset - b.offset)
  }, [labelStyle, timezones, date])

  const handleChange = (tz: ITimezoneOption) => {
    onChange && onChange(tz)
  }

  const findFuzzyTz = (zone: string): ITimezoneOption => {
    let currentTime = spacetime.now('GMT')
    try {
      currentTime = spacetime.now(zone)
    } catch (err) {
      return
    }
    return getOptions
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
        getOptions.find(tz => tz.value === zone) ||
        (zone.indexOf('/') !== -1 && findFuzzyTz(zone))
      )
    } else if (zone.value && !zone.label) {
      return getOptions.find(tz => tz.value === zone.value)
    }
  }

  return (
    <Select
      value={parseTimezone(value)}
      onChange={handleChange}
      options={getOptions}
      onBlur={onBlur}
      {...props}
    />
  )
}

export default TimezoneSelect
