import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import movies from "./Gallery-get";


class Details extends Component {

    findMovieTitle = () => {
        const findmovie = movies.find(movie => movie.url == this.props.match.url);
        return findmovie ? findmovie.movietitle : <Redirect to="/not-found" />
    }

    render() {
        return (
            <div>
                {this.findMovieTitle()}
                <br />
                <Link to="/" exact> Go back to the Home page. </Link>
            </div >
        );
    }
}



export default Details;


