import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  Login  from '../pages/Login';
import './Navbar.css';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        localStorage.setItem("isLoggedIn","false")
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">React Website</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/register"></Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="http://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Our Products</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown03">
                                    <Link className="dropdown-item" to="/products/1">Tables</Link>
                                    <Link className="dropdown-item" to="/products/2">Chairs</Link>
                                    <Link className="dropdown-item" to="/products/3">Beds</Link>
                                    <Link className="dropdown-item" to="/products/4">Sofa</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={this.handleLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;