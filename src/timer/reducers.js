import { 
  TIMER_STARTED, 
  TIMER_RESUMED, 
  TIMER_PAUSED, 
  TIMER_RESTARTED, 
  TIMER_TICK, 
  TIMER_FINISHED,
  TIMER_INITIALIZED
} from './actionTypes' 

export const timer = (state = {
  active: false,
  ticks: 0,
  time: 0
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
    case TIMER_RESUMED:
      return {
        ...state,
        active: true
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
        ...action,
        ticks: 0
      }
    default:
      return state
  }
}

