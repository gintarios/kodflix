import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Switch } from 'react-router';
import "./App.css";
import Gallery from './Gallery';
import Details from './Details';
import NotFound from './NotFound';


class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

          <Switch>
            <Route path="/" component={Gallery} exact="true" />
            <Route path="/not-found" component={NotFound} exact="true" />
            <Route path="/:url" component={Details} exact="true" />

          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
