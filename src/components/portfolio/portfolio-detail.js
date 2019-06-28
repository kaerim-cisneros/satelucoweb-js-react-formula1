import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state= {
      portfolioItem: {} //this will give you an empty string
    }
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get( `https://satelucoweb.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        })
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }

  render() {
    const {
        banner_image_url,
        category,
        description,
        logo_url, 
        name,
        thumb_image_url,
        url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      
    };

    return (
      <div className="calendar-detail-wrp"> 
        <div className="banner" style={bannerStyles}>
          <h1>{name}</h1>
        </div>
        <div className = "race-nav">
        <div className="race-nav-link-wrapper">                 
           
            <NavLink to="#" activeClassName="nav-link-active">
              Highlights
            </NavLink>
            
        </div>
        </div>
        <div className = "calendar-detail-wrp-description">
          <div className = "race-name">
            <h2>{description}</h2>
          </div>
          <div className = "race-info">
            <div className="circuit-map">
              .
            </div>
            <div className="ciruit-details" >
              <div className="link-box">  
                 
                  <a href={url} className="race-detail-link" target="_blank">
                    <div className= "link-icon"> &#8600;</div> 
                    <div>Video Highlight</div>
                  </a>
                  
                 
                  <a href="/" className="race-detail-link">
                  <div className= "link-icon"> &#8600;</div> 
                  <div> All Races </div> 
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
