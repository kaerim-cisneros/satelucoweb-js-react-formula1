import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import moment from "moment";

const NavigationLogIn = props => {

  const dynamicSignInButtom = () =>{
    return (
      <div>
        <Link to="/auth">
          <button type="button" className="signin-btn">
            <FontAwesomeIcon icon="user" /> SIGN IN
          </button>
        </Link>
      </div>
    );
  };

  const dynamicSignOutButtom = () =>{
    return (
      <div>
        <Link to="/">
          <button type="button" className="signin-btn" >
            <FontAwesomeIcon icon="sign-out-alt"/> SIGN OUT
          </button>
        </Link>
      </div>
    );
  };

    return (
        
        <div className="login-wrapper">
            <div className="left-side">
            <div>Azerbaijan GP {moment().fromNow()}</div>
            
            This is not the official web page of Formula 1 and it is just an school excerxise 
            </div>


            <div className="right-side">
                 
                 {props.loggedInStatus === "NOT_LOGGED_IN" ? (dynamicSignInButtom()) : null} {/*The status needs to be link in the App page with the call of the component so*/} 
                 {props.loggedInStatus === "LOGGED_IN" ? (dynamicSignOutButtom()) : null}
                                               
                 <div> 
                    <button className="red-btn" onClick={() => to="/standings"}>
                      SUBSCRIBE
                    </button>
                 </div>
            </div>
        </div>    
    );
  }

export default NavigationLogIn