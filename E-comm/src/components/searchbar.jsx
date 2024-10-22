import React, { useState } from "react";
import "../styles/searchbar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div className="search-container">
      <div className="search-icon">
        <img src="/search.svg" alt="Search" className="search-icon-img" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
