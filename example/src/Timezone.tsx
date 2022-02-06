import React, { useMemo, useState } from 'react';
import spacetime from 'spacetime';
import TimezoneSelect, { allTimezones } from '../../dist/esm';
import type { ITimezone, ILabelStyle } from '../../dist/esm/dist';

const Timezone = () => {
  const [selectedTimezone, setSelectedTimezone] =
    React.useState<ITimezone>('Europe/Rome');
  const [labelStyle, setLabelStyle] = React.useState<ILabelStyle>('original');

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

  return (
    <div className="App">
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
      <div
        style={{
          display: 'flex',
          width: 'min(100%, 400px)',
          justifyContent: 'space-around',
          marginTop: '50px',
        }}
        onChange={handleLabelChange}
      >
        <span>Label Style:</span>
        <label htmlFor="original">
          <input
            type="radio"
            id="original"
            name="labelStyle"
            value={'ori}ginal'}
            defaultChecked={labelStyle === 'original'}
          />
          original
        </label>
        <label htmlFor="altName">
          <input
            type="radio"
            id="altName"
            name="labelStyle"
            value={'altName'}
          />
          altName
        </label>
        <label htmlFor="abbrev">
          <input type="radio" id="abbrev" name="labelStyle" value={'abbrev'} />
          abbrev
        </label>
      </div>
      <div className="select-wrapper">
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          labelStyle={labelStyle}
          onBlur={() => console.log('Blur!')}
          timezones={{
            ...allTimezones,
            'America/Lima': 'Pittsburgh',
            'Europe/Berlin': 'Frankfurt',
          }}
        />
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

export default Timezone;
