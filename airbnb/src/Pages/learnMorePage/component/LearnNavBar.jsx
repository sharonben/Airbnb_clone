import React from "react";
import { Link } from "react-router-dom";
import "./LearnNavBar.css";
import learnsvg from "./SVG-1.svg";   
                        
function learnNavBar() {
 
  return (
    <div className="learn-nav-container">
      <Link to={"/"}><div className="learn-nav-right">                                          
       <img src={learnsvg} alt="" />
      </div></Link> 
      <div className="learn-nav-right">
        <div className="get-involved">Get involved</div>
        <div className="who">Who we are</div>
        <div className="donate-btn">Donate</div>
      </div>
    </div>
  );
}

export default learnNavBar;