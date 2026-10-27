import { Search } from "lucide-react";
import React from "react";

const BrandFilters = () => {
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "Under Armour",
    "New Balance",
    "Asics",
    "Converse",
    "Vans",
    "Fila",
  ];

  return (
    <div className="bg-white border-b border-gray-200 select-none font-sans pb-4">
      <h1 className="text-xs font-bold text-gray-800 p-4 pl-0">BRANDS</h1>

      {/* Search input */}
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

      {/* Brand options */}
      <div className="">
        <form action="" className="w-full">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2 py-2">
              <input
                type="checkbox"
                id={brand}
                name="brands"
                value={brand}
                className="text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor={brand} className="text-sm text-gray-700">
                {brand}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default BrandFilters;
