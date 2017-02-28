import { SET_DEFAULT_GRID } from '../actions/set-default-grid'
import { CHANGE_COLOR } from '../actions/change-color'

const defaultState = {
  cells: [],
  rows: 20,
  cols: 20
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
            let newColor = getNewColor(action.ring.length, action.clickedColor.color)
            cell = Object.assign(
              {}, cell, { color: newColor }
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

export const getNewColor = (ring, clickedColor) => {
  let newColor = Object.assign(
    {}, clickedColor, { l: clickedColor.l + 1.5 * ring }
  )
  return newColor
}

export const rand = (min, max) => {
  return parseInt(Math.random() * (max-min+1), 10) + min
}

export const getRandomColor = () => {
  var h = rand(1, 360) // color hue between 1 and 360
  var s = rand(30, 100) // saturation 30-100%
  var l = rand(30, 70) // lightness 30-70%
  var color = { h, s, l} // save color as an object so it's easier to make the saturation effect later
  return color
}

export const createGridArray = (rows, cols) => {
  let cells = []
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      cells.push({ size: 25 , x: r , y: c, color: getRandomColor() }) // each cell will have a RandomColor assigned
    }
  }
  return cells
}
