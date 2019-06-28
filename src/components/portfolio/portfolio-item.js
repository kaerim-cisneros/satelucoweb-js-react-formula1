import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component{
  constructor(props) {
    super(props);

    this.state ={
      portfolioItemClass:""
    };
  }

  handleMouseEnter() {
    this.setState({portfolioItemClass: "image-blur"});
  }

  handleMouseLeave() {
    this.setState({portfolioItemClass: ""});
  }


  render(){
  const { id, description, thumb_image_url, logo_url} = this.props.item;
    return (
      <Link to = {`/portfolio/${id}`}>
      <div 
        className="races-item-wrappers"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >

        <div
          className={"races-img-background " + this.state.portfolioItemClass}
          style={{
            backgroundImage: "url("+ thumb_image_url +")"
          }}
        />
        
        <div className="img-txt-wrp">
          
          <div className="logo-wrp">
            <img src={logo_url} />    
          </div>

          <div className="subtitle">
            {description}
          </div>
        
        </div>
      </div>
      </Link>
    );
  }
}
