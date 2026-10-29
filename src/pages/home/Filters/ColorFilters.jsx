import React from "react";

const ColorFilters = () => {
  const colors = ["Red", "Blue", "Green", "Yellow", "Black"];

  return (
    <div className="bg-white border-b border-gray-200 select-none font-sans pb-4">
      <h1 className="text-xs font-bold text-gray-800 p-4 pl-0">COLORS</h1>

      {/* Color options */}
      <div className="">
        <form action="" className="w-full">
          {colors?.map((color) => (
            <div key={color} className="flex items-center gap-2 py-2">
              <input
                type="checkbox"
                id={color}
                name="colors"
                value={color}
                className="text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor={color} className="text-sm text-gray-700">
                {color}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default ColorFilters;
