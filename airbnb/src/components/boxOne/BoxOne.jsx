import React from "react";
import { Link } from "react-router-dom";
import "./BoxOne.css";

function BoxOne() {
  return (
    <div className="boxone-wrapper">
      <div className="heading">Help house 100,000 refugees fleeing Ukraine</div>
      <Link className="linked" to={"/learnmoreBtn"}>
        <div className="learn-more">Learn more</div>
      </Link>
    </div>
  );
}

export default BoxOne;
