import React from "react";
import CategoryFilters from "./CategoryFilters";

const Filters = () => {
  return (
    <aside className="w-64 bg-white border border-gray-200 text-sm font-sans text-gray-800 p-4 select-none">
      <h2 className="text-lg font-bold mb-3 tracking-wide">Filters</h2>

      {/* CATEGORIES SECTION */}
      {/* <div className="border-b border-gray-200 pb-4 mb-4">
        <span className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Categories
        </span>
      </div> */}

      <CategoryFilters />
    </aside>
  );
};

export default Filters;
