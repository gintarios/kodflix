import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movies from "./Gallery-get";
import Movie from './Movie';


class Details extends Component {

    state = {
        message: "Hello! This will be the details page for each Movie & TV Show!:)"
    }

    changeState = () => {
        this.setState({ message: "Comming soon!!!!" });
    }

    render() {
        return (
            <div>
                {/* 
                <h3>{this.props.match.url}</h3>
                */}


                <h2>{movies.find(movie => movie.url == this.props.match.url).movietitle}</h2>
                {/*
                <div>{this.state.message}</div>
                <div componentDidMount={setTimeout(() => this.changeState(), 3000)} > </div>    
                */}

                <br />
                <Link to="/" exact> Go back to the Home page. </Link>
            </div >
        );
    }
}



export default Details;


