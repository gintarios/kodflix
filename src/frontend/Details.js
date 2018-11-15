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
                movie: json.find(movie => movie.id === this.props.match.url)
            }))
    }

    render() {
        const { isLoaded, movie } = this.state;
        if (!isLoaded) {
            return <div className="loader">
                <div className="icon">Loading...</div>
            </div>
        } else if (movie === undefined) {
            return <Redirect to="/not-found" />
        }
        else {

            return (
                <div>
                    <div className="detailsContainer">
                        <div className="detailstitle"> {movie.title}</div>
                        <div className="detailsbox detailssynopsis">{movie.synopsis}</div>
                        <div className="detailsbox detailsimage"><img src={require(`./common/images${movie.id}.jpg`)} alt="Movie Cover" /></div>
                        <div className="detailslink" > <Link to="/" exact="true"> <p>Go back to the Home page</p></Link> </div>
                        <br />
                    </div>
                </div >
            );

        }

    }
}

export default Details;



