import React, { Component } from "react";
import Route from 'react-router-dom/Route';
import { Switch } from 'react-router';
import ReactGA from 'react-ga';
import "./App.css";
import Gallery from './Gallery';
import Details from './Details';
import NotFound from './NotFound';
import { createBrowserHistory } from "history";

class App extends Component {

  constructor() {
    super();
    ReactGA.initialize('UA-129509844-1');
    const history = createBrowserHistory();
    const location = history.location;
    this.trackPageView(location);
    history.listen((location) => this.trackPageView(location))
  }

  trackPageView(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }


  componentDidMount() {
    fetch('/rest/shows')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Gallery} exact />
          <Route path="/not-found" component={NotFound} exact />
          <Route path="/:url" component={Details} exact />
        </Switch>
      </div>
    );
  }

}

export default App;
