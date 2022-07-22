import React from "react";
import "./BuyPage.css";
import ListNavBar from "../../Pages/homeListingPage/component/listNavBar/ListNavBar";
import { HomesArray } from "../HomesArray";
import FooterList from "../../components/footerList/FooterList";
import bed from "./bed.png";
import bathroom from "./bathroom.png";
import guest from "./guest.png";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BuyPage() {
  const { id } = useParams();
  const intId = parseInt(id);
  const [stays, setStays] = useState(HomesArray);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="buypage-container">
      <ListNavBar data="sticky" />
      {stays
        .filter((item) => item.id === intId)
        .map((item) => {
          return (
            <div className="buy-section-container">
              <div className="buy-section1-left">
                <div className="buy-title" key={item.id}>
                  {item.stay_name}
                </div>
                <div className="buy-place">{item.title}</div>
                <div className="buy-img-container">
                  <img className="buy-img" src={item.image1} alt="" />
                </div>
                <div className="buy-description">
                  <label htmlFor="">Description</label>
                  <p className="buydes-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem fugit molestias exercitationem cupiditate
                    similique itaque sint, quisquam illum, error distinctio hic
                    consequatur qui nam laboriosam non eaque quam. Dolore modi
                    illo laboriosam voluptatum suscipit debitis quos vero vitae
                    qui minus ad quo reiciendis deleniti iure, possimus
                    voluptatibus illum facilis explicabo. Distinctio expedita
                    voluptatum culpa dolor, quibusdam dicta, doloremque
                    provident veritatis repudiandae accusamus beatae odio, modi
                    dolores voluptate. Deleniti, culpa similique?
                  </p>
                </div>
                <div className="buy-items-container">
                  <label htmlFor="">What this place offers</label>
                  <div>
                    {stays
                      .filter((item) => item.id === intId)
                      .map((item) => {
                        return (
                          <div className="buy-items">
                            {item.specs.map((item) => {
                              return <div>{item}</div>;
                            })}
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="buy-specs-container">
                  <div className="buy-spec">
                    <div className="buy-spec-img">
                      <img className="bed" src={guest} alt="" />
                      <div className="spec">Guests allowed: </div>
                    </div>
                    <div className="buy-num">{item.guests_allowed}</div>
                  </div>
                  <div className="buy-spec">
                    <div className="buy-spec-img">
                      <img className="bed" src={bed} alt="" />
                      <div className="spec">Bedrooms: </div>
                    </div>
                    <div className="buy-num">{item.bedrooms}</div>
                  </div>

                  <div className="buy-spec">
                    <div className="buy-spec-img">
                      <img className="bed" src={bathroom} alt="" />
                      <div className="spec">Bathrooms: </div>
                    </div>
                    <div className="buy-num">{item.bathroom}</div>
                  </div>
                </div>
              </div>
              <div className="buy-section1-right">
                <div className="reserve-container">
                  <div className="reserve-price">{item.price}</div>
                  <div className="check-container">
                    <input
                      className="checkin"
                      type="text"
                      placeholder="check-in date"
                    />
                    <input
                      className="checkout"
                      type="text"
                      placeholder="check-out date"
                    />
                  </div>
                  <div className="reserve-guest">
                    <label htmlFor="">Number of Guests:</label>
                    <select className="guest-dd">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                  </div>
                  <div className="reserve-btn">Reserve</div>
                </div>
              </div>
            </div>
          );
        })}

      <FooterList />
    </div>
  );
}

export default BuyPage;
