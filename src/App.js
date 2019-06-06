import React from 'react';
import { connect } from 'react-redux'
import  PropTypes  from 'prop-types'

import './App.css';

import TimerContainer from './timer/components/TimerContainer'
import { getCurrentUnit } from './scheduler/selectors'

import LogContainer from './logs/components/LogContainer'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <TimerContainer />
        <LogContainer />
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
