import { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <div>This is a dummy text</div>;
  }
}

export default Child;
