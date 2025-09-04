import React from "react";
import shin from "../images/shin.jpg";


const sectionData = {
  1: { name: "Shin", items: [{ id: "shin-1", name: "Beef Shin", price: 7.99, img: {shin} }, { id: "shin-2", name: "Beef Shank", price: 7.99, img: "/images/shin.jpg" }] },
  2: { name: "Clod", items: [{ id: "clod-1", name: "Beef Clod Roast", price: 8.49, img: "/images/clod.jpg" }] },
  3: { name: "Neck", items: [{ id: "neck-1", name: "Beef Neck Bones", price: 6.99, img: "/images/neck.jpg" }] },
  // 👉 keep filling out with your actual product images and prices
};

export default function Order() {
  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
    // later we can connect this to a real cart system
  };

  return (
    <div className="order-page p-6">
      <h1 className="text-3xl font-bold mb-6">Order Your Cuts</h1>

      {Object.values(sectionData).map((section) => (
        <div key={section.name} className="mb-12">
          {/* Section Header */}
          <h2 className="text-2xl font-semibold mb-4">{section.name}</h2>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow p-4 flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-xl mb-4 object-cover h-40 w-full"
                />
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600 mb-2">${item.price.toFixed(2)} / lb</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
                >
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
