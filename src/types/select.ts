import type { Props as ReactSelectProps } from "react-select"
import type { ITimezone, ITimezoneOption, TimezoneSelectOptions } from "./timezone.js"

export type Props = Omit<ReactSelectProps<ITimezone>, "onChange"> &
  TimezoneSelectOptions & {
    value: ITimezone
    onChange?: (timezone: ITimezoneOption) => void
  }

export type { ITimezone, ITimezoneOption, ILabelStyle, TimezoneSelectOptions } from "./timezone.js"
