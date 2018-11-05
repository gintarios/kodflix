import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import "./App.css";
import Home from './Home';
import Details from './Details';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/details" component={Details} exact />

          </div>

        </div>
      </Router>
    );
  }
}


export default App;
