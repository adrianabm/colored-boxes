import { SET_DEFAULT_GRID } from '../actions/set-default-grid'
import { CHANGE_COLOR } from '../actions/change-color'

const defaultState = {
  cells: [],
  rows: 10,
  cols: 10
}

export default function(state = defaultState, action ) {
  switch (action.type) {
    case SET_DEFAULT_GRID:
      let cells = createGridArray(state.rows, state.cols)
      return Object.assign({}, state,
        { cells }
      )

    case CHANGE_COLOR:
      let newCells = state.cells.map((cell, index) => {
        for (var i = 0; i < action.ring.length; i++) {
          if (cell.x === action.ring[i].x && cell.y === action.ring[i].y) {
            console.log(state.cells[index].color)
            cell = Object.assign(
              {}, cell, { color: '#123456' }
            )
          }
        }
        return cell
      })
      return Object.assign({}, state, {
        cells: newCells
      })
    }
  return state
}

export const getRandomColor = () => {
  // avoiding extreme colors
  var letters = '789ABCD'
  var color = '#'
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 6)]
  }
  return color
}

export const createGridArray = (rows, cols) => {
  let cells = []
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      cells.push({ size: 50 , x: r , y: c, color: getRandomColor() })
    }
  }
  return cells
}
