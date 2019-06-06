import { CREATE_LOG, UPDATE_LOG } from './actionTypes'

export const createLog = ({timerType, time}) => ({
  type: CREATE_LOG,
  log: {
    timerType,
    time
  }
})

export const updateLog = (log) => ({
  type: UPDATE_LOG,
  log
})
