import React from 'react'
import Timer from './Timer'

class TimerContainer extends React.Component {

  onTimerFinished () {
    console.log('Time finished')
  }

  render () {
    return (
      <div>
        <Timer 
          initialTime={(1000 * 60 * 10) + (1000 * 60 * 60 * 2) + (1000 * 25)}
          onFinish={this.onTimerFinished}
        />
      </div>
    )
  }
}

export default TimerContainer

