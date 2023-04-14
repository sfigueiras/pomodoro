import React from 'react';
import styles from './Objective.module.css';

const Objective = props => (
  <div className={styles.objective}>
    <label> Objective for today:</label>

    <input
      type="number"
      value={props.objective}
      onChange={props.handleChange}
    />

    <br />

    <div>
      {Array.from({ length: props.objective }, (_, index) => (
        <span key={index}>
          {props.pomodoros > index ? index + 1 : '-'}&nbsp;
        </span>
      ))}
    </div>
  </div>
);

export default Objective;
