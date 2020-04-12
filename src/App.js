import React from 'react';
import './App.css';
import Player from './Player/Player'
import Mission from './Jobs/Mission';


function App() {
  return (
    <div className="App-header">
        <p style={{float: "left"}}>
          <Player/>
        </p>
        <p style={{float: "right"}}>
          <Mission/>
        </p>
    </div>
  );
}

export default App;
