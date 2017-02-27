import React, { Component } from 'react'

class Cell extends Component {
  render() {
    const { size, x, y } = this.props

    let cellStyles = {
      border: "1px solid black",
      position: "absolute",
      left: x + "px",
      top: y + "px",
      height: size + "px",
      width: size + "px"
    }

    return(
      <span style={ cellStyles } />
    )
  }
}

export default Cell
