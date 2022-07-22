import React from "react";
import "./Home.css";
import { useState } from "react";
import BoxOne from "./components/boxOne/BoxOne";
import BoxTwo from "./components/boxTwo/BoxTwo";
import DiscoverCard from "./components/discoverCard/DiscoverCard";
import HostCard from "./components/hostCard/HostCard";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/searchBar/SearchBar";
import TripCard from "./components/tripCard/TripCard";
import cardbackground from "./discoverimg1.jpg";
import card2background from "./discoverimg2.jpg";
import FooterList from "./components/footerList/FooterList";

function Home() {
  const [scroll, setScroll] = useState(false);

  document.addEventListener("scroll", function (e) {
    let lastKnownScrollPosition = window.scrollY;
    let position = parseInt(lastKnownScrollPosition);
    if (position >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  return (
    <div className="app-wrapper">
      <header>
        <NavBar className={scroll ? "active-navbar" : "navbar"} />
        <div className={scroll ? "mini-search" : "search"}>
          <SearchBar className="searchbar" data={scroll} />
        </div>
      </header>

      <div className="boxes">
        <BoxOne />
        <div className="box-two">
          <BoxTwo />
        </div>
      </div>

      <div className="zindex-btm-div"></div>

      <div className="trip-container">
        <div className="inspiration-heading">
          Inspiration for your next trip
        </div>
        <div className="cards-container">
          <TripCard />
        </div>
      </div>

      <div className="discover-container">
        <div className="discover-heading">Discover Airbnb Experiences</div>

        <div className="discover-cards">
          <DiscoverCard
            className="discover-crd-component"
            data={cardbackground}
            title="Things to do on your trip"
            lbl="Experiences"
          />
          <DiscoverCard
            className="discover-crd-component"
            data={card2background}
            title="Things to do from home"
            lbl="Online Experiences"
          />
        </div>
      </div>

      <HostCard className="host-card" />

      <footer>
        <FooterList />
      </footer>
    </div>
  );
}

export default Home;
