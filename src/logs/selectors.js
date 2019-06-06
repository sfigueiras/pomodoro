import { createSelector } from 'reselect'
import prettyTime  from '../utils/prettyTime'
import capitalize from '../utils/capitalize'

const getLogs = (state) => state.logs.logs

export const getPrettifiedLogs = createSelector(
  [ getLogs ],
  (logs) => {
    return logs.map(log => { 
      return {
        ...log,
        prettyTime: prettyTime(log.time),
        prettyTimerType: capitalize(log.timerType)
      } 
    })
  }
)

