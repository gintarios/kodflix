import React from 'react';
import './Movie.css';


const movie = props => {
    return (
        <div className="Column">
            <div className="overlay">
                <h2>{props.movietitle}</h2>
            </div>
            <img src={props.movieimg} alt={props.movietitle} />
        </div>
    )
};

export default movie;