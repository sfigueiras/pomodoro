import React, { Component } from 'react'
import styles from './ScheduleList.module.css'

class ScheduleList extends Component {

  render () {
    const {
      schedule,
      currentIndex
    } = this.props

    return (
      <div className={styles.container}>
        <h4>Schedule</h4>
        <ul className={styles.list}>
          { 
            schedule.map((unit, index) => {
              return (
                <li key={index} className={
                  index === currentIndex
                    ? styles.current
                    : ''
                }>
                  { unit.prettyTime } { unit.prettyTimerType }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default ScheduleList

