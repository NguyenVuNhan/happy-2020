import React, { useState, useEffect } from 'react';
import './App.css';
import Firework from './components/Firework';

interface AppProps {}

function App({}: AppProps) {
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <p className="spinner">Happy 2020</p>
      </header>
      <Firework
        style={{ position: 'absolute', top: 0, left: 0 }}
        width={window.innerWidth}
        height={window.innerHeight}
        maxParticles={500}
      />
    </div>
  );
}

export default App;
