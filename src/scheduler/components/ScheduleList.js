import React, { Component } from 'react'
import styles from './ScheduleList.module.css'

class ScheduleList extends Component {

  render () {
    const {
      schedule,
      currentIndex
    } = this.props

    return (
      <ul className={styles.container}>
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
    )
  }

}

export default ScheduleList

