import React, { Component } from "react";
import Route from "react-router-dom/Route";
import { Switch } from "react-router";
import ReactGA from "react-ga";
import "./App.css";
import Gallery from "./Gallery";
import Details from "./Details";
import NotFound from "./NotFound";
import { withRouter } from "react-router-dom";
import Menu from "./Menu";
import ManageTVShows from "./ManageTvShows";

class App extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-129509844-1");
    this.trackPageView(window.location);
    props.history.listen(location => this.trackPageView(location));
  }

  trackPageView(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" component={Gallery} exact />
          <Route path="/not-found" component={NotFound} exact />
          <Route path="/:url" component={Details} exact />
          <Route path="/manage/tv-shows" component={ManageTVShows} exact />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
