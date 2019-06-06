import { CREATE_LOG, UPDATE_LOG } from './actionTypes'
import uuidv4 from '../utils/uuidv4'

export const logs = (state = {
  logs: []
}, action) => {
  switch (action.type) {
    case CREATE_LOG:
      const log = {
        ...action.log,
        description: ''
      }
      
      return {
        logs: [
          ...state.logs,
          {
            id: uuidv4(),
            ...log
          }
        ]
      }
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => log.id === action.log.id ?
          { ...log, ...action.log } :
          log
        )
      }
    default:
      return state
  }
}
