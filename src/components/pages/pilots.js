import React from "react";

import mainPicturePerez from "../../../static/assets/img/drivers/sergio-perez/perez-main.jpg"
import mexicoFlag from "../../../static/assets/img/drivers/flags/mexico.jpg"
import helmetPerez from "../../../static/assets/img/drivers/sergio-perez/perez-helmet.png"

export default function() {
  return (
    <div className="driver-wrp">
      <div className="driver-information">
        <div className="left-column">
          <div className="driver-img-wrp"
               style={{
               backgroundImage: `url(${mainPicturePerez})`
               }}
          >
          </div>
          <div className="driver-detail">
              <div className="driver-detail-number">
                <div className="driver-detail-number-digit">
                  11
                </div>
                <div className="driver-detail-number-flag"
                     style={{
                      backgroundImage: `url(${mexicoFlag})`
                      }}
                >
                </div>       
              </div>
              <div className="driver-detail-name">
               Sergio Perez
              </div>
          </div>
        </div>
        <div className="right-column">
          <div className="stats-list">
            <div className="extra-info">
                <div className="brand-logo"
                    style={{
                    backgroundImage: `url(${helmetPerez})`
                    }}
                >
                </div>
                <div className="text-link">
                    <a>Official Merchandise</a>
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Team
                </div>
                <div className="stats-value">
                    Racing Point
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Country
                </div>
                <div className="stats-value">
                    Mexico
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Podiums
                </div>
                <div className="stats-value">
                    8
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Points
                </div>
                <div className="stats-value">
                    542
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Grands Prix Entered
                </div>
                <div className="stats-value">
                    162
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    World Championships
                </div>
                <div className="stats-value">
                    N/A
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Highest Race Finish
                </div>
                <div className="stats-value">
                    2 (x2)
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Highest Grid Position
                </div>
                <div className="stats-value">
                    4
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Date of Birth
                </div>
                <div className="stats-value">
                    26/01/1990
                </div>
            </div>
            <div className="stats">
                <div className="stats-key">
                    Place of Birth
                </div>
                <div className="stats-value">
                    Guadalajara, Mexico
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}