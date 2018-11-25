import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Switch } from 'react-router';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import "./App.css";
import Gallery from './Gallery';
import Details from './Details';
import NotFound from './NotFound';


class App extends Component {

  constructor({ history, location }) {
    super();
    ReactGA.initialize('UA-129509844-1');
    this.tracker(location);
    history.listen((location) => this.tracker(location));
  }

  tracker(location) {
    let host = window.location.hostname;
    host !== "localhost" ? ReactGA.pageview(location.pathname + location.search + location.hash) : null;
  }


  initializeReactGA = () => {
    const history = createBrowserHistory();
    ReactGA.pageview('/');
    history.listen(location => ReactGA.pageview(location.pathname));
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
