import React, { useState } from "react";

const PriceFilters = () => {
  const [minPrice, setMinPrice] = useState("Min");
  const [maxPrice, setMaxPrice] = useState("2600+");

  return (
    <div className="bg-white border-b border-gray-200 select-none font-sans pb-4">
      <h1 className="text-xs font-bold text-gray-800 p-4 pl-0">PRICE</h1>

      {/* Slider Mockup */}
      <div className="relative mb-4">
        <div className="h-1 bg-gray-200 rounded-full w-full"></div>
        <div className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full w-full"></div>
        <div className="absolute -top-1.5 left-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow"></div>
        <div className="absolute -top-1.5 right-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow"></div>
      </div>

      {/* Dropdown Inputs */}
      <div className="flex items-center justify-between text-sm gap-2 font-sans text-gray-800">
        <select
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full border border-gray-300 rounded p-1 bg-white focus:outline-none focus:border-blue-500"
        >
          <option value="Min">Min</option>
          <option value="600">₹600</option>
          <option value="1000">₹1000</option>
          <option value="1500">₹1500</option>
          <option value="2000">₹2000</option>
          <option value="2600">₹2600</option>
        </select>

        <span className="text-gray-400">to</span>

        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full border border-gray-300 rounded p-1 bg-white focus:outline-none focus:border-blue-500"
        >
          <option value="600">₹600</option>
          <option value="1000">₹1000</option>
          <option value="1500">₹1500</option>
          <option value="2000">₹2000</option>
          <option value="2600">₹2600</option>
          <option value="2600+">₹2600+</option>
        </select>
      </div>
    </div>
  );
};

export default PriceFilters;
