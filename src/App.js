import React from 'react';
import './App.css';
import TimerContainer from './timer/components/TimerContainer'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <TimerContainer />
      </div>
    );
  }
}

export default App;
