import React, { Component } from "react";
import loginImg from "../../../static/assets/img/auth/login.jpg";
import Login from "../auth/login";

export default class Auth extends Component {
  constructor(props){
    super(props)

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin(){
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }

  handleUnsuccessfulLogin(){
    this.props.handleUnsuccessfulLogin()
  }


  render() {
    return (
      <div className="auth-page-wrapper">
        
        <div className="left-column">
        
          <div
            className="auth-img-wrp"
            style={{
             backgroundImage: `url(${loginImg})`
            }}
          />

        </div>  

        <div className="right-column">
          <Login
            handleSuccessfulLogin= {this.handleSuccessfulLogin}
            handleUnsuccessfulLogin= {this.handleUnsuccessfulLogin}
          />
        </div>
      </div>
    );
  }
}