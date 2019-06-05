import { TIMER_STARTED, TIMER_TOGGLED, TIMER_TICK, TIMER_FINISHED } from './actionTypes' 

export const timer = (state = {
  active: false,
}, action) => {
  switch(action.type) {
    case TIMER_TOGGLED:
      return {
        ...state,
        active: !state.active
      }
    case TIMER_FINISHED:
      return {
        ...state,
        active: action.active
      }
    case TIMER_STARTED:
      return {
        ...state,
        time: action.time,
        timerType: action.timerType,
        active: true,
        ticks: 0,
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

