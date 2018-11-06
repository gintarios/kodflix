import React, { Component } from 'react';
import Movie from './Movie';
import Movie1 from "./img/blackmirror.jpg";
import Movie2 from "./img/breakingbad.jpg";
import Movie3 from "./img/deathnote.jpg";
import Movie4 from "./img/got.jpg";
import Movie5 from "./img/walkingdead.jpg";
import Movie6 from "./img/thewire.jpg";
import movies from "./Gallery-get";


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