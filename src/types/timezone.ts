export type ICustomTimezone = {
  [key: string]: string
}

export type ILabelStyle = "original" | "altName" | "abbrev" | "offsetHidden" | "inverted"

export type IDisplayValue = "GMT" | "UTC"

export type ITimezoneOption = {
  value: string
  label: string
  abbrev?: string
  altName?: string
  offset?: number
  searchTerms?: string
}

export type ITimezone = ITimezoneOption | string

export type TimezoneSelectOptions = {
  labelStyle?: ILabelStyle
  displayValue?: IDisplayValue
  timezones?: ICustomTimezone
  currentDatetime?: Date | string
}
