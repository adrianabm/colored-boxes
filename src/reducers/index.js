import { combineReducers } from 'redux'
import GridReducer from './reducer_grid'

const rootReducer = combineReducers({
  grid: GridReducer,
})

export default rootReducer
