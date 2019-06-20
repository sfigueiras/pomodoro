import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFocusedTimeTodayPretty } from '../selectors'
import { isOnBreak } from '../../scheduler/selectors'
import FocusedTimeToday from './FocusedTimeToday'
import BreakSuggestions from './BreakSuggestions'

class StatsContainer extends Component {
  render () {
    const {
      isOnBreak
    } = this.props

    const {
      time,
      prettyTime
    } = this.props.focusedTimeToday

    return (
      <div>
        {isOnBreak
          ? <BreakSuggestions />
          : time > 0 &&
          <FocusedTimeToday
            time={time}
            prettyTime={prettyTime}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  focusedTimeToday: getFocusedTimeTodayPretty(state),
  isOnBreak: isOnBreak(state)
})

export default connect (mapStateToProps) (StatsContainer)
