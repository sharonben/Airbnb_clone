import React from "react";
import "./MenuItem.css";

function MenuItem({ data }) {
  return (
    <div className={data ? "menu-wrapper" : "menu-none"}>
      <div className="sign-item-container">
        <div className="sign-item">Sign up</div>
        <div className="login-item">Log in</div>
      </div>
      <div className="host-container">
        <div className="host1">Host your home</div>
        <div className="host2">Host an experience</div>
        <div className="host3">Help</div>
      </div>
    </div>
  );
}

export default MenuItem;
