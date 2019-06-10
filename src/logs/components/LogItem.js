import React, {Component} from 'react'
import styles from './LogItem.module.css'

class LogItem extends Component {
  render () {
    const {
      id,
      time,
      timerType,
      hour,
      description,
      onUpdate
    } = this.props

    return (
      <li key={ id } className={styles.container}>
        <div className={styles.info}>
          <p>{ hour }</p>
          <p>{ timerType }</p>
        </div>
        <input name="description" className={styles.description} defaultValue={description} data-id={id} ref={description} onBlur={onUpdate} placeholder="Description"/>
      </li>
    )
  }
}

export default LogItem
