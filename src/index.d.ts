/// <reference types="react" />
import allTimezones from './timezone-list.js';
import type { Props, ITimezone, ITimezoneOption, ILabelStyle } from './types/timezone';
export { allTimezones };
export type { ITimezone, ITimezoneOption, Props, ILabelStyle };
declare const TimezoneSelect: ({ value, onBlur, onChange, labelStyle, timezones, ...props }: Props) => JSX.Element;
export default TimezoneSelect;
