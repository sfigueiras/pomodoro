import { POMODORO, PAUSE } from '../timer/timerTypes'
import { NEXT_UNIT } from './actionTypes'

const pomodoro = minutes => ({
  timerType: POMODORO,
  time: 1000 * minutes
})

const pause = minutes => ({
  timerType: PAUSE,
  time: 1000 * minutes
})

export const scheduler = (state = {
  schedule: [
    pomodoro(0.1),
    pause(0.1),
    pomodoro(0.1),
    pause(0.1),
    pomodoro(0.1),
    pause(0.1),
    pomodoro(0.1),
    pause(10)
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
