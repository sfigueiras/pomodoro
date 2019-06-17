import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFocusedTimeToday } from '../selectors'
import FocusedTimeToday from './FocusedTimeToday'

class StatsContainer extends Component {
  constructor (props) {
    super(props)
    
    this.onShowMoreClick = this.onShowMoreClick.bind(this)
    this.state = {
      showMore: false
    }
  }

  onShowMoreClick () {
    this.setState({
      showMore: !this.showMore
    })
  }

  render () {
    const { focusedTimeToday } = this.props
    const { showMore } = this.state

    return (
      <div>
        <FocusedTimeToday
          time={focusedTimeToday}
        />
        { showMore
          ? <div>
              <i onClick={this.onShowMoreClick}>show less...</i>
            </div>
          : <i onClick={this.onShowMoreClick}>see more...</i>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  focusedTimeToday: getFocusedTimeToday(state)
})

export default connect (mapStateToProps) (StatsContainer)
