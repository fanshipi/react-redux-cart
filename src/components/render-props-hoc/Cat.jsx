import React, { Component } from "react";
import Img from './Img.jpg'
export default class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  };
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }
  componentWillUnmount() {
    window.removeEventListener("mouseover", this.handleMouseMove);
  }
  render() {
      const {x,y} = this.state
    return (
      <div>
        <img src={Img} alt="" style={{position:'absolute',left:x-50,top:y-50}}/>
      </div>
    );
  }
}
