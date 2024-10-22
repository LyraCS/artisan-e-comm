import React from "react";
import "../index.css";
import SearchBar from "./searchbar";

function Section1() {
  return (
    <header style={{ position: "relative", paddingBottom: "20px" }}>
      <SearchBar />
      <div className="chat-box">
        <button className="chat-button">
          <img src="chat.svg" alt="Chat Us" className="chat-icon" />
          Chat Us
        </button>
      </div>
    </header>
  );
}

export default Section1;
