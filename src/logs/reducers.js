import { CREATE_ENTRY } from './actionTypes'

export const logs = (state = {
  logs: []
}, action) => {
  switch (action.type) {
    case CREATE_ENTRY:
      return {
        logs: [
          ...state.logs,
          {
            ...action.log,
            description: ''
          }
        ]
      }
    default:
      return state
  }
}
