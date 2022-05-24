import React from "react";
import "./BoxTwo.css";
// import tent from "./box2tent.jpg";
import { Link } from "react-router-dom";

function BoxTwo() {
  return (
    <div className="boxtwo-wrapper">
      {/* <img src={tent} alt="" /> */}
      <div className="caption-btn-container">
        <div className="caption">Let your curiosity do the booking</div>
       <Link className="linked" to={'/flexibleBtn'}> <div className="flexible-btn">I'm flexible</div></Link>
      </div>
    </div>
  );
}

export default BoxTwo;
