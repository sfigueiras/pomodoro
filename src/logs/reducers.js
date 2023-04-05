import { CREATE_LOG, UPDATE_LOG, CLEAR_ALL_LOGS } from './actionTypes';
import uuidv4 from '../utils/uuidv4';

export const logs = (
  state = {
    logs: [],
  },
  action,
) => {
  switch (action.type) {
    case CREATE_LOG:
      const log = {
        ...action.log,
        description: '',
      };

      return {
        logs: [
          {
            id: uuidv4(),
            ...log,
            completedAt: Date.now(),
          },
          ...state.logs,
        ],
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.log.id ? { ...log, ...action.log } : log,
        ),
      };
    case CLEAR_ALL_LOGS:
      return {
        ...state,
        logs: [],
      };
    default:
      return state;
  }
};
