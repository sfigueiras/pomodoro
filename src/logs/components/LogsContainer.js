import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogsList from './LogsList'

class LogsContainer extends Component {
  render () {
    const { logs } = this.props
    return (
      <LogsList
        logs={logs} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logs: state.logs.logs
  }
}

export default connect (mapStateToProps) (LogsContainer)
