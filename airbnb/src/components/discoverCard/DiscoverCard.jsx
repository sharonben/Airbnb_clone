import React from "react";
import "./DiscoverCard.css";

function DiscoverCard({ data, title, lbl }) {
  return (
    <div className="discover-card-wrapper">
      <img className="container-img" src={data} alt="" />
      <div className="card-inbox">
        <div className="heading2">{title}</div>
        <button className="btn">{lbl}</button>
      </div>
    </div>
  );
}

export default DiscoverCard;
