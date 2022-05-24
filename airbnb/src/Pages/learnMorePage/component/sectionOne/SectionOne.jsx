import React from "react";
import "./SectionOne.css";
import s1img from "./section1.jpg"

function SectionOne() {
  return (
    <div className="section1-container">
      <div className="section1-left">
        <div className="s1-caption1">
          Help house 100,000 refugees fleeing Ukraine
        </div>
        <div className="s1-caption2">
          Offer stays for free or at a discount through Airbnb.org, or donate to
          help our funding stretch further.
        </div>
        <div className="s1-caption3">
          <button>Host a refugee</button>
        </div>
      </div>
      <div className="section1-right">
          <img className="s1-img" src={s1img} alt="" />
          {/* <p className="s1-img-caption">Els is a Host in Rome who hosted a refugee through Airbnb.org.</p> */}
      </div>
    </div>
  );
}

export default SectionOne;
