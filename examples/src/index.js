import React from "react"
import ReactDOM from "react-dom"
import Select from '../../src'
import './styles.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: ''
    }
  }

  handleChange = (selectedOption) => {
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
