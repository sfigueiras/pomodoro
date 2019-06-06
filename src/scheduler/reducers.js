import { POMODORO, BREAK } from '../timer/timerTypes'
import { NEXT_UNIT } from './actionTypes'

export const scheduler = (state = {
  schedule: [
    {
      timerType: POMODORO,
      time: 1000 * 4 //1000 * 60 * 25
    },
    {
      timerType: BREAK,
      time: 1000 * 4 // 1000 * 60 * 25
    }
  ],
  index: 0
}, action) => {
  switch (action.type) {
    case NEXT_UNIT:
      return {
        ...state,
        index: (state.index + 1) % state.schedule.length
      }
    default:
      return state
  }
}
