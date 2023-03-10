import React from "react";

class MountingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
  }

  //static getDerivedStateFromProps(props, state) {
  //     return {
  //       color: props.favColor,
  //     };
  //   }
  render() {
    return (
      <div className="Mounting">
        <label>My Favourite Color is {this.state.color}</label>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        color: "White",
      });
    }, 6000);
  }
}
export default MountingComponent;
