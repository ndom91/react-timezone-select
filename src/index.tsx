import { useMemo } from "react"
import Select from "react-select"
import spacetime from "spacetime"
import soft from "timezone-soft"
import type { Props as ReactSelectProps } from "react-select"
import "./index.css"

export type ICustomTimezone = {
  [key: string]: string
}

export const i18nTimezones: ICustomTimezone = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Honolulu": "Hawaii",
  "America/Juneau": "Alaska",
  "America/Boise": "Mountain Time",
  "America/Dawson": "Dawson, Yukon",
  "America/Chihuahua": "Chihuahua, La Paz, Mazatlan",
  "America/Phoenix": "Arizona",
  "America/Chicago": "Central Time",
  "America/Regina": "Saskatchewan",
  "America/Mexico_City": "Guadalajara, Mexico City, Monterrey",
  "America/Belize": "Central America",
  "America/Detroit": "Eastern Time",
  "America/Bogota": "Bogota, Lima, Quito",
  "America/Caracas": "Caracas, La Paz",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Sao_Paulo": "Brasilia",
  "America/Tijuana": "Tijuana",
  "America/Montevideo": "Montevideo",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Los_Angeles": "Pacific Time",
  "Atlantic/Azores": "Azores",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  GMT: "UTC",
  "Europe/London": "Edinburgh, London",
  "Europe/Dublin": "Dublin",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca, Monrovia",
  "Atlantic/Canary": "Canary Islands",
  "Europe/Belgrade": "Belgrade, Bratislava, Budapest, Ljubljana, Prague",
  "Europe/Sarajevo": "Sarajevo, Skopje, Warsaw, Zagreb",
  "Europe/Brussels": "Brussels, Copenhagen, Madrid, Paris",
  "Europe/Amsterdam": "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
  "Africa/Algiers": "West Central Africa",
  "Europe/Bucharest": "Bucharest",
  "Africa/Cairo": "Cairo",
  "Europe/Helsinki": "Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius",
  "Europe/Athens": "Athens, Istanbul, Minsk",
  "Asia/Jerusalem": "Jerusalem",
  "Africa/Harare": "Harare, Pretoria",
  "Europe/Moscow": "Moscow, St. Petersburg, Volgograd",
  "Asia/Kuwait": "Kuwait, Riyadh",
  "Africa/Nairobi": "Nairobi",
  "Asia/Baghdad": "Baghdad",
  "Asia/Tehran": "Tehran",
  "Asia/Dubai": "Abu Dhabi, Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Ekaterinburg",
  "Asia/Karachi": "Islamabad, Karachi, Tashkent",
  "Asia/Kolkata": "Chennai, Kolkata, Mumbai, New Delhi",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Colombo": "Sri Jayawardenepura",
  "Asia/Almaty": "Almaty, Novosibirsk",
  "Asia/Rangoon": "Yangon Rangoon",
  "Asia/Bangkok": "Bangkok, Hanoi, Jakarta",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Shanghai": "Beijing, Chongqing, Hong Kong SAR, Urumqi",
  "Asia/Kuala_Lumpur": "Kuala Lumpur, Singapore",
  "Asia/Taipei": "Taipei",
  "Australia/Perth": "Perth",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Asia/Yakutsk": "Yakutsk",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Brisbane": "Brisbane",
  "Australia/Hobart": "Hobart",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Guam": "Guam, Port Moresby",
  "Asia/Magadan": "Magadan, Solomon Islands, New Caledonia",
  "Asia/Kamchatka": "Kamchatka, Marshall Islands",
  "Pacific/Fiji": "Fiji Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Pacific/Tongatapu": "Nuku'alofa",
}

export type ILabelStyle = "original" | "altName" | "abbrev"
export enum LabelType {
  ORIGINAL = "original",
  ALTNAME = "altName",
  ABBREV = "abbrev",
}

export interface ITimezoneOption {
  value: string
  label: string
  abbrev?: string
  altName?: string
  offset?: number
}

export type ITimezone = ITimezoneOption | string

interface Props extends ReactSelectProps {
  value: ITimezone
  labelStyle?: ILabelStyle
  timezones?: ICustomTimezone
}

const TimezoneSelect = ({
  value,
  onBlur,
  onChange,
  labelStyle = "original",
  timezones = i18nTimezones,
  ...props
}: Props) => {
  const getOptions = useMemo(() => {
    return Object.entries(timezones)
      .reduce((selectOptions, zone) => {
        const now = spacetime.now(zone[0])
        const tz = now.timezone()
        const tzStrings = soft(zone[0])

        let label = ""
        // @ts-expect-error
        let abbr = now.isDST() ? tzStrings[0].daylight?.abbr : tzStrings[0].standard?.abbr
        let altName = now.isDST() ? tzStrings[0].daylight?.name : tzStrings[0].standard?.name

        const min = tz.current.offset * 60
        const hr =
          `${(min / 60) ^ 0}:` + (min % 60 === 0 ? "00" : Math.abs(min % 60))
        const prefix = `(GMT${hr.includes("-") ? hr : `+${hr}`}) ${zone[1]}`

        switch (labelStyle) {
          case "original":
            label = prefix
            break
          case "altName":
            label = `${prefix} ${!altName.includes("/") ? `(${altName})` : ""}`
            break
          case "abbrev":
            label = `${prefix} ${abbr.length < 5 ? `(${abbr})` : ""}`
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
      }, [] as ITimezoneOption[])
      .sort((a: ITimezoneOption, b: ITimezoneOption) => a.offset - b.offset)
  }, [labelStyle, timezones])

  const handleChange = (tz: ITimezone) => {
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
                currentTime.tz.substr(currentTime.tz.indexOf("/") + 1)
              ) !== -1
          ) {
            score += 8
          }
          if (
            tz.label
              .toLowerCase()
              .indexOf(
                currentTime.tz.substr(currentTime.tz.indexOf("/") + 1)
              ) !== -1
          ) {
            score += 4
          }
          if (
            tz.value
              .toLowerCase()
              .indexOf(currentTime.tz.substr(0, currentTime.tz.indexOf("/")))
          ) {
            score += 2
          }
          score += 1
        } else if (tz.value === "GMT") {
          score += 1
        }
        return { tz, score }
      })
      .sort((a, b) => b.score - a.score)
      .map(({ tz }) => tz)[0]
  }

  const parseTimezone = (zone: ITimezone) => {
    if (typeof zone === "object" && zone.value && zone.label) return zone
    if (typeof zone === "string") {
      return (
        getOptions.find(tz => tz.value === zone) ||
        (zone.indexOf("/") !== -1 && findFuzzyTz(zone))
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
