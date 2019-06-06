import { combineReducers } from 'redux'
import { timer } from './timer/reducers'
import { scheduler } from './scheduler/reducers'

export default combineReducers({
  timer,
  scheduler
})

