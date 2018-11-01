import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCover from './img/spiderman.jpg';
import Movie1 from './img/blackmirror.jpg';
import Movie2 from './img/breakingbad.jpg';
import Movie3 from './img/deathnote.jpg';
import Movie4 from './img/got.jpg';
import Movie5 from './img/walkingdead.jpg';
import Movie6 from './img/thewire.jpg';

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

        <div className="Container">        
            <img src={Movie1} className="MovieImg" alt="Black Mirror" />
            <img src={Movie2} className="MovieImg" alt="Breaking Bad" />
            <img src={Movie3} className="MovieImg" alt="Death Note" />
            <img src={Movie4} className="MovieImg" alt="Got" />
            <img src={Movie5} className="MovieImg" alt="Fear the Walking Dead" />
            <img src={Movie6} className="MovieImg" alt="The Wire" />   
        </div> 
      </div>
      
       

    );
  }
}

export default App;
