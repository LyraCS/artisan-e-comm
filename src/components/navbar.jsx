import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./profilecard";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [showProfileCard, setShowProfileCard] = useState(false);

  const handleRedirect = (path) => {
    navigate(path);
  };

  const toggleProfileCard = (e) => {
    e.stopPropagation(); // Prevent bubbling
    setShowProfileCard((prev) => !prev);
  };

  const handleOutsideClick = () => {
    setShowProfileCard(false);
  };

  // Add event listener to detect clicks outside
  useEffect(() => {
    if (showProfileCard) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showProfileCard]);

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
          <div style={{ position: "relative" }}>
            <a onClick={toggleProfileCard}>
              <i className="fas fa-user"></i>
            </a>
            {showProfileCard && (
              <div
                onClick={(e) => e.stopPropagation()} // Prevent click inside profile card from hiding it
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "0",
                  zIndex: 1000,
                }}
              >
                <ProfileCard />
              </div>
            )}
          </div>
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
