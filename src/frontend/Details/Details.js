import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Loading from "../Loader/Loading";
import "./Details.css";

class Details extends Component {
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

  bgImage() {
    const { movie } = this.state;

    return (
      <div
        className="details-background"
        style={{
          backgroundImage: `linear-gradient(#08182bce, #08182bce),url(${require(`../common/images/wallpapers/${
            movie.id
          }.jpg`)})`
        }}
      />
    );
  }

  render() {
    const { isLoaded, movie } = this.state;

    return !isLoaded ? (
      <Loading />
    ) : movie === undefined ? (
      <Redirect to="/not-found" />
    ) : (
      <div>
        {this.bgImage()}
        <div className="detailsContainer">
          <div className="detailstitle"> {movie.title}</div>
          <div className="detailsbox detailssynopsis">{movie.synopsis}</div>

          <div className="details-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              viewBox="0 0 24 24"
            >
              <g fill="#fff">
                <path d="M3 22v-20l18 10-18 10z" />
              </g>
            </svg>
          </div>
          <div className="detailslink">
            {" "}
            <Link to="/" exact="true">
              {" "}
              <p>Go back to the Home page</p>
            </Link>{" "}
          </div>

          <br />
        </div>
      </div>
    );
  }
}

export default Details;
