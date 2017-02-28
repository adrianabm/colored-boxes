import React, { Component } from 'react'
import { connect } from 'react-redux'
import setDefaultGrid from '../actions/set-default-grid'
import changeColor from '../actions/change-color'
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

  // getSurroundings() gets the cells that are surrounding the clicked cell and save it to a result array
  // This function is based on comparing the distance of the coordinates x, y
  // of all the cells with the clicked cell - as seen on calculateSteps()
  getSurroundings(x, y, steps) {
    let result = []
    let start = { x, y } // the clicked cell

    this.props.grid.cells.map((cell) => {
      let end = { x: cell.x, y: cell.y } // all cells in the grid

      if (this.calculateSteps(start, end) === steps){
        result.push(end)
      }
    })
    return result
  }

  handleClick(x, y, color) {
    const { changeColor } = this.props
    let myCoordinates = { x, y }
    let ticks = 4 // the amont of cells the ripple effect will "grow"
    let rings = [] // will store the coordinates of the surrounding cells
    let clickedColor = { color }

    for(var steps=0; steps < ticks; steps++) {
      let currentRing = this.getSurroundings(x, y, steps + 1)
      rings.push(currentRing)

      // not sure if this should be requestAnimationFrame()?
      // I wanted to control the fps so I used setTimeout instead...
      setTimeout(function(){
        changeColor(currentRing, color, clickedColor)
      }, 50 * steps)
    }
  }

  renderGrid() {
    return this.props.grid.cells.map((cell, i) => {
      return <Cell { ...cell } key={ i } handleClick={ this.handleClick.bind(this) } />
    })
  }

  render() {
    const { cells, cols, rows, color, changeColor } = this.props.grid
    return (
      <div className="grid">
        { this.renderGrid() }
      </div>
    )
  }
}

function mapStateToProps({ grid }) {
  return { grid }
}

export default connect(mapStateToProps, { setDefaultGrid, changeColor })(Grid)
