import { CREATE_LOG, UPDATE_LOG, CLEAR_ALL_LOGS } from './actionTypes'

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

export const clearAll = () => ({
  type: CLEAR_ALL_LOGS
})
