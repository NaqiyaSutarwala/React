import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
    // this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((cur) => {
      return { count: cur.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((cur) => {
      return { count: cur.count + 1 };
    });
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.handleDecrement}>-</button> */}
        <button onClick={this.handleDecrement.bind(this)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
