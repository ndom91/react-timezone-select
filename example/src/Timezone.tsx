import React, { useState } from 'react';
import TimezoneSelect, {
  i18nTimezones,
  ITimezone,
  ILabelStyle,
  LabelType,
} from '../../src';

const Timezone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    'Europe/Rome',
  );
  const [labelStyle, setLabelStyle] = useState<ILabelStyle>('original');

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelStyle(event.target.value as LabelType);
  };

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
            value={LabelType.ORIGINAL}
            defaultChecked={labelStyle === 'original'}
          />
          original
        </label>
        <label htmlFor="altName">
          <input
            type="radio"
            id="altName"
            name="labelStyle"
            value={LabelType.ALTNAME}
          />
          altName
        </label>
        <label htmlFor="abbrev">
          <input
            type="radio"
            id="abbrev"
            name="labelStyle"
            value={LabelType.ABBREV}
          />
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
            ...i18nTimezones,
            'America/Lima': 'Pittsburgh',
            'Europe/Berlin': 'Frankfurt',
          }}
        />
      </div>
      <div className="code">
        <pre>{JSON.stringify(selectedTimezone, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Timezone;
