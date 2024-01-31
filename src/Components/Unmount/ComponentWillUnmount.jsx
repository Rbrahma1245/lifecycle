import { Component } from "react";
import Child from "./Child";

class ComponentWillUnmount extends Component {
  constructor() {
    super();
    this.state = { showHeader: true };
  }
  delHeader(){
    this.setState({ showHeader: false });
  }

  render() {
    let header;
    if (this.state.showHeader) {
      header = <Child />;
    }
    return (
      <div>
        {header}
        <button type="button" onClick={this.delHeader.bind(this)}>
          Delete Header
        </button>
      </div>
    );
  }
}

export default ComponentWillUnmount;
