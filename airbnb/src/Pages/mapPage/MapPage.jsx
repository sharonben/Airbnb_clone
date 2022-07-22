import React from "react";
import FooterList from "../../components/footerList/FooterList";
import ListNavBar from "../homeListingPage/component/listNavBar/ListNavBar";
import { useEffect } from "react";

function MapPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div>
      <div>
        <ListNavBar />
      </div>
      <div className="map-container">
        <iframe
          title="map"
          style={{ height: "650px", width: "100%" }}
          className="map-frame"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=781&amp;height=552&amp;hl=en&amp;q=trivandrum%20Trivandrum+(India)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div>
        <FooterList />
      </div>
    </div>
  );
}

export default MapPage;
