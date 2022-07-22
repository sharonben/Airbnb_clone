import React from "react";
import "./FooterList.css";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterList() {
  return (
    <div className="footer-contain">
      <div className="footer-container">
        <div className="footer-box">
          <div className="list-heads">Support</div>
          <ul className="ul-one">
            <li>Help Centre</li>
            <li>Safety information</li>
            <li>Cancellation options</li>
            <li>Our COVID-19 Response</li>
            <li>Supporting people with disabilities</li>
            <li>Report a neighbourhood concern</li>
          </ul>
        </div>

        <div className="footer-box">
          <div className="list-heads">Community</div>
          <ul className="ul-one">
            <li>Airbnb.org: disaster relief housing</li>
            <li>Support Afghan refugees</li>
            <li>Combating discrimination</li>
          </ul>
        </div>

        <div className="footer-box">
          <div className="list-heads">Hosting</div>
          <ul className="ul-one">
            <li>Try hosting</li>
            <li>AirCover: protection for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
          </ul>
        </div>

        <div className="footer-box">
          <div className="list-heads">About</div>
          <ul className="ul-one">
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb Luxe</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="left-section">
          <ul className="left-in">
            <li>© 2022 Airbnb, Inc.</li>
            <li>&middot; Privacy</li>
            <li>&middot; Terms</li>
            <li>&middot; Sitemap</li>
            <li>&middot; Company Details</li>
          </ul>
        </div>

        <div className="right-section">
          <ul className="right-in">
            <li>
              <LanguageIcon />
            </li>
            <li>English</li>
            <li>₹ INR</li>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterList;
