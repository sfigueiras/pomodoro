import { NEXT_UNIT, SKIP_UNIT, PREVIOUS_UNIT } from './actionTypes';
import { getCurrentUnit, getNextUnit, getPreviousUnit } from './selectors';
import { createLog } from '../logs/actions';
import { timerRestarted } from '../timer/actions';

export const nextUnit = () => (dispatch, getState) => {
  const currentEntry = getCurrentUnit(getState());

  dispatch(createLog(currentEntry));

  dispatch({
    type: NEXT_UNIT,
    ...getNextUnit(getState()),
  });

  dispatch(timerRestarted());
};

export const skipUnit = () => (dispatch, getState) => {
  const nextUnit = getNextUnit(getState());

  dispatch({
    type: SKIP_UNIT,
    ...nextUnit,
  });

  dispatch(timerRestarted());
};

export const previousUnit = () => (dispatch, getState) => {
  const previousUnit = getPreviousUnit(getState());

  dispatch({
    type: PREVIOUS_UNIT,
    ...previousUnit,
  });

  dispatch(timerRestarted());
};
