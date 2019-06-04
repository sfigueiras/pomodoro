import React from 'react';
import './App.css';
import Timer from './Timer';

class App extends React.Component {
  onTimerFinished () {
    console.log('Time finished')
  }

  render () {
    return (
      <div className="App">
        <Timer 
          initialTime={(1000 * 60 * 10) + (1000 * 60 * 60 * 2) + (1000 * 25)}
          onFinish={this.onTimerFinished}
        />
      </div>
    );
  }
}

export default App;
