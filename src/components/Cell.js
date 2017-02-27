import React, { Component } from 'react'

const Cell = (props) => {
    let cellStyles = {
      background: props.color,
      border: "1px solid black",
      position: "absolute",
      left: props.x * props.size + "px",
      top: props.y * props.size + "px",
      height: props.size + "px",
      width: props.size + "px"
    }

    return(
      <span style={ cellStyles }>{ props.x }, { props.y }</span>
    )
  }

export default Cell
