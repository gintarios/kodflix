import React from 'react';
import './Movie/Movie.css';
import { Link } from 'react-router-dom';

const Movie = props => {
    return (
        <div className="Column">
            <Link to="/details" exact>

                <div className="overlay">
                    <h2>{props.movietitle}</h2>
                </div>
                <img src={props.movieimg} alt={props.movietitle} />
            </Link>
        </div>

    )
};

export default Movie;