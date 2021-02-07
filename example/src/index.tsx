import * as React from 'react'
import * as ReactDOM from 'react-dom'
import TimezoneSelect, {
  i18nTimezones,
  ITimezone,
  ILabelStyle,
} from '../../src'
import './styles.css'

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = React.useState<ITimezone>({
    value: '',
    label: '',
  })
  const [labelStyle, setLabelStyle] = React.useState<ILabelStyle>('original')

  const handleLabelChange = event => {
    setLabelStyle(event.target.value)
  }

  return (
    <div className='App'>
      <div className='header'>
        <h2>react-timezone-select</h2>
        <p>
          <a
            href='https://ndo.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='author'
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
        <label htmlFor='original'>
          <input
            type='radio'
            id='original'
            name='labelStyle'
            value='original'
            defaultChecked={labelStyle === 'original'}
          />
          original
        </label>
        <label htmlFor='altName'>
          <input type='radio' id='altName' name='labelStyle' value='altName' />
          altName
        </label>
        <label htmlFor='abbrev'>
          <input type='radio' id='abbrev' name='labelStyle' value='abbrev' />
          abbrev
        </label>
      </div>
      <div className='select-wrapper'>
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
      <h3>Return Value:</h3>
      <div className='code'>
        <pre
          style={{
            margin: '0 20px',
            fontWeight: 500,
            fontFamily: 'monospace',
          }}
        >
          {JSON.stringify(selectedTimezone, null, 2)}
        </pre>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
