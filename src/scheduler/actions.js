import { NEXT_UNIT } from './actionTypes'
import { startTimer } from '../timer/actions'
import { getCurrentUnit } from './selectors'
import { createEntry } from '../logs/actions'

export const nextUnit = () => (dispatch, getState) => {
  const currentEntry = getCurrentUnit(getState())
  dispatch({
    type: NEXT_UNIT
  })

  dispatch(
    startTimer(currentEntry)
  )
  
  dispatch(
    createEntry(currentEntry)
  )
}
