import type { Props as ReactSelectProps } from 'react-select'

export type ICustomTimezone = {
  [key: string]: string
}

export type ILabelStyle = 'original' | 'altName' | 'abbrev'

export type ITimezoneOption = {
  value: string
  label: string
  abbrev?: string
  altName?: string
  offset?: number
}

export type ITimezone = ITimezoneOption | string

export type TimezoneSelectOptions = {
  labelStyle?: ILabelStyle
  timezones?: ICustomTimezone
}

export type Props = Omit<ReactSelectProps<ITimezone, false>, 'onChange'> &
  TimezoneSelectOptions & {
    value: ITimezone
    onChange?: (timezone: ITimezoneOption) => void
  }
