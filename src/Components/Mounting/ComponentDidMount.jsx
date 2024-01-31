import { Component } from "react";

class ComponentDidMount extends Component {
  constructor() {
    
    super();
    this.state = { favoriteColor: "red" };

    console.log(".....CONSTRUCTOR.....");
  }

//   static getDerivedStateFromProps(props) {
//     console.log("....After constructor is mounted......");
//     return { favoriteColor: props.color };
//   }


  componentDidMount() {
    setTimeout(() => {
        console.log("...ComponentDidMount....");
      this.setState({favoriteColor : this.props.color})
    }, 3000)
  }

  render() {

    console.log("....RENDERED.....");
    return (
      <div>
        <h1 style={{ color: this.state.favoriteColor }}>
          My Favorite Color is {this.state.favoriteColor}
        </h1>
      </div>
    );
  }
}

export default ComponentDidMount;
