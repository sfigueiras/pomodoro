import * as actionTypes from './actionTypes'
import { NEXT_UNIT } from '../scheduler/actionTypes'
import { isTimerFinished } from './selectors'

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

export const timerFinished = () => (dispatch) => {
  dispatch({
    type: actionTypes.TIMER_FINISHED,
    active: false
  })
  //TODO: extract as scheduler/actionCreator
  dispatch({
    type: NEXT_UNIT
  })
}

let timerInterval = null

export const startTimer = (timerSettings) => (dispatch, getState) => {
  const { ticks } = getState().timer

  startTicking(() => dispatch(timerTickIfNeeded()))

  if (ticks === 0) {
    dispatch(timerStarted(timerSettings))
  } else {
    dispatch(timerResumed())
  }

  dispatch(timerTickIfNeeded())
}

function startTicking (onTick) {
  stopTicking()
  timerInterval = setInterval(onTick, 1000)
}

function stopTicking () {
  clearInterval(timerInterval)
}

export const timerTickIfNeeded = () => (dispatch, getState) => {
  if (isTimerFinished(getState())) {
    stopTicking()
    dispatch(timerFinished())
  } else {
    dispatch(timerTick())
  }
}

export const toggleTimer = () => (dispatch, getState) => {
  const { active } = getState().timer

  if (active) {
    stopTicking()
    dispatch(timerPaused())
  } else {
    dispatch(startTimer())
  }
}

