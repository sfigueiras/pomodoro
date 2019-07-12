import { createSelector } from 'reselect'
import prettyTime  from '../utils/prettyTime'
import capitalize from '../utils/capitalize'
import { PAUSE } from '../timer/timerTypes'

const getSchedule = (state) => state.scheduler.schedule
const getScheduleIndex = (state) => state.scheduler.index

export const getCurrentUnit = createSelector(
  [ getSchedule, getScheduleIndex ],
  (schedule, index) => {
    return schedule[index]
  }
)

export const getNextUnit = createSelector(
  [ getSchedule, getScheduleIndex ],
  (schedule, index) => {
    return schedule[(index + 1) % schedule.length]
  }
)

export const getPreviousUnit = createSelector(
  [ getSchedule, getScheduleIndex ],
  (schedule, index) => {
    return schedule[(index - 1) % schedule.length]
  }
)

export const getPrettySchedule = createSelector(
  [getSchedule ],
  schedule => {
    return schedule.map(unit => {
      return {
        ...unit,
        prettyTime: prettyTime(unit.time, true),
        prettyTimerType: capitalize(unit.timerType)
      }
    })
  }
)

export const isOnBreak = createSelector(
  [ getCurrentUnit ],
  unit => unit.timerType === PAUSE
)
