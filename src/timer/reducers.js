import { 
  TIMER_STARTED, 
  TIMER_RESUMED, 
  TIMER_PAUSED, 
  TIMER_RESTARTED, 
  TIMER_TICK, 
  TIMER_FINISHED 
} from './actionTypes' 

export const timer = (state = {
  active: false,
}, action) => {
  switch(action.type) {
    case TIMER_STARTED:
      return {
        ...state,
        time: action.time || state.time,
        timerType: action.timerType,
        active: true,
        ticks: 0,
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
        active: action.active
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
    default:
      return state
  }
}

