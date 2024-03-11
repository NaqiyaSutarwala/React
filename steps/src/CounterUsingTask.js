import React from "react";

class CounterUsingTask extends React.Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        >
          -
        </button>
      </>
    );
  }
}

export default CounterUsingTask;
