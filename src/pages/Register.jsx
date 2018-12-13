import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar_Loggedout';
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            uname: '',
            phno: '',
            pwd: '',
            cpwd: ''
        }

        this.setFname = this.setFname.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setUname = this.setUname.bind(this);
        this.setPhno = this.setPhno.bind(this);
        this.setPwd = this.setPwd.bind(this);
        this.setCPwd = this.setCPwd.bind(this);
        this.submit = this.submit.bind(this);
    }

    setFname(event) {this.setState({fname: event.target.value})}
    setEmail(event) {this.setState({email: event.target.value})}
    setUname(event) {this.setState({uname: event.target.value})}
    setPhno(event) {this.setState({phno: event.target.value})}
    setPwd(event) {this.setState({pwd: event.target.value})}
    setCPwd(event) {this.setState({cpwd: event.target.value})}
    submit() {
        console.log("->Fname:",this.state.fname,"->Email:",this.state.email,"->Uname:",this.state.uname,"->Phno:",this.state.phno,"->Pwd:",this.state.pwd,"->Cpwd:",this.state.cpwd)
        if(this.state.pwd !== this.state.cpwd) {
            alert("Passwords donot match")
        }
        else {
            localStorage.setItem("username",this.state.uname)
            localStorage.setItem("password",this.state.pwd)
            alert("Registration Successful!")
            this.props.history.push("/login")
        }
    }

    render() {
        return(
            <div>
                <Navbar/>
                <div className="my-form">
                    <div className="cotainer">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header">Register</div>
                                        <div className="card-body">
                                            <div name="my-form">
                                                <div className="form-group row">
                                                    <label className="col-md-4 col-form-label text-md-right">Full Name</label>
                                                    <div className="col-md-6">
                                                        <input type="text" id="full_name" className="form-control" name="full-name" onChange={this.setFname}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                                    <div className="col-md-6">
                                                        <input type="text" id="email_address" className="form-control" name="email-address" onChange={this.setEmail}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-4 col-form-label text-md-right">User Name</label>
                                                    <div className="col-md-6">
                                                        <input type="text" id="user_name" className="form-control" name="username" onChange={this.setUname}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-4 col-form-label text-md-right">Phone Number</label>
                                                    <div className="col-md-6">
                                                        <input type="text" id="phone_number" className="form-control" onChange={this.setPhno}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-4 col-form-label text-md-right">Password</label>
                                                    <div className="col-md-6">
                                                        <input type="text" id="password" className="form-control" onChange={this.setPwd}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                                    <div className="col-md-6">
                                                        <input type="text" id="confirm_password" className="form-control" name="confirm-password" onChange={this.setCPwd}/>
                                                    </div>
                                                </div>

                                                    <div className="col-md-6 offset-md-4">
                                                        <input type="submit" value="Submit" onClick={this.submit}  className="btn btn-primary"/>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Register;