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

        <div className="Row">
          <div className="Column">
            <div className="overlay"><h2>Black Mirror</h2></div>
            <img src={Movie1} alt="Black Mirror" /> 
          </div>
          <div className="Column">
          <div className="overlay"><h2>Breaking Bad</h2></div>
            <img src={Movie2} alt="Breaking Bad" />
            </div>
          <div className="Column">
          <div className="overlay"><h2>Death Note</h2></div>
            <img src={Movie3} alt="Death Note" /> 
          </div>
        </div>
        <div className="Row">
          <div className="Column">
          <div className="overlay"><h2>Game of Thrones</h2></div>
          <img src={Movie4} alt="Got" /> 
          </div>
          <div className="Column">
            <div className="overlay"><h2>Walking Dead</h2></div>
            <img src={Movie5} alt="Fear the Walking Dead" />
          </div>
          <div className="Column">
            <div className="overlay"><h2>The Wire</h2></div>
            <img src={Movie6} alt="The Wire" />   
          </div>
        </div>                 
          
      </div>
      
       

    );
  }
}

export default App;
