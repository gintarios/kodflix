import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCover from './img/spiderman.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to kodflix</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <img src={MovieCover} className="Film" alt="Spider Man" />
      </div>
    );
  }
}

export default App;
