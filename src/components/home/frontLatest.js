import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BlogItem from "../blog/blog-item";


class FrontLatest extends Component {
  constructor(){
    super();

    this.state ={
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true
    };

    this.getBlogItems = this.getBlogItems.bind(this);    
}
 
  getBlogItems(){
    this.setState({
      currentPage: this.state.currentPage + 1
    })
    axios
      .get(`https://satelucoweb.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, {
        withCredentials: true
      })
      .then(response => {
        console.log("getting", response.data);
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,  //this will change depending on the API
          isLoading: false
        });
      })
      .catch(error => {
        console.log("getBlogItems error", error);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.onScroll, false);
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      console.log(blogItem.id)
      return <BlogItem key={blogItem.id} blogItem = {blogItem} />;
      }  
    );

    return<div className="blog-body">
            <div className="blog-wrp">

              <div>
                {blogRecords}
                
              </div>
            </div>
          </div>;
  }
}

export default FrontLatest;

