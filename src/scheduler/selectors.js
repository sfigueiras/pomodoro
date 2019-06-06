import { createSelector } from 'reselect'

const getSchedule = (state) => state.scheduler.schedule
const getScheduleIndex = (state) => state.scheduler.index

export const getCurrentUnit = createSelector(
  [ getSchedule, getScheduleIndex ],
  (schedule, index) => {
    return schedule[index]
  }
)


