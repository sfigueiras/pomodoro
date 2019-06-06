import { CREATE_ENTRY } from './actionTypes'

export const createEntry = ({timerType, time}) => ({
  type: CREATE_ENTRY,
  log: {
    timerType,
    time
  }
})
