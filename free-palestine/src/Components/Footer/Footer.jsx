import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="logo-column">
          <img src={logo} alt="Company Logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem iure tempore perferendis veniam unde modi,
            reprehenderit voluptas ducimus iste repudiandae cupiditate
            dignissimos! Asperiores reiciendis laudantium sit, deleniti velit
            suscipit deserunt.
          </p>
        </div>
        <div className="links-column">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="links-column">
          <h3>More Links</h3>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="address-column">
          <h3>Address</h3>
          <p>
            123 Main St
            <br />
            Anytown, USA
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
