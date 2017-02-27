import React, { Component } from 'react'
import { connect } from 'react-redux'
import setDefaultGrid from '../actions/set-default-grid'
import Cell from './Cell'

class Grid extends Component {
  componentWillMount() {
    { this.props.setDefaultGrid() }
  }

  renderGrid() {
    return this.props.grid.cells.map((cell, i) => {
      return <Cell { ...cell } key={ i }/>
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
