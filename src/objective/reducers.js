import { OBJECTIVE_UPDATED } from './actionTypes'

export const objective = (state = {
  value: 1
}, action) => {
  switch (action.type) {
    case OBJECTIVE_UPDATED:
      return {
        ...state,
        objective: action.newObjective
      }
    default:
      return state
  }
}
