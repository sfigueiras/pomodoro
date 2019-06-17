import { 
  TIMER_STARTED, 
  TIMER_RESUMED, 
  TIMER_PAUSED, 
  TIMER_RESTARTED, 
  TIMER_TICK, 
  TIMER_FINISHED,
  TIMER_INITIALIZED
} from './actionTypes' 

import {
  SKIP_UNIT,
  NEXT_UNIT,
  PREVIOUS_UNIT
} from '../scheduler/actionTypes'

export const timer = (state = {
  active: false,
  ticks: 0,
  time: -1
}, action) => {
  switch(action.type) {
    case TIMER_STARTED:
      return {
        ...state,
        active: true,
      }
    case TIMER_PAUSED:
      return {
        ...state,
        active: false
      }
    case TIMER_FINISHED:
      return {
        ...state,
      }
    case TIMER_RESTARTED:
      return {
        ...state,
        ticks: 0
      }
    case TIMER_TICK:
      return {
        ...state,
        ticks: state.ticks + 1
      }
    case TIMER_INITIALIZED:
      return {
        ...state,
        ...action
      }
    case SKIP_UNIT:
      return {
        ...state,
        time: action.time,
      }
    case NEXT_UNIT:
      return {
        ...state,
        time: action.time
      }
    case PREVIOUS_UNIT:
      return {
        ...state,
        time: action.time
      }
    default:
      return state
  }
}

