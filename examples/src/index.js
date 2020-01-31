import React from "react";
import ReactDOM from "react-dom";
import Select from "../../src";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {}
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App">
        <h2>react-timezone-select</h2>
        <div className="select-wrapper">
          <Select value={selectedOption} onChange={this.handleChange} />
        </div>
        <h3>Output:</h3>
        <pre>
        selectedOption: {
          value: {selectedOption.value}
          label: {selectedOption.label}
        }
        </pre>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
