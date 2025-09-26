import React from "react";
import "../App.css";

import shin from "../images/shin.jpg";
import clod from "../images/clod.jpg";
import neck from "../images/neck.jpg";
import chuck from "../images/chuck roast.jpg";
import shortrib from "../images/boneless short rib.jpg";
import porterhouse from "../images/porterhouse.jpg";
import strip from "../images/strip.webp";
import tbone from "../images/tbone.jpg";
import tenderloin from "../images/tenderloin.jpg";

const sectionData = {
    1:  { name: "Middle Rib", items: [{ id: "mrib-1", name: "Tenderloin Steak", price: 18.00, img: tenderloin},{ id: "mrib-2", name: "Porterhouse Steak", price: 11.00, img: porterhouse},{ id: "mrib-3", name: "T-Bone Steak", price: 10.00, img: tbone} ,{ id: "mrib-4", name: "New York Strip", price: 11.50, img: strip} ] },

  4:  { name: "Neck", items: [{ id: "neck-1", name: "Beef Neck Bones", price: 6.99, img: chuck},{ id: "neck-2", name: "Boneless Short Rib", price: 6.99, img: neck},{ id: "neck-3", name: "Chuck Roast", price: 16.99, img: shortrib}  ] },
  2: { name: "Clod", items: [{ id: "clod-1", name: "Beef Clod Roast", price: 8.49, img: clod }] },
  3: { name: "Shin", items: [{ id: "shin-1", name: "Beef Shin", price: 7.99, img: shin }] },
};

export default function Order() {
  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <div className="order-page">
      <h1 className="page-title">Order Your Cuts</h1>

      {Object.values(sectionData).map((section) => (
        <div key={section.name} className="section">
          <h2 className="section-title">{section.name}</h2>
          <div className="card-grid">
            {section.items.map((item) => (
              <div key={item.id} className="card">
                <img src={item.img} alt={item.name} className="card-img" />
                <h3 className="card-name">{item.name}</h3>
                <p className="card-price">${item.price.toFixed(2)} / lb</p>
                <button onClick={() => handleAddToCart(item)} className="card-btn">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
