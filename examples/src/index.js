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
    this.setState({ selectedOption: selectedOption })
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App">
        <h2>react-timezone-select</h2>
        <quote>Please make a selection</quote>
        <div className="select-wrapper">
          <Select value={selectedOption} onChange={this.handleChange} />
        </div>
        <h3>Output:</h3>
        <div className="code">
          <span style={{ fontWeight: "500" }}>selectedOption: {`{`}</span>{" "}
          <br />
          <span style={{ marginLeft: "20px", fontWeight: "500" }}>
            value: '{selectedOption.value}'
          </span>
          <br />
          <span style={{ marginLeft: "20px", fontWeight: "500" }}>
            label: '{selectedOption.label}'
          </span>
          <br />
          {`}`}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
