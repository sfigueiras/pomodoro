import { NEXT_UNIT } from './actionTypes'
import { getCurrentUnit } from './selectors'
import { createLog } from '../logs/actions'
import { initializeTimer } from '../timer/actions'

export const nextUnit = () => (dispatch, getState) => {
  const currentEntry = getCurrentUnit(getState())

  dispatch({
    type: NEXT_UNIT
  })

  dispatch(
    initializeTimer(currentEntry)
  )
  
  dispatch(
    createLog(currentEntry)
  )
}
