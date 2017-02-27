import { SET_DEFAULT_GRID } from '../actions/set-default-grid'

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
