import React from "react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMailOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="logo logo-box">
          <Link className="logo-link" to="/">
            Sports Zone
          </Link>
          <p>&copy; Sports house inventory 2022. All right reserved.</p>
        </div>
        <div className="address-box">
          <span>
            <IoCallOutline className="icon" /> Main Office: +884747474
          </span>
          <span>
            <IoCallOutline className="icon" /> Inventory Office: +88747475
          </span>
          <span>
            <IoLocationOutline className="icon" />
            21 Rb, Chicago, USA
          </span>
          <span>
            <IoMailOutline className="icon" />
            www.sportszone@sz.com
          </span>
        </div>
        <div className="social-media-box">
          <span>
            <IoLogoInstagram />
          </span>
          <span>
            <IoLogoFacebook />
          </span>
          <span>
            <IoLogoTwitter />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
