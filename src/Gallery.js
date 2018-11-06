import React, { Component } from 'react';
import Movie from './Movie';
import Movie1 from "./img/blackmirror.jpg";
import Movie2 from "./img/breakingbad.jpg";
import Movie3 from "./img/deathnote.jpg";
import Movie4 from "./img/got.jpg";
import Movie5 from "./img/walkingdead.jpg";
import Movie6 from "./img/thewire.jpg";


class Gallery extends Component {
    render() {
        return (
            <div>
                <div className="Container">
                    <Movie movietitle="Black Mirror" movieimg={Movie1} url="/black-mirror" />
                    <Movie movietitle="Breaking Bad" movieimg={Movie2} url="/breaking-bad" />
                    <Movie movietitle="Death Note" movieimg={Movie3} url="/death-note" />
                    <Movie movietitle="Game of Thrones" movieimg={Movie4} url="/game-of-thrones" />
                    <Movie movietitle="Walking Dead" movieimg={Movie5} url="/walking-dead" />
                    <Movie movietitle="The Wire" movieimg={Movie6} url="/the-wire" />
                </div>
            </div>
        );
    }
}

export default Gallery;