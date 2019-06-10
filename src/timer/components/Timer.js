import React from 'react'
import styles from './Timer.module.css'

class Timer extends React.Component {

  iMessage (timerActive) {
    return timerActive ? 'Pause' : 'Start'
  }

  render () {
    const { timerActive, onToggle, onRestart, time } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.timer}>
          <p className={styles.time}>{ time }</p>
          <div className={styles.commands}>
            <i onClick={onToggle} className={ 'fas ' + (timerActive ? 'fa-pause' : 'fa-play')  } />
            <i onClick={onRestart} className="fas fa-undo-alt" />
          </div>
        </div>
      </div>
    )
  }
}

export default Timer

