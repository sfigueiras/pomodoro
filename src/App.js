import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import TimerContainer from './timer/components/TimerContainer';
import { initializeTimer } from './timer/actions';
import LogContainer from './logs/components/LogContainer';
import ScheduleContainer from './scheduler/components/ScheludeContainer';
import StatsContainer from './stats/components/StatsContainer';
import ObjectiveContainer from './objective/components/ObjectiveContainer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeTimer();
  }

  render() {
    return (
      <div className="App">
        <div className="objective">
          <ObjectiveContainer />
        </div>
        <TimerContainer />
        <div className="stats">
          <StatsContainer />
        </div>
        <div className="schedule">
          <ScheduleContainer />
        </div>
        <div className="logs">
          <LogContainer />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initializeTimer: () => dispatch(initializeTimer()),
});

export default connect(null, mapDispatchToProps)(App);
