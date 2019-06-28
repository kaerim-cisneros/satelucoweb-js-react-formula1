import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import NavigationLogIn from "./navigation/navigation-login";
import NavigationContainer from "./navigation/navigation-container";
import NavigationBottom from "./navigation/navigation-bottom";
import Home from "./pages/home";
import Teams from "./pages/teams";
import Pilots from "./pages/pilots";
import Standings from "./pages/standings";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-detail";
import CalendarManager from "./pages/calendar-manager";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";

Icons();

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus(){
    return axios.get("https://api.devcamp.space/logged_in", { 
      withCredentials: true 
    })
    .then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    })
    .catch(error => {
      console.log("Error", error);
  });
}

componentDidMount() {
  this.checkLoginStatus();
}

authorizedPages(){
  return [
    <Route 
      key="calendar-manager"
      path="/calendar-manager" 
      component={CalendarManager}
    />
  ];
}

render() {
  return (
      <div className="container">
        <Router>
          <div>
            
            <NavigationLogIn 
              loggedInStatus={this.state.loggedInStatus} 
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />
            <NavigationContainer 
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />
              <Route path="/teams" component={Teams} />
              <Route path="/pilots" component={Pilots} />
              <Route path="/standings" component={Standings} />
              <Route path="/contact" component={Contact} />
              
              <Route path="/blog" 
                render={props => (
                  <Blog {...props} loggedInStatus={this.state.loggedInStatus}/>
                )}
              /> 
              
              <Route 
                path="/latest/:slug"
                render = {props => (
                  <BlogDetail {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />

              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null} 
              
              <Route exact path="/portfolio/:slug" component={PortfolioDetail}/>
              <Route component={NoMatch} />
            </Switch>

            <NavigationBottom/>

          </div>
        </Router>

      </div>
    );
  }
}
