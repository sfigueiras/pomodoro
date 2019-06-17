import { createSelector } from 'reselect'
import { getPomodoros } from '../logs/selectors'
import prettyTime from '../utils/prettyTime'
import { todayPretty } from '../utils/formatDate'

export const getFocusedTimeToday = createSelector(
  [ getPomodoros ],
  pomodoros => ({
    prettyTime: prettyTime(
      pomodoros
        .map(log => log.time)
        .reduce(
          (sum, time) => sum + time,
          0
        )
    ),
    time: pomodoros.reduce((sum, time) => sum + time, 0)
  })
)
