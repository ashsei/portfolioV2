import React from 'react';
import { Link, withRouter } from 'react-router-dom'; 
import { Home, User, Code, AtSign, Settings, FileText } from 'react-feather'

const NavBar = () => {
    return (
        <div className="sidebar-container" style={{backgroundColor: 'grey'}}>
            <ul className="sidebar">
                <li className="navbar-item">
                    <Link to="/">
                        <i><Home color="black" size={40} /></i>
                        <p>Home</p>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about">
                        <i><User color="black" size={40} /></i>
                        <p>About Me</p>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/projects">
                        <i><Code color="black" size={40} /></i>
                        <p>My Work</p>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/skills">
                        <i><Settings color="black" size={40} /></i>
                        <p>My Skills</p>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/resume">
                        <i><FileText color="black" size={40} /></i>
                        <p>My Resume</p>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact">
                        <i><AtSign color="black" size={40} /></i>
                        <p>Contact Me</p>
                    </Link>
                </li>
            </ul>
        </div>
        
    )
}

export default withRouter(NavBar);