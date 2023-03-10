import React from "react";

class MainCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
    };
  }
  incrementAll = (value) => {
    console.log("increment all");
    this.setState({
      totalCount: this.state.totalCount + value,
    });
  };
  decrementAll = (value) => {
    //console.log("decrement all");
    if (this.state.totalCount > 0) {
      this.setState({
        totalCount: this.state.totalCount - value,
      });
    } else {
      this.setState({
        totalCount: this.state.totalCount,
      });
    }
  };

  reset = () => {
    this.setState({
      totalCount: 0,
    });
  };

  render() {
    return (
      <div className="main-count">
        <h1> Counter App</h1>
        <Counter
          inc={1}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={5}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={10}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <div className="totalCount">{this.state.totalCount}</div>
        <button className="btn btn-warning" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    console.log("increment");
    this.setState({
      count: this.state.count + this.props.inc,
    });
    this.props.incrementAll(this.props.inc);
  };

  decrement = () => {
    //console.log("decrement");
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - this.props.inc,
      });
    } else {
      this.setState({
        count: this.state.count,
      });
    }
    this.props.decrementAll(this.props.inc);
  };
  render() {
    return (
      <div className="app">
        <button
          className=" btn btn-danger counter-btn"
          onClick={this.decrement}
        >
          -{this.props.inc}
        </button>
        {/* <span className="counter-span">{this.state.count}</span>*/}
        <button
          className="btn btn-success  counter-btn "
          onClick={this.increment}
        >
          +{this.props.inc}
        </button>
      </div>
    );
  }
}

export default MainCounter;
