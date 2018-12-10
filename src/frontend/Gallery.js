import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("/rest/shows")
      .then(response => response.json())
      .then(json =>
        this.setState({
          isLoaded: true,
          movies: json
        })
      )
      .catch(error => console.log("Error:", error));
  }

  render() {
    const { isLoaded, movies } = this.state;

    return !isLoaded ? (
      <Loading />
    ) : (
      <div>
        <div className="Container">
          {movies.map(function(movie, index) {
            return (
              <div className="Column">
                <Link to={movie.id} exact="true">
                  <div className="overlay">
                    <h2>{movie.title}</h2>
                  </div>
                  <img
                    src={require(`./common/images/${movie.id}.jpg`)}
                    alt="Movie Cover"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
