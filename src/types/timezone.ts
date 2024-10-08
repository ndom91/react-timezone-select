import type { Props as ReactSelectProps } from "react-select"

export type ICustomTimezone = {
  [key: string]: string
}

export type ILabelStyle = "original" | "altName" | "abbrev" | "offsetHidden"

export type IDisplayValue = "GMT" | "UTC"

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
  displayValue?: IDisplayValue
  timezones?: ICustomTimezone
  currentDatetime?: Date | string
}

export type Props = Omit<ReactSelectProps<ITimezone>, "onChange"> &
  TimezoneSelectOptions & {
    value: ITimezone
    onChange?: (timezone: ITimezoneOption) => void
  }
