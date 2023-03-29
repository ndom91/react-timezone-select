import type { Props as ReactSelectProps } from 'react-select'
export declare type ICustomTimezone = {
  [key: string]: string
}
export declare type ILabelStyle = 'original' | 'altName' | 'abbrev'
export interface ITimezoneOption {
  value: string
  label: string
  offset: number
  abbrev?: string
  altName?: string
}
export declare type ITimezone = ITimezoneOption | string
export interface Props
  extends Omit<ReactSelectProps<ITimezone, false>, 'onChange'> {
  value: ITimezone
  labelStyle?: ILabelStyle
  onChange?: (timezone: ITimezoneOption) => void
  timezones?: ICustomTimezone
  maxAbbrLength?: number
}
