import React from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  function onTimerFinished () {
    console.log('Time finished')
  }

  return (
    <div className="App">
      <Timer 
        initialTime={2}
        onFinish={onTimerFinished}
      />
    </div>
  );
}

export default App;
