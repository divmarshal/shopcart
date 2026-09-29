import React from "react";
import { categories, ShoppingBagIcon_2 } from "../../../constant";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="w-full max-w-350 mx-auto px-2 py-4 relative overflow-hidden">
      <div className="w-full px-6 sm:px-6 sm:py-6 bg-linear-to-r from-orange-600 via-orange-500 to-orange-500 rounded-xl flex  flex-col lg:flex-row gap-4 items-stretch relative">
        {/* Banner Section */}
        <div className="relative h-50 flex items-center ">
          <ShoppingBagIcon_2
            className="
        pointer-events-none
        absolute
        right-0
        top-1/2
        z-0
        h-40
        w-40
        -translate-y-1/2
        text-white/20

        sm:right-[-10px]
        sm:h-48
        sm:w-48

        md:left-[50px]
        md:h-56
        md:w-56

        lg:right-6
        lg:h-64
        lg:w-64
      "
          />
          <h2 className="flex items-center gap-2 text-white text-2xl sm:text-3xl font-extrabold mb-4">
            Categories
          </h2>
        </div>
        {/* Product Grid / Slider */}
        <div className="flex gap-5 flex-1 overflow-x-auto pb-2 scrollbar-none lg:justify-end">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
