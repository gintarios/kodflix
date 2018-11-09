import React, { Component } from 'react';
import Movie from './Movie';
import movies from "./data-get";


class Gallery extends Component {
    render() {
        return (
            <div>
                <div className="Container">
                    {movies.map(function (movie, index) {
                        return <Movie url={movies[index].url}
                            movietitle={movies[index].movietitle}
                            movieimg={movies[index].movieimg} />
                    })}
                </div>

            </div>
        );
    }
}

export default Gallery;