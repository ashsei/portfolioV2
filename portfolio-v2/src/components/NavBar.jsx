import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                    About Me
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    My Work
                </Link>
            </li>
            <li>
                <Link to="/resume">
                    My Resume
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    Contact Me
                </Link>
            </li>
        </ul>
    )
}

export default withRouter(NavBar);