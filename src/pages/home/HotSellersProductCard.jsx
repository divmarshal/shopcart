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
          src="https://rukminim1.flixcart.com/image/1600/2140/xif0q/t-shirt/c/p/i/m-cjc24-polo-fs-beig-blk-brklyn-41-jump-cuts-original-imahgygss2ungmyg.jpeg?q=60"
          alt="Product thumbnail"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Product Details */}
      <div className="mt-2 px-1 flex flex-col justify-end">
        <span className="text-lg font-bold text-gray-900 leading-tight">
          Men
        </span>
      </div>
    </a>
  );
};

export default HotSellersProductCard;
