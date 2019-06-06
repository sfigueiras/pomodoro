import React from 'react';
import { connect } from 'react-redux'
import  PropTypes  from 'prop-types'

import './App.css';

import { startTimer } from './timer/actions'
import TimerContainer from './timer/components/TimerContainer'
import { getCurrentUnit } from './scheduler/selectors'

import LogsContainer from './logs/components/LogsContainer'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <TimerContainer />
        <LogsContainer />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    currentUnit: getCurrentUnit(state)
  }
}

export default connect(mapStateToProps) (App)
