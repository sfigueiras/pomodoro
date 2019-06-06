import { NEXT_UNIT } from './actionTypes'
import { startTimer } from '../timer/actions'
import { getCurrentUnit } from './selectors'

export const nextUnit = () => (dispatch, getState) => {
  dispatch({
    type: NEXT_UNIT
  })
  dispatch(
    startTimer(
      getCurrentUnit(getState())
    )
  )
}
