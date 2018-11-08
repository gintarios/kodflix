import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <h3>Oooops, it looks like this page doens't exist:(</h3>
            <br />
            <Link to="/" exact> Go back to the Home page. </Link>

        </div>

    );
}


export default NotFound;