import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  Login  from '../pages/Login';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
            <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;