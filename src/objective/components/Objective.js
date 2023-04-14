import React from 'react';
import styles from './Objective.module.css';

const Objective = props => (
  <div className={styles.objective}>
    <h4>Objective</h4>

    <input
      type="number"
      value={props.objective}
      onChange={props.handleChange}
    />

    <div className={styles.progress}>
      {Array.from({ length: props.objective }, (_, index) => (
        <span key={index} className={styles.progressItem}>
          {props.pomodoros > index
            ? index + 1
            : props.pomodoros === index
            ? 'X'
            : '-'}
          &nbsp;
        </span>
      ))}
    </div>
  </div>
);

export default Objective;
