import React, { Component } from 'react'

class Cell extends Component {
  getRandomColor() {
    // avoiding extreme colors 
    var letters = '789ABCD'
    var color = '#'
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 6)]    }
    return color
  }

  render() {
    const { size, x, y } = this.props
    let color = this.getRandomColor()
    let cellStyles = {
      background: color,
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
