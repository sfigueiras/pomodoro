import React from 'react'
import Timer from './Timer'
import { connect } from 'react-redux'
import { toggleTimer, timerRestarted } from '../actions'
import { getElapsedPrettyTime } from '../selectors'
import PropTypes from 'prop-types'

class TimerContainer extends React.Component {
  render () {
    const { timerActive, time, onTimerToggled, onTimerRestart } = this.props
    return (
      <div>
        <Timer 
          time={time}
          timerActive={timerActive}
          onToggle={onTimerToggled}
          onRestart={onTimerRestart}
        />
      </div>
    )
  }
}

TimerContainer.propTypes = {
  timerActive: PropTypes.bool.isRequired, 
  time: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  const elapsedTime = getElapsedPrettyTime(state)

  document.title = elapsedTime

  return { 
    timerActive: state.timer.active,
    time: elapsedTime
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTimerToggled: () => dispatch(toggleTimer()),
    onTimerRestart: () => dispatch(timerRestarted())
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (TimerContainer)

