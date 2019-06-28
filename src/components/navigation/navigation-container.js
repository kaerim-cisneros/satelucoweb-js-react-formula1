import React from "react";
import axios from "axios";
//you need this to redirect after sign out - Higher Order Component (HOC) needs to start in undercase so it can be deferenciate from a component
import { withRouter } from "react-router";   
import { NavLink } from "react-router-dom";

import logoImg from "../../../static/assets/img/logo.png";

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) =>{
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
            {linkText}
        </NavLink>
      </div>
    );
  };


  const handleSignOut = () => {  //logout 
    axios.delete("https://api.devcamp.space/logout", {withCredentials: true})
    .then(response => {
      if (response.status === 200) { //200 can change depending on the API respond
        props.history.push("/");
        props.handleSuccessfulLogout();
      } 
      return response.data;
    })
    .catch(error =>{

    })
  };

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                
                
                <div className="logo">
                    <NavLink exact to="/"> 
                      <img src={logoImg} />
                    </NavLink>
                </div>        
                            
               <div className="nav-link-wrapper">
                   <NavLink to="/blog" activeClassName="nav-link-active">
                        Latest
                    </NavLink>
                </div>
               
                <div className="nav-link-wrapper">
                    <NavLink to="/standings" activeClassName="nav-link-active">
                        Standings
                    </NavLink>
                </div>
                
                <div className="nav-link-wrapper">                 
                    <NavLink to="/pilots" activeClassName="nav-link-active">
                       Drivers
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/teams" activeClassName="nav-link-active">
                      Teams
                    </NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? (dynamicLink("/calendar-manager", "Calendar Manager")) : null}

            </div>

            <div className="right-side">
              {props.loggedInStatus === "LOGGED_IN" ? (
                <a onClick={handleSignOut}>Sign Out</a>
                ) : null}
            </div>    

        </div>
    );
  }
  export default withRouter(NavigationComponent); //Wrap the HOC