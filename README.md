# 🌐⌚ react-timezone-select

[![npm](https://img.shields.io/npm/v/react-timezone-select?style=flat-square)](https://www.npmjs.com/package/react-timezone-select)
[![NPM Downloads](https://img.shields.io/npm/dm/react-timezone-select?style=flat-square)](https://www.npmjs.com/package/react-timezone-select)
[![Skypack](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square)](https://skypack.dev/view/react-timezone-select)
[![Test CI](https://flat.badgen.net/github/checks/ndom91/react-timezone-select/main?style=flat-square&label=tests)](https://github.com/ndom91/react-timezone-select/actions?query=workflow%3A%22Tests+CI%22)
[![MIT](https://flat.badgen.net/badge/license/MIT/blue?style=flat-square)](https://github.com/ndom91/react-timezone-select/blob/main/LICENSE)

Another react timezone select component, I know.. However this one has a few key benefits!

While looking around for a good option, I had trouble finding a timezone select components which:

1. Adjusted the choices automatically with Daylight Savings Time (DST)
2. Didn't have a huge list of choices to scroll through when technically only 24 (ish) are necessary

> [!IMPORTANT]
>
> ### Demo: [ndom91.github.io/react-timezone-select](https://ndom91.github.io/react-timezone-select/)
>
> This demo is also available in the `./examples` directory. Simply run `pnpm dev` in the root of the repository and the vite dev server will start, where you can then find the example app at [`localhost:3001`](http://localhost:3001).

## 🏗️ Installing

```bash
npm install react-timezone-select react-select
```

> [!CAUTION]
> The package `react-select` is optional. It is unnecessary if you're only using [the hook](#-timezone-hook).

## 🔭 Usage

```tsx
import React, { useState } from "react"
import ReactDOM from "react-dom"
import TimezoneSelect, { type ITimezone } from "react-timezone-select"

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  )

  return (
    <div className="App">
      <h2>react-timezone-select</h2>
      <blockquote>Please make a selection</blockquote>
      <div className="select-wrapper">
        <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
      </div>
      <h3>Output:</h3>
      <div
        style={{
          backgroundColor: "#ccc",
          padding: "20px",
          margin: "20px auto",
          borderRadius: "5px",
          maxWidth: "600px",
        }}
      >
        <pre
          style={{
            margin: "0 20px",
            fontWeight: 500,
            fontFamily: "monospace",
          }}
        >
          {JSON.stringify(selectedTimezone, null, 2)}
        </pre>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

## 🎨 Timezone Hook

By default, `react-timezone-select` uses [`react-select`](https://github.com/jedwatson/react-select) as underlying select component. If you'd like to bring your own select component, you can use the `useTimezoneSelect` hook instead of the `TimezoneSelect` component to render the timezones using your self-provided select component.

```tsx
import { useTimezoneSelect, allTimezones } from "react-timezone-select"

const labelStyle = "original"
const timezones = {
  ...allTimezones,
  "Europe/Berlin": "Frankfurt",
}

const customSelect = () => {
  const { options, parseTimezone } = useTimezoneSelect({ labelStyle, timezones })

  return (
    <select onChange={(e) => onChange(parseTimezone(e.currentTarget.value))}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}
```

## 🕹️ Props

<table>
  <tbody>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Note</th>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td><code>string | ITimezoneOption<string, string></code></td>
      <td>null</td>
      <td>Initial/current Timezone</td>
    </tr>
    <tr>
      <td><code>onBlur</code></td>
      <td><code>() => void</code></td>
      <td>null</td>
      <td></td>
    </tr>
    <tr>
      <td><code>onChange</code></td>
      <td><code>(timezone: ITimezoneOption) => void</code></td>
      <td>null</td>
      <td></td>
    </tr>
    <tr>
      <td><code>labelStyle</code></td>
      <td><code>'original' | 'altName' | 'abbrev' | 'offsetHidden'</code></td>
      <td><code>'original'</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>displayValue</code></td>
      <td><code>'GMT' | 'UTC'</code></td>
      <td><code>'GMT'</code></td>
      <td>Prefix for the label (i.e. <code>"(GMT+2:00)"</code> or <code>"(UTC+2:00)"</code>)</td>
    </tr>
    <tr>
      <td><code>timezones</code></td>
      <td><code>Record<string,string></code></td>
      <td><code>allTimezones</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>currentDatetime</code></td>
      <td><code>Date | string</code></td>
      <td>null</td>
      <td>Override datetime used to calculate timezone values (alternative to current datetime), useful for calculating different summer / winter times, etc.</td>
    </tr>
  </tbody>
</table>

#### Example `value`s:

```ts
// string
value='America/Juneau'
// ITimezoneOption; i.e. `onChange` return value
value={{
  value: 'America/Juneau'
  label: '(GMT-8:00) Alaska,
  abbrev: 'AHST',
  offset: -8,
  altName: 'Alaskan Standard Time'
}}
```

#### Example `timezones`:

```ts
timezones={{
  ...allTimezones,
  'America/Lima': 'Pittsburgh',
  'Europe/Berlin': 'Frankfurt',
}}
```

## ✨ Tips

### 👤 Default Users Timezone

If you'd like the user's own timezone to be set as the initially selected option on render, we can make use of the new `Intl` browser API by setting the default state value to `Intl.DateTimeFormat().resolvedOptions().timeZone`.

```tsx
const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
```

### 🕒 Custom Timezones

You can append custom choices of your own, or fully replace the listed timezone options.

The `timezones` prop takes a dictionary of timezones in the format of "`{ tzIdentifier: Label }`" ([Timezone Identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)). 

```tsx
import TimezoneSelect, { type ITimezone, allTimezones } from 'react-timezone-select'

const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>('Europe/Berlin')

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

The example above will include all original timezones and generate two additional choices:

- `'(GMT-5:00) Pittsburgh'`
- `'(GMT+1:00) Frankfurt'`

We'll prepend the correct `(GMT...)` part to the generated label, you just have to provide the string you want in your label. Also, you can omit spreading in the `allTimezones` object for a select dropdown consisting of only your custom choices.

## 🚧 Contributing

Pull requests are always welcome! Please stick to repo formatting/linting settings, and if adding new features, please consider adding test(s) and documentation where appropriate!

## 🙏 Thanks

- [All Contributors](https://github.com/ndom91/react-timezone-select/graphs/contributors)
- [Carlos Matallin](https://github.com/matallo/)
- [spacetime](https://github.com/spencermountain/spacetime)
- [react-select](https://react-select.com)

## 📝 License

MIT
