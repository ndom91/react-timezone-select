import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import TimezoneSelect from '../../src'
import './styles.css'

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({})
  const [labelStyle, setLabelStyle] = useState('original')

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
            alt='ndom91 homepage'
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
        checked={labelStyle}
      >
        <span>Label Style:</span>
        <label for='original'>
          <input
            type='radio'
            id='original'
            name='labelStyle'
            value='original'
            checked={labelStyle === 'original'}
          />
          original
        </label>
        <label for='altName'>
          <input
            type='radio'
            id='altName'
            name='labelStyle'
            value='altName'
            checked={labelStyle === 'altName'}
          />
          altName
        </label>
        <label for='abbrev'>
          <input
            type='radio'
            id='abbrev'
            name='labelStyle'
            value='abbrev'
            checked={labelStyle === 'abbrev'}
          />
          abbrev
        </label>
      </div>
      <div className='select-wrapper'>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={tz => {
            console.log(tz)
            setSelectedTimezone(tz)
          }}
          labelStyle={labelStyle}
          onBlur={() => console.log('Blur!')}
        />
      </div>
      <h3>Return Value:</h3>
      <div className='code'>
        <span style={{ fontWeight: '500' }}>{'{'}</span> <br />
        <span style={{ marginLeft: '20px', fontWeight: '500' }}>
          value: '{selectedTimezone.value}'
        </span>
        <br />
        <span style={{ marginLeft: '20px', fontWeight: '500' }}>
          label: '{selectedTimezone.label}'
        </span>
        <br />
        {selectedTimezone.altName && (
          <>
            <span style={{ marginLeft: '20px', fontWeight: '500' }}>
              name: '{selectedTimezone.altName}'
            </span>
            <br />
          </>
        )}
        {selectedTimezone.abbrev && (
          <>
            <span style={{ marginLeft: '20px', fontWeight: '500' }}>
              abbrev: '{selectedTimezone.abbrev}'
            </span>
            <br />
          </>
        )}
        {'}'}
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
