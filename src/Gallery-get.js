import React, { Component } from 'react';
import Movie1 from "./img/blackmirror.jpg";
import Movie2 from "./img/breakingbad.jpg";
import Movie3 from "./img/deathnote.jpg";
import Movie4 from "./img/got.jpg";
import Movie5 from "./img/walkingdead.jpg";
import Movie6 from "./img/thewire.jpg";

const movies = [
    { url: "/black-mirror", movietitle: "Black Mirror", movieimg: Movie1 },
    { url: "/breaking-bad", movietitle: "Breaking Bad", movieimg: Movie2 },
    { url: "/death-note", movietitle: "Death Note", movieimg: Movie3 },
    { url: "/game-of-thrones", movietitle: "Game of Thrones", movieimg: Movie4 },
    { url: "/walking-dead", movietitle: "Walking Dead", movieimg: Movie5 },
    { url: "/the-wire", movietitle: "The Wire", movieimg: Movie6 }
]

export default movies;