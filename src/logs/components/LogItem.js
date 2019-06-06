import React, {Component} from 'react'

class LogItem extends Component {
  render () {
    const {
      id,
      time,
      timerType,
      description,
      onUpdate
    } = this.props

    return (
      <li key={ id }>
        <p>{ time }</p>
        <p>{ timerType }</p>
        <input name="description" data-id={id} ref={description} onBlur={onUpdate}/>
      </li>
    )
  }
}

export default LogItem
