import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Movie from './Movie/Movie';
import App from './App';

const navigation = props => {
    return (
        <Router>
            <div>
                <Route path={props.url} component={Movie} />
                <Route path="/" component={App} />
            </div>
        </Router>
    )
}



export default navigation; 