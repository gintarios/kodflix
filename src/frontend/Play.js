import React, { Component } from "react";
import Loading from "./Loader/Loading";
import { Redirect } from "react-router-dom";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(`/rest/shows/${this.props.match.params.url}`)
      .then(response => response.json())
      .then(json =>
        this.setState({
          isLoaded: true,
          movie: json
        })
      );
  }

  render() {
    const { isLoaded, movie } = this.state;
    return !isLoaded ? (
      <Loading />
    ) : movie === undefined ? (
      <Redirect to="/not-found" />
    ) : (
      <div className="component-play">
        <iframe src={`${movie.videoId}?autoplay=1&mute=1&controls=0`} />
      </div>
    );
  }
}

export default Play;
