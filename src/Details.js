import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Details = () => (
    <div>
        Hello. This will be the details page for each Movie &amp; TV Show:) <br />
        <Link to="/" exact> Go back to the Home page. </Link>
    </div >

);

export default Details;