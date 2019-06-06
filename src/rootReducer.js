import { combineReducers } from 'redux'
import { timer } from './timer/reducers'
import { scheduler } from './scheduler/reducers'
import { logs } from './logs/reducers'

export default combineReducers({
  timer,
  scheduler,
  logs
})

