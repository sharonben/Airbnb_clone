import React from "react";
import "./ListNavBar.css";
import pinklogo from "../../airbnbpinkLogo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../../../components/menuitem/MenuItem";

function ListNavBar({ data }) {
  const [menu, setMenu] = useState(false);

  const menuClick = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <div className={data === "sticky" ? "nnn" : "listnav-wrapper"}>
      <Link to={"/"}>
        <div className="logo-container">
          <img className="pink-logo" src={pinklogo} alt="" />
        </div>
      </Link>

      <div className="navbar-right">
        <div className="host">Become a host</div>
        <div className="globe-container">
          <LanguageIcon fontSize="small" className="globe" />
        </div>
        <div className="icons-container2">
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

      <div className="menu-item2">
        <MenuItem data={menu} />
      </div>
    </div>
  );
}

export default ListNavBar;
