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
      <h2>react-timezone-select</h2>
      <blockquote>Please make a selection</blockquote>
      <div
        style={{
          display: 'flex',
          width: '80%',
          justifyContent: 'space-around',
        }}
        onChange={handleLabelChange}
        checked={labelStyle}
      >
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
      <h3>Output:</h3>
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
