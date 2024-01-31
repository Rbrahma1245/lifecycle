import { Component } from "react";

class GetSnapshotBeforeUpdate extends Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "green" });
    }, 3000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      `Before update, the favorite color was ${prevState.favoriteColor}`
    );
  }
  componentDidUpdate() {
    console.log(
      `After updated the favorite color is  ${this.state.favoriteColor}`
    );
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.favoriteColor }}>
          My Favorite Color is {this.state.favoriteColor}
        </h1>
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdate;
