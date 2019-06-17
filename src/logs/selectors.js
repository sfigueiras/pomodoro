import { createSelector } from 'reselect'
import prettyTime  from '../utils/prettyTime'
import capitalize from '../utils/capitalize'
import groupBy from '../utils/groupBy'
import formatDate, { today } from '../utils/formatDate'
import hourFromDate from '../utils/hourFromDate'
import { PAUSE, POMODORO } from '../timer/timerTypes'

const getLogs = (state) => state.logs.logs

export const getPrettifiedLogs = createSelector(
  [ getLogs ],
  logs => {
    return logs.map(log => { 
      return {
        ...log,
        prettyTime: prettyTime(log.time),
        prettyTimerType: capitalize(log.timerType),
        prettyCompletedAt: formatDate(log.completedAt),
        showDescription: log.timerType !== PAUSE,
        hour: hourFromDate(log.completedAt)
      } 
    })
  }
)

export const getGroupedByDateLogs = createSelector(
  [ getPrettifiedLogs ],
  logs => groupBy(logs, 'prettyCompletedAt')
)

export const getPomodoros = createSelector(
  [ getGroupedByDateLogs ],
  logs => { 
    return filterByType(logs[today()], POMODORO)
  }
)

export const getPauses = createSelector(
  [ getGroupedByDateLogs ],
  logs => filterByType(logs[today()], PAUSE)
)

function filterByType (logs, timerType) {
  return logs.filter(log => log.timerType === timerType)
}

