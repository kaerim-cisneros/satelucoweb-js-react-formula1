import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // -- This is the code to submit form to API -- \\\
    
    handleSubmit(event){
        axios.post("https://api.devcamp.space/sessions", // This will be the address of the API with credentials
         {
            client:{ // This will change depending on the wrp name that the API has
                email: this.state.email,
                password: this.state.password
            }
         },
         { withCredentials: true }
        ).then(response => {
            if (response.data.status === "created") {
                this.props.handleSuccessfulLogin()
            } else {
                this.setState({
                    errorText:"Incorrect Username/Password"
                });
                this.props.handleUnsuccessfulLogin()
            }
        }).catch(error => {
            this.setState({
                errorText: "An error occurred"
            });
            this.props.handleUnsuccessfulLogin()
        });

        
        event.preventDefault();
    }
    // - This is the code to handle changes in the imput form -- \\
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }
    
    render() {
      return (
        <div>
            <div className= "form-wrp">
                <h1>SIGN IN</h1>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit} className="form-login">
                    
                    <label for="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter your username"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        name="password" //This needs to match the name of the state
                        placeholder="Enter your password"
                        value={this.state.password} //This needs to match the name of the state
                        onChange={this.handleChange}
                    />

                    <div className="btm-from">
                        <button className="red-btn" type="submit">SIGN IN</button>
                    </div>
                </form>
            </div>
        </div>
      );
    }
  }