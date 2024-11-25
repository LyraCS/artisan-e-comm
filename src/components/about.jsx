import React from "react";
import "../styles/about.css";
import gemi from "../assets/navia.jpeg";
import adit from "../assets/frieren.jpg";
import bayu from "../assets/bayu.png";
import pajar from "../assets/shocked.jpg";
import maria from "../assets/maria.jpg";
import aufar from "../assets/aufar.jpg";
import newa from "../assets/new-arrival.png";

const AboutUs = () => {
  return (
    <div>
      <div className="head">
        <h1>About Us</h1>
        <p>
          Welcome to Artisan, where fashion meets craftsmanship. We are a
          clothing brand dedicated to bringing you timeless pieces that are
          designed with care, passion, and a commitment to quality. Each garment
          is a work of art, carefully crafted by skilled artisans who have honed
          their craft over years of experience.
        </p>
        <p>
          At Artisan, we believe in the power of storytelling through fashion.
          Our collections blend contemporary trends with traditional techniques,
          ensuring that every piece you wear tells a unique story. From
          luxurious fabrics to intricate stitching, our designs are made to
          elevate your style while celebrating the artistry behind every stitch.
        </p>
        <p>
          Whether you're looking for a statement piece or everyday essentials,
          Artisan is here to inspire you with clothing that embodies elegance,
          durability, and craftsmanship. Join us in embracing the beauty of
          artisanal craftsmanship and discover the true essence of style.
        </p>
      </div>
      <div className="features">
        <div className="feature">
          <i className="fas fa-crosshairs"></i>
          <h3>Superior Accuracy</h3>
          <p>
            Every stitch and seam is crafted with precision to ensure perfect
            fit and lasting quality, because your style deserves nothing less.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-award"></i>
          <h3>Awards</h3>
          <p>
            Recognized for our commitment to design and quality, our collections
            have been celebrated by style icons and fashion experts worldwide.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-leaf"></i>
          <h3>Ecological</h3>
          <p>
            Sustainably crafted with eco-friendly materials, our clothing
            combines style and responsibility, letting you look good and feel
            good.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-shipping-fast"></i>
          <h3>Shipping Worldwide</h3>
          <p>
            No matter where you are, our latest collections are just a click
            away. Enjoy fast, reliable shipping to your doorstep globally.
          </p>
        </div>
      </div>
      <div className="new-arrivals">
        <div className="new-arrivals-text">
          <h2>New Arrivals Every Week</h2>
          <p>
            Step up your style game with our fresh, weekly drops for both men
            and women! From sleek essentials to bold statement pieces, each item
            is crafted with premium quality and cutting-edge design. Stay ahead
            of the trends and elevate your wardrobe with our exclusive,
            limited-edition looks dropping every week. Don't miss out – discover
            your new favorite styles now!
          </p>
          <button>See All Models</button>
        </div>
        <div className="new-arrivals-image">
          <img src={newa} alt="New Arrival" />
        </div>
      </div>
      <div className="team">
        <h2>Our Incredible Team</h2>
        <div className="team-members">
          {[
            {
              name: "Aditya Ananta Widya",
              title: "UI/UX Designer #1, Project Manager",
              image: adit,
            },
            {
              name: "Reza Bayu Putra Manik",
              title: "Back-end Developer",
              image: bayu,
            },
            {
              name: "Gemilang Romadhona Putra",
              title: "Front-end Developer",
              image: gemi,
            },
            {
              name: "Pajar Pake P",
              title: "Presentator",
              image: pajar,
            },
            {
              name: "Maria Angela",
              title: "UI/UX Designer #2, ERD Planner #2",
              image: maria,
            },
            {
              name: "Aufar Aziz Adam",
              title: "ERD Planner #1",
              image: aufar,
            },
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <div className="social-icons">
                <i className="fa fa-envelope"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
