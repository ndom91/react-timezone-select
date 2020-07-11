# 🌐⌚ react-timezone-select

[![NPM Downloads](https://img.shields.io/npm/dm/react-timezone-select?style=flat-square)](https://www.npmjs.com/package/react-timezone-select)
[![npm](https://img.shields.io/npm/v/react-timezone-select?style=flat-square)](https://www.npmjs.com/package/react-timezone-select)
[![GitHub issues](https://img.shields.io/github/issues/ndom91/react-timezone-select?style=flat-square)](https://github.com/ndom91/react-timezone-select)
![NPM](https://img.shields.io/npm/l/react-timezone-select?style=flat-square)

Another react timezone select component, I know.. However this one has a few key benefits!

While looking around for a good one, I had trouble finding a timezone select components which:

**1**) Adjusted the choices with Daylight Savings Time (DST)  
**2**) Didn't have a huge list of choices to scroll through when technically only 24 (ish) are necessary.

> Update: **v0.7+** now built with [`spacetime`](https://github.com/spencermountain/spacetime) instead of [`moment.js`](https://momentjs.com), reducing bundle size by **~66%**!

#### Demo: [ndom91.github.io/react-timezone-select](https://ndom91.github.io/react-timezone-select/)

## 🏗️ Installing

```bash
npm install --save-prod react-timezone-select
```

## 🔭 Usage

```jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import TimezoneSelect from 'react-timezone-select'

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
```

## 🕹️ Props

- `value` - `{ value: string, label: string }`
- `onBlur` - `() => void`
- `onChange` - `(timezone) => void`
- any other `react-select` props, className, etc. - we pass it all on down now.

## 🖥️ Example

#### Demo: [ndom91.github.io/react-timezone-select/](https://ndom91.github.io/react-timezone-select/)

Theres a small example page / implementation available in the `./examples` directory, simply run `npm start` after installing everything and webpack dev server should begin, where you will be able to find the demo at `localhost:3001`

> ![Screenshot 1](https://github.com/ndom91/react-timezone-select/blob/main/screenshots/1.png?raw=true)

> ![Screenshot 3](https://github.com/ndom91/react-timezone-select/blob/main/screenshots/3.png?raw=true)

## 🚧 Contributing

Pull requests are always welcome!

## 🙏 Thanks

- [Carlos Matallin](https://github.com/matallo/) + [Demo](https://codepen.io/matallo/pen/WEjKqG?editors=1010)
- [spacetime](https://github.com/spencermountain/spacetime)
- [react-select](https://react-select.com)
