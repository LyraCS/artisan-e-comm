import React from "react";
import "../styles/section2.css";

const Section2 = () => {
  // Sample data for your catalog items
  const catalogItems = [
    { id: 1, src: "../src/1.jpg", alt: "Item 1" },
    { id: 2, src: "../src/dua.jpg", alt: "Item 2" },
    { id: 3, src: "../src/3.jpg", alt: "Item 3" },
  ];

  return (
    <section className="section2">
      <div className="catalog-grid">
        {catalogItems.map((item) => (
          <div key={item.id} className="catalog-item">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
