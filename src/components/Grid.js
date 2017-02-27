import React, { Component } from 'react'
import Cell from './Cell'

class Grid extends Component {
  renderGrid() {
    let rows = 20
    let cols = 20
    let cells = []

    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        cells.push({ size: 32 , x: r , y: c })
      }
    }
    return cells.map((cell, i) => {
      return <Cell key= { i } size={ cell.size } x={ cell.x * cell.size } y={ cell.y * cell.size } />
    })
  }

  render() {
    // const { rows, cols } = this.props

    return (
      <div>
        { this.renderGrid() }
      </div>
    )
  }
}

export default Grid
