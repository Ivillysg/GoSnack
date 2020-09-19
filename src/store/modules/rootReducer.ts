/* combineReducers.ts */

import { combineReducers } from 'redux'
import example from './example/reducer'

const rootReducer = combineReducers({
  state: example
})
export default rootReducer
