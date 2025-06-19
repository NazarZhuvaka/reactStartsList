import { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: "",
      caption: "Default caption",
    };
  }


  loadImg = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => this.setState({ imgSrc: data.image }))
      .catch((err) => console.log(err));
  };
  // this.setState({ imgSrc: data.image })
  
  componentDidMount() {
    this.loadImg();
  }

  render() {
    const { imgSrc } = this.state;
    console.log(this.state)
    console.log("imgProduct:", imgSrc);
    return (
      <div>
        UserList
        {/* <img src={imgSrc} /> */}
        <p>{imgSrc}</p>
      </div>
    );
  }
}

export default UserList;
