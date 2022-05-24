import React from "react";
import "./HostCard.css";

function HostCard() {
  return (
    <div className="host-wrapper">
      <div className="host-items">
        <div className="host-caption">
          Questions<br/> about<br/> hosting?
        </div>
        <button className="host-btn">Ask a Superhost</button>
      </div>
    </div>
  );
}

export default HostCard;
