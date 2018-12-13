import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var loggedIn = localStorage.getItem("isLoggedIn");
        if(loggedIn == "false") {
            this.props.history.push("/login")
        }
    }
    render() {
        return(
            <div>
                <Navbar/>
                <Jumbotron title="Welcome!" subtitle="Put something witty text over here."/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2> Welcome </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col">
                            <img src="https://picsum.photos/350/200" className="rounded pl-5" alt="Labrador"/>  
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                    </p>   
                </div>
                <Footer/>
            </div>      
        );
    }
}

export default Home;