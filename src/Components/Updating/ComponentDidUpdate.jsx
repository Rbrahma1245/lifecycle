import { Component } from "react";

class ComponentDidUpdate extends Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red" };
  }
  shouldComponentUpdate() {
    return false;
  }
  handleColorChange() {
    console.log("click");
    this.setState({ favoriteColor: "green" });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.favoriteColor }}>
          My Favorite Color is {this.state.favoriteColor}
        </h1>
        <button type="button" onClick={this.handleColorChange.bind(this)}>
          Change color
        </button>
      </div>
    );
  }
}

export default ComponentDidUpdate;
