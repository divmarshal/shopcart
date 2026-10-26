import { Search } from "lucide-react";
import React from "react";

const BrandFilters = () => {
  return (
    <div className="bg-white border-b border-gray-200 select-none font-sans pb-4">
      <h1 className="text-xs font-bold text-gray-800 p-4 pl-0">BRANDS</h1>
      <div className="flex items-center gap-2 -mt-2 border-b-2 border-transparent focus-within:border-blue-500">
        <span className="text-text-gray">
          <Search size={12} />
        </span>
        <input
          type="search"
          name="brandSearch"
          placeholder="Search Brand"
          aria-label="Search brands"
          className="w-full  py-1 pr-8 text-sm outline-none "
        />
      </div>
    </div>
  );
};

export default BrandFilters;
