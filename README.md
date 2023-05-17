# 🌐⌚ react-timezone-select

[![NPM Downloads](https://img.shields.io/npm/dm/react-timezone-select?style=flat-square)](https://www.npmjs.com/package/react-timezone-select)
[![npm](https://img.shields.io/npm/v/react-timezone-select?style=flat-square)](https://www.npmjs.com/package/react-timezone-select)
[![GitHub issues](https://img.shields.io/github/issues/ndom91/react-timezone-select?style=flat-square)](https://github.com/ndom91/react-timezone-select/issues)
[![Skypack](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square)](https://skypack.dev/view/react-timezone-select)
[![Test CI](https://badgen.net/github/checks/ndom91/react-timezone-select/main?style=flat-square&label=tests)](https://github.com/ndom91/react-timezone-select/actions?query=workflow%3A%22Tests+CI%22)
[![MIT](https://badgen.net/badge/license/MIT/blue?style=flat-square)](https://github.com/ndom91/react-timezone-select/blob/main/LICENSE)

Another react timezone select component, I know.. However this one has a few key benefits!

While looking around for a good option, I had trouble finding a timezone select components which:

1. Adjusted the choices automatically with Daylight Savings Time (DST)
2. Didn't have a huge list of choices to scroll through when technically only 24 (ish) are necessary

#### Demo: [ndom91.github.io/react-timezone-select](https://ndom91.github.io/react-timezone-select/)

> This demo is also available in the `./examples` directory. Simply run `pnpm dev` in the root of the repository and the vite dev server will start, where you can then find the example app at [`localhost:3001`](http://localhost:3001).

We also have some **more examples** available on Codesandbox using this component with the datetime library `spacetime` ([example](https://codesandbox.io/s/react-timezone-select-usage-z37hf)) as well as with `moment` ([example](https://codesandbox.io/s/react-timezone-select-usage-moment-5n6vn)), as well as in Typescript using the new `Intl` browser API ([example](https://codesandbox.io/s/react-timezone-select-typescript-8lsv3?file=/src/App.tsx)) showing how one might use this component in a real application.

## 🏗️ Installing

```bash
npm install react-select react-timezone-select
```

## 🔭 Usage

```jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import TimezoneSelect from 'react-timezone-select'

const App = () => {
  const [selectedTimezone, setSelectedTimezone] =useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  return (
    <div className="App">
      <h2>react-timezone-select</h2>
      <blockquote>Please make a selection</blockquote>
      <div className="select-wrapper">
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
      <h3>Output:</h3>
      <div
        style={{
          backgroundColor: '#ccc',
          padding: '20px',
          margin: '20px auto',
          borderRadius: '5px',
          maxWidth: '600px',
        }}
      >
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
```

## 🪙 Tips

### 👤 Default Users Timezone

If you'd like the user's own timezone to be set as the initially selected option on render, we can make use of the new `Intl` browser API by setting the default state value to `Intl.DateTimeFormat().resolvedOptions().timeZone`.

```jsx
const [timezone, setTimezone] = useState(
  Intl.DateTimeFormat().resolvedOptions().timeZone
)
```

Thanks [@ndrwksr](https://github.com/ndom91/react-timezone-select/issues/25)

### 🕒 Custom Timezones

You can append custom choices of your own, or fully replace the listed timezone options.

The `timezones` prop takes a dictionary of timezones. Don't worry, we'll prepend the `(GMT...)` part, you just have to pass the city(s) or region(s) you want in your label.

```jsx
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
<TimezoneSelect
  value={selectedTimezone}
  onChange={setSelectedTimezone}
  timezones={{
    ...allTimezones,
    'America/Lima': 'Pittsburgh',
    'Europe/Berlin': 'Frankfurt',
  }}
/>
```

The above example will generate two additional choices in the select options, one with the label `'(GMT-5:00) Pittsburgh'` and another with `'(GMT+1:00) Frankfurt'`. You can omit spreading in the `allTimezones` object and then only your custom timezone options get rendered in the select component.

## 🕹️ Props

- `value` - `string | Object` - Initial/current Timezone.
```
'America/Juneau' | {
  value: 'America/Juneau'
  label: '(GMT-8:00) Alaska,
  abbrev: 'AHST',
  offset: -8,
  altName: 'Alaskan Standard Time'
}
```
- `onBlur` - `() => void`
- `onChange` - `(timezone) => void`
- `labelStyle` - `'original' | 'altName' | 'abbrev'`
- `displayValue` - `'GMT' | 'UTC'`
- `timezones` - `Record<string,string>`
```
timezones={{
  ...allTimezones,
  'America/Lima': 'Pittsburgh',
  'Europe/Berlin': 'Frankfurt',
}}
```

- `maxAbbrLength` - `number` - Truncate `abbrev` labelStyles string to length
- Any other [`react-select`](https://github.com/jedwatson/react-select#props) props

## 🎨 Custom Select component

By default, `react-timezone-select` uses [`react-select`](https://github.com/jedwatson/react-select) as underlying select component. If you'd like to bring your own select component, you can use the `useTimezoneSelect` hook instead of the `TimezoneSelect` component to render the timezones using your self-provided select component.

```jsx
import { useTimezoneSelect, allTimezones } from 'react-timezone-select'

const labelStyle = 'original'
const timezones = {
  ...allTimezones,
  'Europe/Berlin': 'Frankfurt'
}

const customSelect = () => {
  const { options, parseTimezone } = useTimezoneSelect({ labelStyle, timezones })

  return (
    <select onChange={e => onChange(parseTimezone(e.currentTarget.value))}>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}
```

## 🚧 Contributing

Pull requests are always welcome! Please stick to repo settings (prettier, eslint, etc.), and if adding new features, please consider adding test(s) and documentation where appropriate!

## 🙏 Thanks

- [All Contributors](https://github.com/ndom91/react-timezone-select/graphs/contributors)
- [Carlos Matallin](https://github.com/matallo/)
- [spacetime](https://github.com/spencermountain/spacetime)
- [react-select](https://react-select.com)
