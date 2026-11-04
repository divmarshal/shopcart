import React from "react";

const PriceFilters = () => {
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
    </div>
  );
};

export default PriceFilters;
