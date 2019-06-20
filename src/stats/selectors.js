import { createSelector } from 'reselect'
import { getPomodoros } from '../logs/selectors'
import prettyTime from '../utils/prettyTime'

export const getFocusedTimeToday = createSelector(
  [ getPomodoros ],
  pomodoros =>
    pomodoros
      .map(log => log.time)
      .reduce((sum, time) => sum + time, 0)
)

export const getFocusedTimeTodayPretty = createSelector(
  [ getFocusedTimeToday ],
  time => ({
    time,
    prettyTime: prettyTime(time)
  })
)
