import React from "react";
import "./TripCard.css";
import { tripArray } from "./TripCardArray";

function TripCard() {
  return (
    <div className="tripcard-wrapper">
      {tripArray.map((item, index) => {
        return (
          <div
            className="card-component"
            style={{ backgroundColor: item.background }}
            key={index}
          >
            <img
              className="card-img"
              src={item.trip_image}
              alt=""
              key={index}
            />
            <div className="title-distance-container">
              <div className="trip-title">{item.trip_title}</div>
              <div className="distance">{item.distance}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TripCard;
