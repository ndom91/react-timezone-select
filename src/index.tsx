import Select from "react-select"
import { allTimezones, useTimezoneSelect } from "./hook.js"
import type { Props, ITimezone, ITimezoneOption, ILabelStyle, TimezoneSelectOptions } from "./types/select.js"

const TimezoneSelect = ({
  value,
  onBlur,
  onChange,
  labelStyle,
  displayValue,
  timezones,
  currentDatetime,
  ...props
}: Props) => {
  const { options, parseTimezone, filterOption } = useTimezoneSelect({
    timezones,
    labelStyle,
    displayValue,
    currentDatetime,
  })

  const handleChange = (tz: ITimezoneOption) => {
    if (!onChange) return
    const { searchTerms: _, ...rest } = tz
    onChange(rest as ITimezoneOption)
  }

  return (
    <Select
      value={parseTimezone(value)}
      onChange={handleChange}
      options={options}
      filterOption={filterOption}
      onBlur={onBlur}
      {...props}
    />
  )
}

export { TimezoneSelect as default, allTimezones, useTimezoneSelect }
export type { ITimezone, ITimezoneOption, Props, ILabelStyle, TimezoneSelectOptions }
