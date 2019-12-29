# 🌐⌚ react-timezone-select

![NPM Downloads](https://img.shields.io/npm/dm/react-timezone-select?style=flat-square)
![npm](https://img.shields.io/npm/v/react-timezone-select?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/ndom91/react-timezone-select?style=flat-square)
![NPM](https://img.shields.io/npm/l/react-timezone-select?style=flat-square)


Another react timezone select component, I know.. However this one has a few key benefits!

While looking around for a good one, I had trouble finding a timezone select components which:   

**1**) Adjusted the choices with Daylight Savings Time (DST)    
**2**) Didn't have a huge list of choices to scroll through when technically only 24 (ish) are necessary. 

#### Demo: [ndom91.github.io/react-timezone-select/](https://ndom91.github.io/react-timezone-select/)

## 🏗️ Installing

```bash
npm install react-timezone-select
```

## 🔭 Usage 
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Select from 'react-timezone-select'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: ''
    }
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption })
  }

  render() {
    const {
      selectedOption
    } = this.state

    return (
      <div className="App">
        <div className="select-wrapper">
          <Select 
            value={selectedOption} 
            onChange={this.handleChange}
          />
        </div>
        <h3>{selectedOption.value} - {selectedOption.label}</h3>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## 🖥️ Example

#### Demo: [ndom91.github.io/react-timezone-select/](https://ndom91.github.io/react-timezone-select/)

Theres a small example page / implementation available in the `./examples` directory, simply run `npm start` after installing everything and webpack dev server should begin, where you will be able to find the demo at `localhost:3001`

![Screenshot 1](screenshots/1.png)

![Screenshot 3](screenshots/3.png)


## 🚧 Contributing

Pull requests are always welcome! Please use [`standard.js`](https://standardjs.com/)

## 🙏 Thanks

- [Carlos Matallin](https://github.com/matallo/) + [Demo](https://codepen.io/matallo/pen/WEjKqG?editors=1010)
- [react-select](https://react-select.com)

