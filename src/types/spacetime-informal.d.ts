export function find(tz: string): string

export function display(geo: string): DisplayFormat

export function version(): string

export interface DisplayFormat {
  iana: string
  standard: TimeZoneInfo
  daylight: TimeZoneInfo
}

export interface TimeZoneInfo {
  name: string
  abbrev: string
}
