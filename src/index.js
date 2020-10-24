import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import spacetime from 'spacetime'
import { display } from 'spacetime-informal'

const i18n = {
  'Pacific/Midway': 'Midway Island, Samoa',
  'Pacific/Honolulu': 'Hawaii',
  'America/Juneau': 'Alaska',
  'America/Dawson': 'Tijuana, Pacific Time',
  'America/Boise': 'Mountain Time',
  'America/Chihuahua': 'Chihuahua, La Paz, Mazatlan',
  'America/Phoenix': 'Arizona',
  'America/Chicago': 'Central Time',
  'America/Regina': 'Saskatchewan',
  'America/Mexico_City': 'Guadalajara, Mexico City, Monterrey',
  'America/Belize': 'Central America',
  'America/Detroit': 'Eastern Time',
  'America/Bogota': 'Bogota, Lima, Quito',
  'America/Caracas': 'Caracas, La Paz',
  'America/Santiago': 'Santiago',
  'America/St_Johns': 'Newfoundland and Labrador',
  'America/Sao_Paulo': 'Brasilia',
  'America/Argentina/Buenos_Aires': 'Buenos Aires, Georgetown',
  'America/Godthab': 'Greenland',
  'Atlantic/Azores': 'Azores',
  'Atlantic/Cape_Verde': 'Cape Verde Islands',
  GMT: 'Dublin, Edinburgh, Lisbon, London',
  'Africa/Casablanca': 'Casablanca, Monrovia',
  'Atlantic/Canary': 'Canary Islands',
  'Europe/Belgrade': 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
  'Europe/Sarajevo': 'Sarajevo, Skopje, Warsaw, Zagreb',
  'Europe/Brussels': 'Brussels, Copenhagen, Madrid, Paris',
  'Europe/Amsterdam': 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
  'Africa/Algiers': 'West Central Africa',
  'Europe/Bucharest': 'Bucharest',
  'Africa/Cairo': 'Cairo',
  'Europe/Helsinki': 'Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius',
  'Europe/Athens': 'Athens, Istanbul, Minsk',
  'Asia/Jerusalem': 'Jerusalem',
  'Africa/Harare': 'Harare, Pretoria',
  'Europe/Moscow': 'Moscow, St. Petersburg, Volgograd',
  'Asia/Kuwait': 'Kuwait, Riyadh',
  'Africa/Nairobi': 'Nairobi',
  'Asia/Baghdad': 'Baghdad',
  'Asia/Tehran': 'Tehran',
  'Asia/Dubai': 'Abu Dhabi, Muscat',
  'Asia/Baku': 'Baku, Tbilisi, Yerevan',
  'Asia/Kabul': 'Kabul',
  'Asia/Yekaterinburg': 'Ekaterinburg',
  'Asia/Karachi': 'Islamabad, Karachi, Tashkent',
  'Asia/Kolkata': 'Chennai, Kolkata, Mumbai, New Delhi',
  'Asia/Kathmandu': 'Kathmandu',
  'Asia/Dhaka': 'Astana, Dhaka',
  'Asia/Colombo': 'Sri Jayawardenepura',
  'Asia/Almaty': 'Almaty, Novosibirsk',
  'Asia/Rangoon': 'Yangon Rangoon',
  'Asia/Bangkok': 'Bangkok, Hanoi, Jakarta',
  'Asia/Krasnoyarsk': 'Krasnoyarsk',
  'Asia/Shanghai': 'Beijing, Chongqing, Hong Kong SAR, Urumqi',
  'Asia/Kuala_Lumpur': 'Kuala Lumpur, Singapore',
  'Asia/Taipei': 'Taipei',
  'Australia/Perth': 'Perth',
  'Asia/Irkutsk': 'Irkutsk, Ulaanbaatar',
  'Asia/Seoul': 'Seoul',
  'Asia/Tokyo': 'Osaka, Sapporo, Tokyo',
  'Asia/Yakutsk': 'Yakutsk',
  'Australia/Darwin': 'Darwin',
  'Australia/Adelaide': 'Adelaide',
  'Australia/Sydney': 'Canberra, Melbourne, Sydney',
  'Australia/Brisbane': 'Brisbane',
  'Australia/Hobart': 'Hobart',
  'Asia/Vladivostok': 'Vladivostok',
  'Pacific/Guam': 'Guam, Port Moresby',
  'Asia/Magadan': 'Magadan, Solomon Islands, New Caledonia',
  'Pacific/Fiji': 'Fiji Islands, Kamchatka, Marshall Islands',
  'Pacific/Auckland': 'Auckland, Wellington',
  'Pacific/Tongatapu': "Nuku'alofa",
}

const TimezoneSelect = ({
  value,
  onBlur,
  onChange,
  labelStyle = 'original',
  ...props
}) => {
  const [selectedTimezone, setSelectedTimezone] = useState({})

  const getOptions = useMemo(() => {
    const options = []
    Object.entries(i18n)
      .reduce((obj, entry) => {
        const a = spacetime.now().goto(entry[0])
        const tz = a.timezone()
        const tzDisplay = display(entry[0])
        let abbrev = entry[0]
        let altName = entry[0]
        if (tzDisplay && tzDisplay.daylight && tzDisplay.standard) {
          abbrev = a.isDST()
            ? tzDisplay.daylight.abbrev
            : tzDisplay.standard.abbrev
          altName = a.isDST()
            ? tzDisplay.daylight.name
            : tzDisplay.standard.name
        }
        obj.push({
          name: entry[0],
          label: entry[1],
          offset: tz.current.offset,
          abbrev: abbrev,
          altName: altName,
        })
        return obj
      })
      .sort((a, b) => {
        return a.offset - b.offset
      })
      .map(tz => {
        if (tz.offset === undefined) return false
        let label = ''
        const min = tz.offset * 60
        const hr =
          `${(min / 60) ^ 0}:` + (min % 60 === 0 ? '00' : Math.abs(min % 60))
        const prefix = `(GMT${hr.includes('-') ? hr : `+${hr}`}) ${tz.label}`

        switch (labelStyle) {
          case 'original':
            label = prefix
            break
          case 'altName':
            label = `${prefix} ${
              !tz.altName.includes('/') ? `(${tz.altName})` : ''
            }`
            break
          case 'abbrev':
            label = `${prefix} 
            ${tz.abbrev.length < 5 ? `(${tz.abbrev})` : ''}`
            break
          default:
            label = `${prefix}`
        }
        options.push({
          value: tz.name,
          label: label,
          abbrev: tz.abbrev,
          altName: tz.altName,
        })
      })
    return options
  }, [labelStyle])

  const handleChange = tz => {
    setSelectedTimezone(tz)
    onChange && onChange(tz)
  }

  return (
    <Select
      value={value.value ? value.value : value}
      onChange={handleChange}
      options={getOptions}
      onBlur={onBlur}
      {...props}
    />
  )
}

export default TimezoneSelect
