import React from "../../../pkg/react";
import Select from "../../../pkg/react-select";
import spacetime from "../../../pkg/spacetime";
import {display} from "../../../pkg/spacetime-informal";
export const i18nTimezones = {
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
  "America/Tijuana": "Tijuana, Pacific Time",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
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
  "Pacific/Tongatapu": "Nuku'alofa"
};
export var LabelType;
(function(LabelType2) {
  LabelType2["ORIGINAL"] = "original";
  LabelType2["ALTNAME"] = "altName";
  LabelType2["ABBREV"] = "abbrev";
})(LabelType || (LabelType = {}));
const TimezoneSelect = ({
  value,
  onBlur,
  onChange,
  labelStyle = "original",
  timezones = i18nTimezones,
  ...props
}) => {
  const getOptions = React.useMemo(() => {
    return Object.entries(timezones).reduce((selectOptions, zone) => {
      const now = spacetime.now().goto(zone[0]);
      const tz = now.timezone();
      const tzStrings = display(zone[0]);
      let label = "";
      let abbrev = zone[0];
      let altName = zone[0];
      if (tzStrings && tzStrings.daylight && tzStrings.standard) {
        abbrev = now.isDST() ? tzStrings.daylight.abbrev : tzStrings.standard.abbrev;
        altName = now.isDST() ? tzStrings.daylight.name : tzStrings.standard.name;
      }
      const min = tz.current.offset * 60;
      const hr = `${min / 60 ^ 0}:` + (min % 60 === 0 ? "00" : Math.abs(min % 60));
      const prefix = `(GMT${hr.includes("-") ? hr : `+${hr}`}) ${zone[1]}`;
      switch (labelStyle) {
        case "original":
          label = prefix;
          break;
        case "altName":
          label = `${prefix} ${!altName.includes("/") ? `(${altName})` : ""}`;
          break;
        case "abbrev":
          label = `${prefix} ${abbrev.length < 5 ? `(${abbrev})` : ""}`;
          break;
        default:
          label = `${prefix}`;
      }
      selectOptions.push({
        value: zone[0],
        label,
        offset: tz.current.offset,
        abbrev,
        altName
      });
      return selectOptions;
    }, []).sort((a, b) => a.offset - b.offset);
  }, [labelStyle, timezones]);
  const handleChange = (tz) => {
    onChange && onChange(tz);
  };
  const findFuzzyTz = (zone) => {
    let currentTime;
    try {
      currentTime = spacetime.now(zone);
    } catch (err) {
      return;
    }
    return getOptions.filter((tz) => tz.offset === currentTime.timezone().current.offset).map((tz) => {
      let score = 0;
      if (currentTime.timezones[tz.value.toLowerCase()] && !!currentTime.timezones[tz.value.toLowerCase()].dst === currentTime.timezone().hasDst) {
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substr(currentTime.tz.indexOf("/") + 1)) !== -1) {
          score += 8;
        }
        if (tz.label.toLowerCase().indexOf(currentTime.tz.substr(currentTime.tz.indexOf("/") + 1)) !== -1) {
          score += 4;
        }
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substr(0, currentTime.tz.indexOf("/")))) {
          score += 2;
        }
        score += 1;
      } else if (tz.value === "GMT") {
        score += 1;
      }
      return {tz, score};
    }).sort((a, b) => b.score - a.score).map(({tz, score}) => tz)[0];
  };
  const parseTimezone = (zone) => {
    if (typeof zone === "object" && zone.value && zone.label)
      return zone;
    if (typeof zone === "string") {
      return getOptions.find((tz) => tz.value === zone) || zone.indexOf("/") !== -1 && findFuzzyTz(zone);
    } else if (zone.value && !zone.label) {
      return getOptions.find((tz) => tz.value === zone.value);
    }
  };
  return /* @__PURE__ */ React.createElement(Select, {
    value: parseTimezone(value),
    onChange: handleChange,
    options: getOptions,
    onBlur,
    ...props
  });
};
export default TimezoneSelect;
