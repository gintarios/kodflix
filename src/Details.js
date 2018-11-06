import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                <div>{this.state.message}</div>
                <div onLoad={setTimeout(() => this.changeState(), 3000)} > </div>
                <br />
                <Link to="/" exact> Go back to the Home page. </Link>
            </div >
        );
    }
}



export default Details;


