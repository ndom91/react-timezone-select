import React, { useMemo, useState } from 'react';
import spacetime from 'spacetime';
import TimezoneSelect, { allTimezones, useTimezoneSelect } from '../../dist';
import type {
  ITimezone,
  ILabelStyle,
  TimezoneSelectOptions,
  ITimezoneOption,
} from '../../dist';

export type ISelectStyle = 'react-select' | 'select';

const timezones = {
  ...allTimezones,
  'America/Lima': 'Pittsburgh',
  'Europe/Berlin': 'Frankfurt',
};

const Timezone = () => {
  const [selectedTimezone, setSelectedTimezone] = React.useState<ITimezone>('');
  const [selectStyle, setSelectStyle] =
    React.useState<ISelectStyle>('react-select');
  const [labelStyle, setLabelStyle] = React.useState<ILabelStyle>('original');

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectStyle(event.target.value as ISelectStyle);
  };
  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelStyle(event.target.value as ILabelStyle);
  };

  const [datetime, setDatetime] = useState(spacetime.now());

  useMemo(() => {
    const tzValue =
      typeof selectedTimezone === 'string'
        ? selectedTimezone
        : selectedTimezone.value;
    setDatetime(datetime.goto(tzValue));
  }, [selectedTimezone]);

  const selectOptions = {
    labelStyle,
    timezones,
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h2>react-timezone-select</h2>
        <p>
          <a
            href="https://ndo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="author"
          >
            ndom91
          </a>
        </p>
      </div>
      <div className="select-wrapper">
        {
          {
            'react-select': (
              <TimezoneSelect
                value={selectedTimezone}
                onChange={setSelectedTimezone}
                {...selectOptions}
              />
            ),
            select: (
              <NativeSelectTimezone
                value={selectedTimezone}
                selectOptions={selectOptions}
                onChange={setSelectedTimezone}
              />
            ),
          }[selectStyle]
        }
      </div>
      <div className="label-style-select" onChange={handleSelectChange}>
        <span>Select Style:</span>
        <label htmlFor="react-select">
          <input
            type="radio"
            id="react-select"
            name="selectStyle"
            value="react-select"
            defaultChecked={selectStyle === 'react-select'}
          />
          react-select
        </label>
        <label htmlFor="select">
          <input type="radio" id="select" name="selectStyle" value="select" />
          select
        </label>
      </div>
      <div className="label-style-select" onChange={handleLabelChange}>
        <span>Label Style:</span>
        <label htmlFor="original">
          <input
            type="radio"
            id="original"
            name="labelStyle"
            value="original"
            defaultChecked={labelStyle === 'original'}
          />
          original
        </label>
        <label htmlFor="altName">
          <input type="radio" id="altName" name="labelStyle" value="altName" />
          altName
        </label>
        <label htmlFor="abbrev">
          <input type="radio" id="abbrev" name="labelStyle" value="abbrev" />
          abbrev
        </label>
        <label htmlFor="offsetHidden">
          <input
            type="radio"
            id="offsetHidden"
            name="labelStyle"
            value="offsetHidden"
          />
          offsetHidden
        </label>
      </div>
      <div className="code">
        <div>
          Current Date / Time in{' '}
          {typeof selectedTimezone === 'string'
            ? selectedTimezone.split('/')[1]
            : selectedTimezone.value.split('/')[1]}
          : <pre>{datetime.unixFmt('dd.MM.YY HH:mm:ss')}</pre>
        </div>
        <pre>{JSON.stringify(selectedTimezone, null, 2)}</pre>
      </div>
    </div>
  );
};

type Props = {
  value: ITimezoneOption;
  selectOptions: TimezoneSelectOptions;
  onChange?: (timezone: ITimezoneOption) => void;
};

function NativeSelectTimezone({ selectOptions, value, onChange }: Props) {
  const { options, parseTimezone } = useTimezoneSelect(selectOptions);
  return (
    <select
      value={parseTimezone(value).value}
      onChange={(e) => onChange(parseTimezone(e.currentTarget.value))}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Timezone;
