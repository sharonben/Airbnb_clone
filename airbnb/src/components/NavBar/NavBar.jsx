import React from "react";
import logo from "./airbnb.png";
import "./NavBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuItem from "../menuitem/MenuItem";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const menuClick = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="navbar-middle">
          <ul className="ul-container">
            <li>Places to stay</li>
            <li>Experiences</li>
            <li>Online Experiences</li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="host">Become a host</div>
          <div className="globe-container">
            <LanguageIcon fontSize="small" className="globe" />
          </div>
          <div className="icons-container">
            <MenuIcon
              onClick={menuClick}
              className="menu-icon"
              fontSize="small"
              fill="black"
            />
            <AccountCircleIcon
              onClick={menuClick}
              className="avatar-icon"
              fontSize="large"
            />
          </div>
        </div>
      </div>
      <MenuItem data={menu} />
    </div>
  );
}

export default NavBar;
