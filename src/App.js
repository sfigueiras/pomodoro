import React from 'react';
import { connect } from 'react-redux'
import  PropTypes  from 'prop-types'

import './App.css';

import { POMODORO } from './timer/timerTypes'
import { startTimer } from './timer/actions'
import TimerContainer from './timer/components/TimerContainer'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(startTimer({
      time: 1000 * 3,
      timerType: POMODORO
    }))
  }

  render () {
    return (
      <div className="App">
        <TimerContainer />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect() (App)
