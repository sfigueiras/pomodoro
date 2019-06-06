import * as actionTypes from './actionTypes'
import { NEXT_UNIT } from '../scheduler/actionTypes'

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

  clearInterval(timerInterval)
  timerInterval = setInterval(() => dispatch(timerTickIfNeeded()), 1000)

  if (!ticks || ticks === 0) {
    dispatch(timerStarted(timerSettings))
  } else {
    dispatch(timerResumed())
  }
  dispatch(timerTickIfNeeded())
}

export const stopTimer = (finished = true) => {
  clearInterval(timerInterval)
  return finished ? timerFinished() : timerPaused()
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

export const toggleTimer = () => (dispatch, getState) => {
  const { active } = getState().timer

  if (active) {
    dispatch(stopTimer(false))
  } else {
    dispatch(startTimer())
  }
}

