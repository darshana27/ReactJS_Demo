import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar_Loggedout';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pwd: ''
        }

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handlePwdClick = this.handlePwdClick.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    componentDidMount(){
        localStorage.setItem("isLoggedIn","false")
        var loggedIn = localStorage.getItem("isLoggedIn");
        console.log("------------------>",this.state.uname)
        if(loggedIn == "false") {
            this.props.history.push("/login")
        }
    }

    handleLoginClick(event) {
        this.setState({ uname: event.target.value})
    }
    
    handlePwdClick(event) {
        this.setState({ pwd: event.target.value})
    }

    handleSubmitClick() {
        console.log(this.state.uname, this.state.pwd)
        var username=localStorage.getItem("username");
        var password=localStorage.getItem("password");
        console.log(username,password)
        if(this.state.uname == username && this.state.pwd == password) {
            alert("Login Successful")
            this.props.history.push("/")
            localStorage.setItem("isLoggedIn","true")
        }
        else {
            localStorage.setItem("isLoggedIn","false")
            alert("Login Unsuccessful")
        }
    }
    render() {
        return(
            <div>
                <Navbar/>
            <div className="container-fluid">
                <div className="loginBox mx-auto">
                    <div className="loginInner">
                        <h3 className="loginText">Login</h3>
                        <br/>
                        <form className="form-inline my-2 my-md-0">
                            <input
                                type="text"
                                id="TxtUsername" 
                                onChange= {this.handleLoginClick}/>
                        </form>
                        <br/>
                        <form className="form-inline my-2 my-md-0">
                            <input
                                    id="TxtPassword"
                                    type= "password" 
                                    onChange= {this.handlePwdClick}/>                    
                            </form>
                        <br/>
                        <button className="btn mx-auto" type="submit" value="Submit" onClick={this.handleSubmitClick}>
                            Submit
                        </button>
                    </div> 
                </div>
               
            </div>
             <Footer/>
             </div>
        );
    }
}

export default Login;