import React from 'react';
import styles from './Timer.module.css';

class Timer extends React.Component {
  iMessage(timerActive) {
    return timerActive ? 'Pause' : 'Start';
  }

  render() {
    const { timerActive, onToggle, onRestart, time, onNext, onPrevious } =
      this.props;
    return (
      <div className={styles.container}>
        <div className={styles.timer}>
          <p className={styles.time}>{time}</p>
          <div className={styles.commands}>
            <i onClick={onPrevious} className="fas fa-step-backward" />
            <i
              onClick={onToggle}
              className={'fas ' + (timerActive ? 'fa-pause' : 'fa-play')}
            />
            <i onClick={onRestart} className="fas fa-undo-alt" />
            <i onClick={onNext} className="fas fa-step-forward" />
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
