import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGooglePlay,
  FaAppStore,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="list1">
            <h3>JioCinema</h3>
            <ul>
              <li>For you</li>
              <li>Sport</li>
              <li>Free</li>
              <li>Premium</li>
              <li>IND vs WI Schedule</li>
            </ul>
          </div>
          <div className="list2">
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Content Complaints</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="social-media">
            <h2>Connect with Us</h2>
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
          <div className="download">
            <h2>Download the App</h2>
            <FaGooglePlay className="icon" />
            <FaAppStore className="icon" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright © 2023 Viacom18 Media PVT LTD.All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
