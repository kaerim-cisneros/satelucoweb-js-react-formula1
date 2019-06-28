import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = props => {
  const portfolioList = props.data.map(portfolioItem => {
    return (
      <div key={portfolioItem.id} className="calendar-list-item">
        <div className="calendar-list-item-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <div className="calendar-list-item-text-wrp">
          <h1 className="calendar-list-item-text-wrp-title">{portfolioItem.name}</h1>
          <div className="calendar-list-item-text-wrp-item-id-delete">
            <p className="calendar-list-item-text-wrp-item-id-delete-id">{portfolioItem.id}</p>
            
            <a onClick={() => props.handleEditClick(portfolioItem)} className="calendar-list-item-text-wrp-item-id-delete-action">
              <FontAwesomeIcon icon="edit" />
            </a>

            <a onClick={() => props.handleDeleteClick(portfolioItem)} className="calendar-list-item-text-wrp-item-id-delete-action">
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="calendar-list-wrp">{portfolioList}</div>;
};

export default PortfolioSidebarList;