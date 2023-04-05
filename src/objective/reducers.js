import { OBJECTIVE_UPDATED } from './actionTypes';

export const objective = (
  state = {
    value: 1,
  },
  action,
) => {
  switch (action.type) {
    case OBJECTIVE_UPDATED:
      return {
        ...state,
        value: action.newObjective,
      };
    default:
      return state;
  }
};
