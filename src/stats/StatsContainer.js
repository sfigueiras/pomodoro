import React, { Component } from 'react'
import { connect } from 'react-redux'
import FocusedTimeToday from './FocusedTimeToday'

class StatsContainer extends Component {

  render () {
    return (
      <div>
        <FocusedTimeToday
          time={60 * 1000 * 60}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  focusedTimeToday: getFocusedTimeToday(state)
})

export default connect (mapStateToProps) (StatsContainer)
