import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import TimerContainer from './timer/components/TimerContainer'
import { initializeTimer } from './timer/actions'
import LogContainer from './logs/components/LogContainer'
import ScheduleContainer from './scheduler/components/ScheludeContainer'

class App extends React.Component {
  componentDidMount () {
    this.props.initializeTimer()
  }

  render () {
    return (
      <div className="App">
        <TimerContainer />
        <div className="schedule">
          <ScheduleContainer />
        </div>
        <LogContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initializeTimer: () => dispatch(initializeTimer())
  }
}

export default connect(null, mapDispatchToProps) (App)
