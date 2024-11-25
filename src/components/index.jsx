import React from "react";
import "../index.css";
import p1 from "../assets/product1.png";
import a1 from "../assets/aset1.png";
import a2 from "../assets/aset2.png";
import a3 from "../assets/aset3.png";
import a4 from "../assets/aset4.png";
import a5 from "../assets/aset5.png";
import bg from "../assets/bg.png";

const Home = () => {
  return (
    <div>
      <div className="section1">TIMELESS FASHION EVERDAY</div>
      <div className="section2">
        <div className="content">
          <div className="text">
            <h1>Our Latest Collection</h1>
            <p>
              Discover our newest clothing styles, designed with comfort and
              fashion in mind. Each piece is crafted to offer both versatility
              and quality, perfect for any occasion. From casual wear to elegant
              attire, find your next wardrobe staple with us.
            </p>
          </div>
          <div className="carousel">
            <img src={p1} alt="Product Image" />
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="gallery">
          <div className="left-column">
            <img src={a1} alt="Gallery image 1" />
            <div className="bottom-images">
              <img src={a3} alt="Gallery image 2" />
            </div>
          </div>
          <div className="middle-column">
            <img src={a4} alt="Gallery image 4" />
            <img src={a5} alt="Gallery image 5" />
          </div>
          <div className="right-column">
            <img src={a2} alt="Gallery image 6" />
          </div>
        </div>
      </div>
      <button className="button shop-now">Shop Now</button>
    </div>
  );
};

export default Home;
