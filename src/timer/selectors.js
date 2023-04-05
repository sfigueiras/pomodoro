import { createSelector } from 'reselect';
import prettyTime from '../utils/prettyTime';

const getTicks = state => state.timer.ticks;
const getTime = state => state.timer.time;

export const getElapsedTime = createSelector(
  [getTicks, getTime],
  (ticks, time) => {
    return time - ticks * 1000;
  },
);

export const isTimerFinished = createSelector(
  [getTime, getTicks],
  (time, ticks) => {
    return time === ticks * 1000;
  },
);

export const getElapsedPrettyTime = createSelector(
  [getElapsedTime],
  elapsedTime => {
    return prettyTime(elapsedTime);
  },
);
