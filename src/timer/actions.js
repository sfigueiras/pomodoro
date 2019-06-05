import * as actionTypes from './actionTypes'

export const timerToggled = () => ({
  type: actionTypes.TIMER_TOGGLED
})

export const timerFinished = () => ({
  type: actionTypes.TIMER_FINISHED,
  active: false
})

export const timerRestarted = () => ({
  type: actionTypes.TIMER_RESTARTED,
  active: false
})

export const timerStarted = (timerSettings) => ({
  type: actionTypes.TIMER_STARTED,
  ...timerSettings
})

export const timerStopped = () => ({
  type: actionTypes.TIMER_STOPPED
})

export const timerTick = () => ({
  type: actionTypes.TIMER_TICK
})

let timerInterval = null

export const startTimer = (timerSettings) => (dispatch) => {
  clearInterval(timerInterval)
  timerInterval = setInterval(() => dispatch(timerTickIfNeeded()), 1000)
  dispatch(timerStarted(timerSettings))
  dispatch(timerTickIfNeeded())
}

export const stopTimer = () => {
  clearInterval(timerInterval)
  return timerFinished()
}

export const timerTickIfNeeded = () => (dispatch, getState) => {
  const { ticks, time } = getState().timer
  const timeElapsed = ticks * 1000
  if (timeElapsed === time) {
    dispatch(stopTimer())
  } else {
    dispatch(timerTick())
  }
}
