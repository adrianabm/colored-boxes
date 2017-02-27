import React, { Component } from 'react'
import { connect } from 'react-redux'
import setDefaultGrid from '../actions/set-default-grid'
import Cell from './Cell'

class Grid extends Component {
  componentWillMount() {
    { this.props.setDefaultGrid() }
  }

  calculateSteps(start, end) {
    let differenceX = Math.abs(end.x - start.x)
    let differenceY = Math.abs(end.y - start.y)
    let totalDifference = Math.abs(differenceX + differenceY)

    return totalDifference
  }

  getSurroundings(x, y, steps) {
    let result = []
    let start = { x, y }

    this.props.grid.cells.map((cell) => {
      let end = { x: cell.x, y: cell.y }

      if (this.calculateSteps(start, end) === steps){
        result.push(end)
      }
    })
    return result
  }

  handleClick(x, y, color) {
    let myCoordinates = { x, y }
    let ticks = 5;
    let rings = [];

    for(var steps=0; steps < ticks; steps++) {
      rings.push(this.getSurroundings(x, y, steps + 1))
    }
    console.log(rings)
  }

  renderGrid() {
    return this.props.grid.cells.map((cell, i) => {
      return <Cell { ...cell } key={ i } handleClick={ this.handleClick.bind(this) } />
    })
  }

  render() {
    const { cells, cols, rows, color } = this.props.grid
    return (
      <div>
        { this.renderGrid() }
      </div>
    )
  }
}


function mapStateToProps({ grid }) {
  return { grid }
}

export default connect(mapStateToProps, { setDefaultGrid })(Grid)
