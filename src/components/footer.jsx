import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="combined-footer">
      <div className="top-bar">
        <div>
          <i className="fas fa-shipping-fast"></i>
          <span>Free Shipping And Return</span>
        </div>
        <div>
          <i className="fas fa-dollar-sign"></i>
          <span>100% Money Back Guaranteed</span>
        </div>
        <div>
          <i className="fas fa-sync-alt"></i>
          <span>Replacement in case of a defect</span>
        </div>
        <div>
          <i className="fas fa-shield-alt"></i>
          <span>Safe and Secure Checkout</span>
        </div>
      </div>
      <div className="footer">
        <div className="column">
          <h3>Product</h3>
          <ul>
            <li>Man</li>
            <li>Woman</li>
            <li>FAQ</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="column">
          <h3>Resources</h3>
          <ul>
            <li>Installation Manual</li>
            <li>Release Note</li>
            <li>Community Help</li>
          </ul>
        </div>
        <div className="column">
          <h3>Artisan</h3>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Press</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="column newsletter">
          <h3>Newsletter</h3>
          <input type="email" placeholder="Enter your Email" />
          <button>Subscribe</button>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="copyright">© 2022 All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
