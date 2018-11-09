import React from 'react';
import { Link } from 'react-router-dom';


const notFoundStyle = {
    color: '#fe4365',
    paddingTop: '50px'
}

const backToHome = {
    color: 'grey'
}

const NotFoundStylebox = {
    height: '100vh'
}

const NotFound = () => {
    return (
        <div style={NotFoundStylebox}>
            <h1 style={notFoundStyle}>Oooops, it looks like this page doesn't exist:(</h1>
            <br />
            <Link to="/" exact="true" style={backToHome}> Go back to the Home page </Link>

        </div >

    );
}


export default NotFound;