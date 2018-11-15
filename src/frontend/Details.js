import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(json => this.setState({
                isLoaded: true,
                movies: json,
            }))
    }


    findMovieTitle = () => {
        const { movies } = this.state;
        const findmovie = movies.find(movie => movie.id === this.props.match.url);
        return findmovie ? findmovie.title : <Redirect to="/not-found" />
    }

    findSynopsis = () => {
        const { movies } = this.state;
        const findmovie = movies.find(movie => movie.id === this.props.match.url);
        return findmovie ? findmovie.synopsis : "No Synopsis found"
    }
    findMovieImg = () => {
        const { movies } = this.state;
        const findmovie = movies.find(movie => movie.id === this.props.match.url);
        return findmovie ? findmovie.id : "No Image found"
    }


    render() {
        const { isLoaded, movies } = this.state;
        if (!isLoaded) {
            return <div className="loader">
                <div className="icon">Loading...</div>
            </div>
        } else {

            return (
                <div>
                    <div className="detailsContainer">
                        <div className="detailstitle"> {this.findMovieTitle()}</div>
                        <div className="detailsbox detailssynopsis">{this.findSynopsis()}</div>
                        <div className="detailsbox detailsimage"><img src={require(`./common/images${this.findMovieImg()}.jpg`)} alt="Movie Cover" /></div>
                        <div className="detailslink" > <Link to="/" exact="true"> <p>Go back to the Home page</p></Link> </div>
                        <br />
                    </div>
                </div >
            );

        }

    }
}



export default Details;



