# react-timezone-select

Another react timezone select component, I know.. However this one has a few key benefits!

While looking around for a good one online, I had trouble finding timezone select components which **A)** Adjusted the choices with Daylight Savings Time (DST) and **B)** Didn't have a huge list of choices when technically only 24 (ish) are necessary. 

## Installing

```
npm install -s 
```

```
import React from 'react'
import Select from ''

class TimezoneSelector extends React.Component {
  render () {
    return (
      <Select />
    )
  }
}
```

## Examples

![Screenshot 1](screenshots/1.png)

![Screenshot 2](screenshots/2.png)

![Screenshot 3](screenshots/3.png)

## Contributing

Pull requests are always welcome! Two rules:

1. Don't be a dick
2. Please use standard for linting / formatting. If you don't, I will before merge.

## Thanks

- [Carlos Matallin](https://github.com/matallo/) + [Demo](https://codepen.io/matallo/pen/WEjKqG?editors=1010)
- [react-select](https://react-select.com)

