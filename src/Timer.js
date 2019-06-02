import React from 'react'

class Timer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      time: props.initialTime,
      timerOn: false
    }
    
    this.timer = setInterval(function () {
      let time = this.state.time
      if (time == 0) {
        this.props.onFinish()
        clearInterval(this.timer)
      } else {
        this.setState({
          time: time - 1
        })
      }
    }.bind(this), 1000)
  }


  render () {
    return (
      <p>{ this.state.time }</p>
    )
  }
}

export default Timer
