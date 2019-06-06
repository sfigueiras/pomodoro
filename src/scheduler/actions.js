import { NEXT_UNIT } from './actionTypes'
import { getCurrentUnit } from './selectors'
import { createLog } from '../logs/actions'
import { startTimer } from '../timer/actions'

export const nextUnit = () => (dispatch, getState) => {
  const currentEntry = getCurrentUnit(getState())

  dispatch({
    type: NEXT_UNIT
  })

  dispatch(
    startTimer(currentEntry)
  )
  
  dispatch(
    createLog(currentEntry)
  )
}
