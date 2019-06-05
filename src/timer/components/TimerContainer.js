import React from 'react'
import Timer from './Timer'
import { connect } from 'react-redux'
import { timerToggled, timerFinished } from '../actions'
import PropTypes from 'prop-types'

class TimerContainer extends React.Component {
  constructor (props) {
    super(props)
    this.onTimerToggled = this.onTimerToggled.bind(this)
    this.onTimerFinished = this.onTimerFinished.bind(this)
  }

  onTimerToggled () {
    this.props.dispatch(timerToggled())
  }

  onTimerFinished () {
    this.props.dispatch(timerFinished())
  }

  render () {
    const { timerActive, time } = this.props
    return (
      <div>
        <Timer 
          time={time}
          timerActive={timerActive}
          onToggle={this.onTimerToggled}
          onFinish={this.onTimerFinished}
        />
      </div>
    )
  }
}

TimerContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  timerActive: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return { 
    timerActive: state.timer.active,
    time: state.timer.time - (state.timer.ticks * 1000)
  }
}

export default connect (mapStateToProps) (TimerContainer)

