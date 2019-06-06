import React from 'react';
import { connect } from 'react-redux'

import './App.css';

import TimerContainer from './timer/components/TimerContainer'
import { initializeTimer } from './timer/actions'
import LogContainer from './logs/components/LogContainer'

class App extends React.Component {
  componentDidMount () {
    this.props.initializeTimer()
  }

  render () {
    return (
      <div className="App">
        <TimerContainer />
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
