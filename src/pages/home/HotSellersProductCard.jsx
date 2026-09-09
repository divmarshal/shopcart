import React from "react";

const HotSellersProductCard = () => {
  return (
    <a
      href="https://www.alibaba.com/"
      className="flex flex-col justify-between w-[150px] h-[210px] bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow group shrink-0"
    >
      {/* Product Image Container */}
      <div className="w-full h-[130px] rounded-lg bg-gray-50 overflow-hidden flex items-center justify-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Product thumbnail"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Product Details */}
      <div className="mt-2 px-1 flex flex-col justify-end">
        <span className="text-lg font-bold text-gray-900 leading-tight">
          ₹110.56
        </span>
        <span className="text-xs text-gray-500 font-normal mt-0.5">
          590+ sold
        </span>
      </div>
    </a>
  );
};

export default HotSellersProductCard;
