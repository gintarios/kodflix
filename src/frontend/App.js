import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Switch } from 'react-router';
import ReactGA from 'react-ga';
import "./App.css";
import Gallery from './Gallery';
import Details from './Details';
import NotFound from './NotFound';



class App extends Component {

  componentDidMount() {
    initializeReactGA();
    fetch('/rest/shows')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      })
      .catch(error => console.error('Error:', error));
  }


  initializeReactGA() {
    ReactGA.initialize('UA-129509844-1');
    ReactGA.pageview('/');
  }


  render() {
    return (
      <Router>

        <div className="App">

          <Switch>
            <Route path="/" component={Gallery} exact />
            <Route path="/not-found" component={NotFound} exact />
            <Route path="/:url" component={Details} exact />

          </Switch>
        </div>
      </Router>
    );
  }

}


export default App;
