import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Select from '../../src'
import './styles.css'

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({})

  return (
    <div className='App'>
      <h2>react-timezone-select</h2>
      <quote>Please make a selection</quote>
      <div className='select-wrapper'>
        <Select value={selectedTimezone} onChange={tz => setSelectedTimezone(tz)} />
      </div>
      <h3>Output:</h3>
      <div className='code'>
        <span style={{ fontWeight: '500' }}>selectedTimezone: {'{'}</span>{' '}
        <br />
        <span style={{ marginLeft: '20px', fontWeight: '500' }}>
          value: '{selectedTimezone.value}'
        </span>
        <br />
        <span style={{ marginLeft: '20px', fontWeight: '500' }}>
          label: '{selectedTimezone.label}'
        </span>
        <br />
        {'}'}
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
