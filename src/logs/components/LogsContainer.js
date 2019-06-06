import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogsList from './LogsList'
import { updateLog, clearAll } from '../actions'
import { getPrettifiedLogs } from '../selectors'

class LogsContainer extends Component {
  onLogUpdated (event) {
    const { name, value } = event.target

    this.props.dispatch(updateLog({ 
      // TODO: use another less hacky way
      id: event.target.dataset.id,
      [name]: value}
    ))
  }

  handleClear () {
    this.props.dispatch(clearAll())
  }

  render () {
    const { logs } = this.props
    return (
      <LogsList
        logs={logs}
        onLogUpdated={this.onLogUpdated.bind(this)}
        handleClear={this.handleClear.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logs: getPrettifiedLogs(state)
  }
}

export default connect (mapStateToProps) (LogsContainer)
