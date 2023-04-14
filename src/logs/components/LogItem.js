import React, { Component } from 'react';
import styles from './LogItem.module.css';

class LogItem extends Component {
  render() {
    const {
      id,
      time,
      timerType,
      showDescription,
      hour,
      description,
      onUpdate,
    } = this.props;

    return (
      <li key={id} className={styles.container}>
        <div className={styles.info}>
          <p>{hour}</p>
          <p
            className={
              timerType.toLowerCase() === 'pomodoro'
                ? styles.pomodoro
                : styles.pause
            }
          >
            {timerType}
          </p>
          <p>{time}</p>
        </div>
        {showDescription && (
          <textarea
            name="description"
            className={styles.description}
            defaultValue={description}
            data-id={id}
            ref={description}
            onBlur={onUpdate}
            placeholder="Description"
          />
        )}
      </li>
    );
  }
}

export default LogItem;
