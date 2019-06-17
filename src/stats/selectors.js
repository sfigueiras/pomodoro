import { createSelector } from 'reselect'
import { getPomodoros } from '../logs/selectors'
import prettyTime from '../utils/prettyTime'

export const getFocusedTimeToday = createSelector(
  [ getPomodoros ],
  pomodoros => {
    return prettyTime(
      pomodoros
        .map(log => log.time)
        .reduce(
          (sum, time) => sum + time
        )
    )
  }
)
