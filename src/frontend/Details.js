import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import movies from "./data-get";


class Details extends Component {

    findMovieTitle = () => {
        const findmovie = movies.find(movie => movie.url === this.props.match.url);
        return findmovie ? findmovie.movietitle : <Redirect to="/not-found" />
    }
    findSynopsis = () => {
        const findmovie = movies.find(movie => movie.url === this.props.match.url);
        return findmovie ? findmovie.synopsis : "No Synopsis found"
    }
    findMovieImg = () => {
        const findmovie = movies.find(movie => movie.url === this.props.match.url);
        return findmovie ? findmovie.movieimg : "No Image found"
    }



    render() {

        return (
            <div>
                <div className="detailsContainer">
                    <div className="detailstitle">{this.findMovieTitle()}</div>
                    <div className="detailsbox detailssynopsis">{this.findSynopsis()}</div>
                    <div className="detailsbox detailsimage"><img src={this.findMovieImg()} alt="Movie Cover" /></div>
                    < div className="detailslink" > <Link to="/" exact="true"> <p>Go back to the Home page</p></Link> </div>
                    <br />
                </div>
            </div >
        );
    }
}



export default Details;


