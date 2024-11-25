import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo" onClick={() => handleRedirect("/")}>
          Artisan
        </div>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-links">
          <a onClick={() => handleRedirect("/man")}>Man</a>
          <a onClick={() => handleRedirect("/woman")}>Woman</a>
          <a onClick={() => handleRedirect("/contact")}>Contact Us</a>
          <a onClick={() => handleRedirect("/profile")}>
            <i className="fas fa-user"></i>
          </a>
          <a onClick={() => handleRedirect("/cart")}>
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </header>
      <nav className="nav-bar">
        <a onClick={() => handleRedirect("/")}>Home</a>
        <a onClick={() => handleRedirect("/shop")}>
          Shop <i className="fas fa-caret-down"></i>
        </a>
        <a onClick={() => handleRedirect("/products")}>
          Products <i className="fas fa-caret-down"></i>
        </a>
        <a onClick={() => handleRedirect("/about")}>About Us</a>
        <a onClick={() => handleRedirect("/contact")}>Contact Us</a>
      </nav>
    </div>
  );
}

export default Navbar;
