import React from "react";
import "./NavMenu.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function NavMenu({ setType }) {
  const [action, setAction] = useState(false);
  const [cabin, setCabin] = useState(false);
  const [pool, setPool] = useState(false);
  const [farm, setFarm] = useState(false);
  const [beach, setBeach] = useState(false);
  const [tiny, setTiny] = useState(false);
  const [offbeat, setOffbeat] = useState(false);
  const [aframes, setAframes] = useState(false);
  const [domes, setDomes] = useState(false);

  const BtnClick = () => {
    setType("treehouses");
    setAction(true);
    setCabin(false);
    setPool(false);
    setFarm(false);
    setBeach(false);
    setTiny(false);
    setOffbeat(false);
    setAframes(false);
    setDomes(false);
  };
  const BtnClickCabin = () => {
    setType("cabins");
    setAction(false);
    setCabin(true);
    setPool(false);
    setFarm(false);
    setBeach(false);
    setTiny(false);
    setOffbeat(false);
    setAframes(false);
    setDomes(false);
  };
  const BtnClickPool = () => {
    setType("amazing pools");
    setAction(false);
    setCabin(false);
    setPool(true);
    setFarm(false);
    setBeach(false);
    setTiny(false);
    setOffbeat(false);
    setAframes(false);
    setDomes(false);
  };
  const BtnClickFarm = () => {
    setType("farms");
    setAction(false);
    setCabin(false);
    setPool(false);
    setFarm(true);
    setBeach(false);
    setTiny(false);
    setOffbeat(false);
    setAframes(false);
    setDomes(false);
  };
  const BtnClickBeach = () => {
    setType("beach front");
    setAction(false);
    setCabin(false);
    setPool(false);
    setFarm(false);
    setBeach(true);
    setTiny(false);
    setOffbeat(false);
    setAframes(false);
    setDomes(false);
  };

  const BtnClickTiny = () => {
    setType("tiny homes");
    setAction(false);
    setCabin(false);
    setPool(false);
    setFarm(false);
    setBeach(false);
    setTiny(true);
    setOffbeat(false);
    setAframes(false);
    setDomes(false);
  };

  const BtnClickOffbeat = () => {
    setType("offbeat");
    setAction(false);
    setCabin(false);
    setPool(false);
    setFarm(false);
    setBeach(false);
    setTiny(false);
    setOffbeat(true);
    setAframes(false);
    setDomes(false);
  };

  const BtnClickAframes = () => {
    setType("aframes");
    setAction(false);
    setCabin(false);
    setPool(false);
    setFarm(false);
    setBeach(false);
    setTiny(false);
    setOffbeat(false);
    setAframes(true);
    setDomes(false);
  };

  const BtnClickDomes = () => {
    setType("domes");
    setAction(false);
    setCabin(false);
    setPool(false);
    setFarm(false);
    setBeach(false);
    setTiny(false);
    setOffbeat(false);
    setAframes(false);
    setDomes(true);
  };

  return (
    <div className="nav-menu-wrapper">
      <div className="nav-menu-left">
        <ul className="menu-nav-ul">
          <li
            onClick={BtnClick}
            className={action ? "treehouse2" : "treehouse"}
          >
            treehouses
          </li>
          <li
            onClick={BtnClickCabin}
            className={cabin ? "treehouse2" : "treehouse"}
          >
            Cabins
          </li>
          <li
            onClick={BtnClickPool}
            className={pool ? "treehouse2" : "treehouse"}
          >
            Amazing pools
          </li>
          <li
            onClick={BtnClickFarm}
            className={farm ? "treehouse2" : "treehouse"}
          >
            Farms
          </li>
          <li
            onClick={BtnClickBeach}
            className={beach ? "treehouse2" : "treehouse"}
          >
            Beachfront
          </li>
          <li
            onClick={BtnClickTiny}
            className={tiny ? "treehouse2" : "treehouse"}
          >
            Tiny Homes
          </li>
          <li
            onClick={BtnClickOffbeat}
            className={offbeat ? "treehouse2" : "treehouse"}
          >
            Offbeat
          </li>
          <li
            onClick={BtnClickAframes}
            className={aframes ? "treehouse2" : "treehouse"}
          >
            A-frames
          </li>
          <li
            onClick={BtnClickDomes}
            className={domes ? "treehouse2" : "treehouse"}
          >
            Domes
          </li>
          <li className="more-li">
            <div>More</div>
            <div>
              <ExpandMoreIcon />
            </div>
          </li>
        </ul>
      </div>

      <div className="nav-menu-right">
        <div className="anytime-btn">
          <div>Anytime</div>
          <div>
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="anytime-btn">
          <div>Guests</div>
          <div>
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="anytime-btn">
          <div>Filters</div>
          <div>
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
