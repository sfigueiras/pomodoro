import { createSelector } from 'reselect'
import prettyTime  from '../utils/prettyTime'
import capitalize from '../utils/capitalize'
import groupBy from '../utils/groupBy'
import formatDate from '../utils/formatDate'
import hourFromDate from '../utils/hourFromDate'
import { PAUSE } from '../timer/timerTypes'

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
