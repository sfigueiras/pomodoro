import * as actionTypes from './actionTypes'
import { isTimerFinished } from './selectors'
import { nextUnit } from '../scheduler/actions'
import { getCurrentUnit } from '../scheduler/selectors'

export const timerRestarted = () => ({
  type: actionTypes.TIMER_RESTARTED
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

export const timerPaused = () => ({
  type: actionTypes.TIMER_PAUSED
})

export const timerResumed = () => ({
  type: actionTypes.TIMER_RESUMED
})

export const timerInitialized = (timerSettings) => ({
  type: actionTypes.TIMER_INITIALIZED,
  ...timerSettings
})

export const timerFinished = () => dispatch => {
  dispatch({
    type: actionTypes.TIMER_FINISHED,
    active: false
  })
  dispatch(nextUnit())
}

let timerInterval = null

export const initializeTimer = () => (dispatch, getState) => {
  const { time } = getState().timer
  if (time === 0) {
    dispatch(timerInitialized(getCurrentUnit(getState())))
    console.log('initializing timer with ' + getCurrentUnit(getState()))
  }
}

export const startTimer = timerSettings => (dispatch, getState) => {
  startTicking(() => dispatch(timerTickIfNeeded()))

  dispatch(timerStarted(getCurrentUnit(getState())))
  dispatch(timerTickIfNeeded())
}

export const resumeTimer = () => dispatch => {
  startTicking(() => dispatch(timerTickIfNeeded()))
  dispatch(timerResumed())
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
    stopTicking()
    dispatch(pauseTimer())
  } else {
    dispatch(resumeTimer())
  }
}

function startTicking (onTick) {
  stopTicking()
  timerInterval = setInterval(onTick, 1000)
}

function stopTicking () {
  clearInterval(timerInterval)
}
