import React, { Component } from "react";
import axios from "axios";
import BlogItem from "../blog/blog-item";

import LeftBG from "../../../static/assets/img/blog/latest-cross.jpg"

const styles = {
  crossBG: {
      backgroundImage: `url(${LeftBG})`
  }
};

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



  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem = {blogItem} />;
      }  
    );
    
    return<div className="latest-body">
            <div className="latest-wrp-left" style={styles.crossBG}>
              
              <div className="feautured" >
            
                <div className="tag">
                  <b>News</b>
                </div>
             
                {blogRecords.sort()[0]}
            
              </div>
            
            </div>
            
            <div className="latest-wrp-right">
            
              <div className="latest-news">
               {blogRecords.sort()[1]}
              </div>
            
              <div className="latest-news">
              {blogRecords.sort()[2]}
              </div>
            
              <div className="latest-news">
              {blogRecords.sort()[3]}
              </div>
            
              <div className="latest-news">
              {blogRecords.sort()[4]}
              </div>
            
            </div>
          </div>;
  }
}

export default FrontLatest;

