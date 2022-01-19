import React from 'react'
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

// Customize to make it look like antd timepicker
const tzCustomStyles = {
  container: (provided, state) => ({
    ...provided,
    height: '32px',
    minWidth: '15em',
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: '32px',
    maxHeight: '34px',
    borderRadius: '2px',
    padding: '0'
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: '32px',
    padding: '4px 8px'
  }),
  indicatorsSeparator: (provided, state) => ({
    ...provided,
    margin: '0'
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '30px'
  }),
  indicatorContainer: (provided, state) => ({
    ...provided,
    padding: '6px'
  }),
  input: (provided, state) => ({
    ...provided,
    color: 'gray',
    margin: '5px'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    background: 'transparent',
    color: '#bfbfbf',
    paddingBottom: '10px'
  })
}

export enum LabelType {
  ORIGINAL = 'original',
  ALTNAME = 'altName',
  ABBREV = 'abbrev',
}

export { allTimezones }
export type { ITimezone, ITimezoneOption, Props, ILabelStyle }

export default function TimezoneSelect({
  value,
  onBlur,
  onChange,
  labelStyle = 'original',
  timezones,
  ...props
}: Props) {
  if (!timezones) timezones = allTimezones
  const getOptions = React.useMemo(() => {
    return Object.entries(timezones)
      .reduce<ITimezoneOption[]>((selectOptions, zone) => {
        const now = spacetime.now(zone[0])
        const tz = now.timezone()
        const tzStrings = soft(zone[0])

        let label = ''
        let abbr = now.isDST()
          ? // @ts-expect-error
            tzStrings[0].daylight?.abbr
          : // @ts-expect-error
            tzStrings[0].standard?.abbr
        let altName = now.isDST()
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
  }, [labelStyle, timezones])

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
                currentTime.tz.substr(currentTime.tz.indexOf('/') + 1)
              ) !== -1
          ) {
            score += 8
          }
          if (
            tz.label
              .toLowerCase()
              .indexOf(
                currentTime.tz.substr(currentTime.tz.indexOf('/') + 1)
              ) !== -1
          ) {
            score += 4
          }
          if (
            tz.value
              .toLowerCase()
              .indexOf(currentTime.tz.substr(0, currentTime.tz.indexOf('/')))
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
      styles={tzCustomStyles}
      value={parseTimezone(value)}
      onChange={handleChange}
      options={getOptions}
      onBlur={onBlur}
      {...props}
    />
  )
}
