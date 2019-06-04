import React from 'react'
import prettyTime from './utils/prettyTime'

class Timer extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.initialState()    

    this.timer = setInterval(function () {
      let time = this.state.time
      if (time == 0) {
        this.props.onFinish()
        clearInterval(this.timer)
      } else if (this.state.timerStarted) {
        this.setState({
          time: time - 1000
        })
      }
    }.bind(this), 1000)
  }

  initialState () {
    return {
      time: this.props.initialTime,
      timerStarted: false
    }
  }

  reset () {
    this.setState(this.initialState())
  }

  toggleTimer () {
    this.setState({
      timerStarted: !this.state.timerStarted
    })
  }

  buttonMessage () {
    return this.state.timerStarted ? 'Pause' : 'Start'
  }

  render () {
    return (
      <div>
        <p>{ prettyTime(this.state.time) }</p>
        <button onClick={this.toggleTimer.bind(this)}>{this.buttonMessage()}</button>
        <button onClick={this.reset.bind(this)}>Restart</button>
      </div>
    )
  }
}

export default Timer
