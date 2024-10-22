import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-button">shop now</button>
      </div>

      <a href="#" className="navbar-logo">
        Artisan
      </a>

      <div className="navbar-right">
        <div className="navbar-links">
          <a href="#man">Man</a>
          <a href="#woman">Woman</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="navbar-icons">
          <img src="/account.svg" alt="User Icon" className="Navbar-icon" />
          <img src="/cart.svg" alt="User Icon" className="Navbar-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
