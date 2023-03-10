import React from "react";
import "../Counter/counter.css";

class UpdatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
  }

  changeColor = () => {
    this.setState({
      color: "red",
    });
  };
  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       color: props.favColor,
  //     };
  //   }
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <div className="upadting-component">
          My Fav Color is {this.state.color}
        </div>
        <button className="btn btn-primary mt-5" onClick={this.changeColor}>
          Change color
        </button>
        <div id="prev"></div>
        <div id="curr"></div>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("prev").textContent =
      "My previous fav color is " + prevState.color;
    return null;
  }
  componentDidUpdate() {
    document.getElementById("curr").textContent =
      "My current fav color is " + this.state.color;
  }
}

export default UpdatingComponent;
