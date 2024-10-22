import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faTiktok,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-icon-item">
          <img src="/shipping.svg"></img>
          <p>Free Shipping And Return</p>
        </div>
        <div className="footer-icon-item">
          <img src="/money.svg"></img>
          <p>100% Money Back Guaranteed</p>
        </div>
        <div className="footer-icon-item">
          <img src="/replace.svg"></img>
          <p>Replacement in case of a defect</p>
        </div>
        <div className="footer-icon-item">
          <img src="/safe.svg"></img>
          <p>Safe and Secure Checkout</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>Man</li>
            <li>Woman</li>
            <li>FAQ</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Installation Manual</li>
            <li>Release Note</li>
            <li>Community Help</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="artisan">Artisan</h4>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Press</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <div className="newsletter">
            <input type="email" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTiktok} />
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
