import { POMODORO, PAUSE } from '../timer/timerTypes';
import { NEXT_UNIT, SKIP_UNIT, PREVIOUS_UNIT } from './actionTypes';

const pomodoro = minutes => ({
  timerType: POMODORO,
  time: 1000 * minutes * 60,
});

const pause = minutes => ({
  timerType: PAUSE,
  time: 1000 * minutes * 60,
});

export const scheduler = (
  state = {
    schedule: [
      pomodoro(25),
      pause(5),
      pomodoro(25),
      pause(5),
      pomodoro(25),
      pause(5),
      pomodoro(25),
      pause(10),
    ],
    index: 0,
  },
  action,
) => {
  switch (action.type) {
    case NEXT_UNIT:
      return {
        ...state,
        index: (state.index + 1) % state.schedule.length,
      };
    case SKIP_UNIT:
      return {
        ...state,
        index: (state.index + 1) % state.schedule.length,
      };
    case PREVIOUS_UNIT:
      return {
        ...state,
        index: (state.index - 1) % state.schedule.length,
      };
    default:
      return state;
  }
};
