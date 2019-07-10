import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationBottom extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div className="bottom-wrp">
          <div className="btm-nav-link-wrp">
            <NavLink to="/contact" activeClassName="nav-link-active">
              Contacts
            </NavLink>
          </div>
          This is not the official web page of Formula 1 and it is just an school excerxise 
          <div className="btm-nav-link-wrp">
            <NavLink to="/#" activeClassName="nav-link-active">
              Privacy Policy
            </NavLink>
          </div>    
    </div>
    );
  }
}