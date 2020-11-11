import React from 'react';
import logo from './nic-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img src={logo} className="logo" alt="Logo" />
        <div className="navigation-sub">
          <a href="" className="item">Contact</a>
          <a href="" className="item">Projects</a>
          <a href="" className="item">About</a>
        </div>
      </div>
    </div>
  );
}

export default App;
