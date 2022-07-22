import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ data }) {
  return (
    <div className={data ? "active" : "search-wrapper"}>
      <div className={data ? "active-placeholder" : "place-holder"}>
        Start your search
      </div>
      <div className={data ? "first" : "search-items-one"}>
        <h6>Location</h6>
        <p>Where are you going?</p>
      </div>
      <div className={data ? "second" : "search2-container"}>
        <div className={data ? "second" : "search-items2"}>
          <h6>Check in</h6>
          <p>Add dates</p>
        </div>
      </div>
      <div className={data ? "third" : "search2-container"}>
        <div className={data ? " third" : "search-items3"}>
          <h6>Check out</h6>
          <p>Add dates</p>
        </div>
      </div>
      <div className={data ? "active-search-con" : "guest-search-container"}>
        <div className={data ? "search-active" : "search-items4"}>
          <h6>Guests</h6>
          <p>Add guests</p>
        </div>

        <div className={data ? "active-icon" : "search-icon-div"}>
          <SearchIcon className={data ? "icon-size" : "search-icon"} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
