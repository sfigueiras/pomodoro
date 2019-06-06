import React from 'react'

class Timer extends React.Component {

  buttonMessage (timerActive) {
    return timerActive ? 'Pause' : 'Start'
  }

  render () {
    const { timerActive, onToggle, onRestart, time } = this.props
    return (
      <div>
        <p>{ time }</p>
        <button onClick={onToggle}>{this.buttonMessage(timerActive)}</button>
        <button onClick={onRestart}>Restart</button>
      </div>
    )
  }
}

export default Timer

