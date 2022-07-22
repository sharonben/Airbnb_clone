import React from "react";
import ListNavBar from "./component/listNavBar/ListNavBar";
import "./HomeListingPage.css";
import NavMenu from "./component/navMenu/NavMenu";
import { HomesArray } from "../HomesArray";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import FooterList from "../../components/footerList/FooterList";
import { useState, useEffect } from "react";
import MapButton from "./component/mapButton/MapButton";
import { Link } from "react-router-dom";

function HomeListingPage() {
  const [arrayNew, setArrayNew] = useState(HomesArray);

  useEffect(() => {
    setType("all");
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const [type, setType] = useState("all");

  const results = HomesArray.filter(
    (houses) => houses.property_spec.toLowerCase() === type.toLowerCase()
  );

  return (
    <div>
      <ListNavBar />
      <div className="nav-menu">
        <NavMenu setType={setType} />
      </div>
      <div className="listing-container">
        {type === "all"
          ? arrayNew.map((item, index) => {
              return (
                <div className="list-box" key={index}>
                  <Link className="buy-link" to={`/buy/${item.id}`}>
                    <div className="image1-container">
                      <img
                        key={index}
                        className="image1"
                        src={item.image1}
                        alt=""
                      />
                      <div className="like-icon-con">
                        <FavoriteTwoToneIcon className="like-icon" />
                      </div>
                    </div>
                    <div className="title-distance-container">
                      <div className="title-price-container">
                        <div className="title-text">{item.title}</div>
                        <div className="prices">{item.price}</div>
                      </div>
                      <div className="distance-date-container">
                        <div>{item.distance}</div>
                        <div>{item.date}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          : results.map((item, index) => {
              return (
                <Link className="buy-link" to={"/buy"}>
                  <div className="list-box" key={index}>
                    <div className="image1-container">
                      <img
                        key={index}
                        className="image1"
                        src={item.image1}
                        alt=""
                      />
                      <div className="like-icon-con">
                        <FavoriteTwoToneIcon className="like-icon" />
                      </div>
                    </div>
                    <div className="title-distance-container">
                      <div className="title-price-container">
                        <div className="title-text">{item.title}</div>
                        <div>{item.price}</div>
                      </div>
                      <div className="distance-date-container">
                        <div>{item.distance}</div>
                        <div>{item.date}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>

      <div className="homelisting-footer">
        <FooterList />
      </div>

      <Link to={"/map"}>
        <div className="map-btn">
          <MapButton />
        </div>
      </Link>
    </div>
  );
}

export default HomeListingPage;
