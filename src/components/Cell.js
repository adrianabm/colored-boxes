import React, { Component } from 'react'

class Cell extends Component {


  handleClick() {
    const { x, y, color } = this.props
    this.props.handleClick(x, y, color)
  }

  render() {
    const { color, x, y, size } = this.props
    let cellStyles = {
      background: color,
      border: "1px solid black",
      position: "absolute",
      left: x * size + "px",
      top: y * size + "px",
      height: size + "px",
      width: size + "px"
    }

    return(
      <span style={ cellStyles } onClick= { this.handleClick.bind(this) } />
    )
  }
}

export default Cell
