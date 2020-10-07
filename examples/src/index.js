import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import TimezoneSelect from '../../src'
import './styles.css'

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({})

  return (
    <div className='App'>
      <h2>react-timezone-select</h2>
      <blockquote>Please make a selection</blockquote>
      <div className='select-wrapper'>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={tz => setSelectedTimezone(tz)}
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
        <span style={{ marginLeft: '20px', fontWeight: '500' }}>
          abbrev: '{selectedTimezone.abbrev}'
        </span>
        <br />
        {'}'}
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
