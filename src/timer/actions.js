import * as actionTypes from './actionTypes'
import { isTimerFinished } from './selectors'
import { nextUnit } from '../scheduler/actions'
import { getCurrentUnit, getNextUnit } from '../scheduler/selectors'

export const timerRestarted = () => ({
  type: actionTypes.TIMER_RESTARTED
})

export const timerStarted = () => ({
  type: actionTypes.TIMER_STARTED
})

export const timerStopped = () => ({
  type: actionTypes.TIMER_STOPPED
})

export const timerTick = () => ({
  type: actionTypes.TIMER_TICK
})

export const timerPaused = () => ({
  type: actionTypes.TIMER_PAUSED
})

export const timerInitialized = (timerSettings) => ({
  type: actionTypes.TIMER_INITIALIZED,
  ...timerSettings
})

export const timerFinished = () => dispatch => {
  dispatch({
    type: actionTypes.TIMER_FINISHED,
  })
  dispatch(nextUnit())
}

let timerInterval = null

export const initializeTimer = timerSettings => (dispatch, getState) => {
  const { time, active, ticks } = getState().timer

  // If there is a persisted time, but is finished initialize
  // time with the next unit
  const timerFinished = ticks * 1000 === time
  const timerNotInitialized = time === -1

  const state = getState()

  if (timerNotInitialized) {
    dispatch(timerInitialized(getCurrentUnit(state)))
  } else if (timerFinished) {
    dispatch(timerInitialized(getNextUnit(state)))
  }

  if (active) {
    dispatch(startTimer())
  }
}

export const startTimer = () => (dispatch, getState) => {
  startTicking(() => dispatch(timerTickIfNeeded()))

  dispatch(timerStarted())
  dispatch(timerTickIfNeeded())
}

export const pauseTimer = () => dispatch => {
  stopTicking()
  dispatch(timerPaused())
}

export const timerTickIfNeeded = () => (dispatch, getState) => {
  if (isTimerFinished(getState())) {
    dispatch(timerFinished())
  } else {
    dispatch(timerTick())
  }
}

export const toggleTimer = () => (dispatch, getState) => {
  const { active } = getState().timer

  if (active) {
    dispatch(pauseTimer())
  } else {
    dispatch(startTimer())
  }
}

function startTicking (onTick) {
  stopTicking()
  timerInterval = setInterval(onTick, 1000)
}

function stopTicking () {
  clearInterval(timerInterval)
}
