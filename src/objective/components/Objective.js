import React from 'react'
import styles from './Objective.module.css'

const Objective = (props) => (
  <div className={styles.objective}>
    <label> Objective for today:</label>
    <input type="number" value={props.objective} onChange={props.handleChange} />
  </div>
)

export default Objective