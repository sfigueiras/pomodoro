import { OBJECTIVE_UPDATED } from './actionTypes';

export const updateObjective = newObjective => ({
  type: OBJECTIVE_UPDATED,
  newObjective,
});
