import React from "react";
import { BagIcon, ShoppingBagIcon } from "../../../constant";
import HotSellersProductCard from "../HotSellersProductCard";

const Category = () => {
  return (
    <section className="w-full max-w-350 mx-auto px-2 py-4 relative overflow-hidden">
      <div className="w-full px-6 sm:px-6 sm:py-6 bg-linear-to-r from-orange-600 via-orange-500 to-orange-500 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          {/* Banner Section */}
          <h2 className="flex items-center gap-2 text-white text-2xl sm:text-3xl font-extrabold mb-4">
            Categories
          </h2>

          {/* Product Grid / Slider */}
          <div className="flex-1 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex gap-3">
              <HotSellersProductCard />
              <HotSellersProductCard />
              <HotSellersProductCard />
              <HotSellersProductCard />
              <HotSellersProductCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
