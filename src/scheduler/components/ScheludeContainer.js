import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScheludeList from './ScheduleList'
import { getPrettySchedule } from '../selectors'

class ScheduleContainer extends Component {
  render () {
    const {
      schedule,
      index
    } = this.props

    return (
      <div>
        <ScheludeList
          schedule={schedule}
          currentIndex={index} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  schedule: getPrettySchedule(state),
  index: state.scheduler.index
})

export default connect(mapStateToProps) (ScheduleContainer)
