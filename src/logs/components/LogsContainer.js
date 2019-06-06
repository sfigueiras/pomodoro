import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogsList from './LogsList'
import { updateLog } from '../actions'

class LogsContainer extends Component {
  onLogUpdated (event) {
    const { name, value } = event.target

    this.props.dispatch(updateLog({ 
      // TODO: use another less hacky way
      id: event.target.dataset.id,
      [name]: value}
    ))
  }

  render () {
    const { logs } = this.props
    return (
      <LogsList
        logs={logs}
        onLogUpdated={this.onLogUpdated.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logs: state.logs.logs
  }
}

export default connect (mapStateToProps) (LogsContainer)
