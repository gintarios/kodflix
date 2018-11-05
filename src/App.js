import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from './Movie/Movie';
import Movie1 from "./img/blackmirror.jpg";
import Movie2 from "./img/breakingbad.jpg";
import Movie3 from "./img/deathnote.jpg";
import Movie4 from "./img/got.jpg";
import Movie5 from "./img/walkingdead.jpg";
import Movie6 from "./img/thewire.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Row">
          <Movie movietitle="Black Mirror" movieimg={Movie1} />
          <Movie movietitle="Breaking Bad" movieimg={Movie2} />
          <Movie movietitle="Death Note" movieimg={Movie3} />
        </div>
        <div className="Row">
          <Movie movietitle="Game of Thrones" movieimg={Movie4} />
          <Movie movietitle="Walking Dead" movieimg={Movie5} />
          <Movie movietitle="The Wire" movieimg={Movie6} />
        </div>

      </div>
    );
  }
}

export default App;
