import React, { Component } from 'react';
import axios from "axios";


import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class CalendarManager extends Component {
    
    constructor() {
        super();
    
        this.state = {
          portfolioItems: [],
          portfolioToEdit: {}
        };

        this.handleNewFormSubmission = this. handleNewFormSubmission.bind(this);
        this.handleEditFormSubmission = this. handleEditFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
      }

      clearPortfolioToEdit() {
        this.setState({
          portfolioToEdit: {}
        });
      }
    
      handleEditClick(portfolioItem) {
        this.setState({
          portfolioToEdit: portfolioItem
        });
      }

      handleDeleteClick(portfolioItem) {
        axios
          .delete(
            `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
            { withCredentials: true }
          )
          .then(response => {
            this.setState({
              portfolioItems: this.state.portfolioItems.filter(item => {
                return item.id !== portfolioItem.id;
              })
            });
    
            return response.data;
          })
          .catch(error => {
            console.log("handleDeleteClick error", error);
          });
      }

      handleEditFormSubmission(){
        this.getPortfolioItems();
      }

      handleNewFormSubmission(portfolioItem) { //Upload a new item
        this.setState({
          portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        });
      } 

      handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error);
      }

    getPortfolioItems() { //get items already in the API
        axios
        .get('https://satelucoweb.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc', {
          //"https://satelucoweb.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc" <=== if we want the side bar to show new elements from the top to the bottom this is just for this API
            withCredentials: true
        })
        .then (response =>  {
          this.setState({
            portfolioItems: [...response.data.portfolio_items]
          })
        })
        .catch(error => {
          console.log("error in getPortfolioItems", error);
        });
      }
    
      componentDidMount() {
        this.getPortfolioItems();
      }

    render(){
        if (this.state.isLoading) {
            return <div>Loading...</div>;
          }
          
        return(

            <div className="calendar-manager-wrp">
                <div className="right-column">
                    <PortfolioForm
                      handleNewFormSubmission = {this.handleNewFormSubmission}
                      handleEditFotmSubmission = {this.handleEditFormSubmission}
                      handleFormSubmissionError = {this.handleFormSubmissionError}
                      clearPortfolioToEdit={this.clearPortfolioToEdit}
                      portfolioToEdit={this.state.portfolioToEdit}
                    />
                </div>
                <div className="left-column">
                    <PortfolioSidebarList 
                        handleDeleteClick={this.handleDeleteClick}
                        data = {this.state.portfolioItems}
                        handleEditClick = {this.handleEditClick}
                    />

                </div>
            </div>

        )

    }
}