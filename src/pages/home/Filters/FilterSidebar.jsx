import React, { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft } from "lucide-react";
import CustomerRatingsFilter from "./CustomerRatingsFilter";
import CustomerRatings from "./CustomerRatings";

const FilterSidebar = () => {
  const [minPrice, setMinPrice] = useState("Min");
  const [maxPrice, setMaxPrice] = useState("2600+");
  const [brandOpen, setBrandOpen] = useState(false);
  const [connectivityOpen, setConnectivityOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  return (
    <aside className="w-64 bg-white border border-gray-200 text-sm font-sans text-gray-800 p-4 select-none">
      <h2 className="text-lg font-bold mb-3 tracking-wide">Filters</h2>

      {/* CATEGORIES SECTION */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <span className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Categories
        </span>
        <ul className="space-y-1.5 text-xs text-gray-600">
          <li>
            <a href="#" className="flex items-center hover:text-blue-600">
              <ChevronLeft className="w-3.5 h-3.5 mr-1" /> Audio & Video
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center hover:text-blue-600 pl-2">
              <ChevronLeft className="w-3.5 h-3.5 mr-1" /> Headset
            </a>
          </li>
          <li className="pl-4 font-bold text-gray-900">
            <span className="flex items-center">
              <ChevronDown className="w-3.5 h-3.5 mr-1" /> Headphones
            </span>
            <ul className="pl-4 mt-1.5 space-y-1 font-normal text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">
                Wireless Headphones
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Wired Headphones
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* BRAND SECTION */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <button
          onClick={() => setBrandOpen(!brandOpen)}
          className="w-full flex justify-between items-center text-xs font-bold text-gray-700 uppercase"
        >
          <span>Brand</span>
          {brandOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>

      {/* F-ASSURED CHECKBOX */}
      <div className="border-b border-gray-200 pb-3 mb-3 flex items-center justify-between">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-blue-600 focus:ring-0 mr-2 h-4 w-4"
          />
          <span className="font-bold italic text-blue-800 text-sm">
            <span className="text-yellow-500">f</span>Assured
          </span>
        </label>
        <span className="text-xs text-gray-400 border border-gray-300 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer">
          ?
        </span>
      </div>

      {/* CONNECTIVITY SECTION */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <button
          onClick={() => setConnectivityOpen(!connectivityOpen)}
          className="w-full flex justify-between items-center text-xs font-bold text-gray-700 uppercase"
        >
          <span>Connectivity</span>
          {connectivityOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>

      {/* COLOR SECTION */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <button
          onClick={() => setColorOpen(!colorOpen)}
          className="w-full flex justify-between items-center text-xs font-bold text-gray-700 uppercase"
        >
          <span>Color</span>
          {colorOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>

      {/* PRICE RANGE SECTION */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <span className="block text-xs font-bold text-gray-700 uppercase mb-3">
          Price
        </span>

        {/* Slider Mockup */}
        <div className="relative mb-4 px-1">
          <div className="h-1 bg-gray-200 rounded-full w-full"></div>
          <div className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full w-full"></div>
          <div className="absolute -top-1.5 left-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow"></div>
          <div className="absolute -top-1.5 right-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow"></div>
        </div>

        {/* Dropdown Inputs */}
        <div className="flex items-center justify-between text-xs text-gray-600 gap-2">
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

        {/* Customer Ratings Filter */}
        {/* <CustomerRatingsFilter /> */}
        <CustomerRatings />
      </div>
    </aside>
  );
};

export default FilterSidebar;
