import React from 'react'
import prettyTime from '../../utils/prettyTime'

class Timer extends React.Component {

  buttonMessage (timerActive) {
    return timerActive ? 'Pause' : 'Start'
  }

  render () {
    const { timerActive, onToggle, time } = this.props
    return (
      <div>
        <p>{ prettyTime(time) }</p>
        <button onClick={onToggle}>{this.buttonMessage(timerActive)}</button>
        <button onClick={() => {}}>Restart</button>
      </div>
    )
  }
}

export default Timer

