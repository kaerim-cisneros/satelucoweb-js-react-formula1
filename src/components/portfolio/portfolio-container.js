import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
      this.state = {
      pageTitle: "F1 Schedule - 2019 FIA Formula One World Championship® Race Calendar",
      isLoading: false,
      data: [ ]
  };
    this.handleFilter = this.handleFilter.bind(this);
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getPortfolioItems() {
    axios
    .get('https://satelucoweb.devcamp.space/portfolio/portfolio_items')
    .then (response =>  {
      this.setState({
        data: response.data.portfolio_items
      })
    })
    .catch(error => {
      console.log(error);
    });
  }


  portfolioItems() {
    return this.state.data.map(item => {
      return (
        <PortfolioItem 
          key={item.id} 
          item={item}
        />
      );
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="race-page-wrapper">

        <div className="race-page-title">
          <h2>{this.state.pageTitle}</h2>
        </div>

        <div className="races-items-wrappers" >
           
            {/*<button className="btn" onClick={() => this.handleFilter("eCommerce")}>
              eCommerce
            </button>
            <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
              Scheduling
            </button>
            <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
              Enterprise
            </button>
            <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
              Enterprise
            </button>*/}

            {this.portfolioItems()}
        </div>
        
      </div>
    );
  }
}
