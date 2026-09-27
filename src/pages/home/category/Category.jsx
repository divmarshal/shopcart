import React from "react";
import {
  BagIcon,
  categories,
  ShoppingBagIcon,
  ShoppingBagIcon_2,
} from "../../../constant";
import HotSellersProductCard from "../HotSellersProductCard";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    // <section className="w-full max-w-350 mx-auto px-2 py-4 relative overflow-hidden">
    //   <div className="w-full px-6 sm:px-6 sm:py-6 bg-linear-to-r from-orange-600 via-orange-500 to-orange-500 rounded-xl">
    //     <div className="flex flex-col lg:flex-row gap-4 items-stretch relative">
    //       {/* Banner Section */}
    //       <div className="flex relative">
    //         <span className="absolute top-4">
    //           <ShoppingBagIcon />
    //         </span>
    //         <h2 className="flex items-center gap-2 text-white text-2xl sm:text-3xl font-extrabold mb-4">
    //           Categories
    //         </h2>
    //       </div>

    //       {/* Product Grid / Slider */}
    //       <div className="flex-1 overflow-x-auto pb-2 scrollbar-none">
    //         <div className="flex gap-3">
    //           <HotSellersProductCard />
    //           <HotSellersProductCard />
    //           <HotSellersProductCard />
    //           <HotSellersProductCard />
    //           <HotSellersProductCard />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    //claude------------------

    // <section className="w-full max-w-350 mx-auto px-2 py-4 relative overflow-hidden">
    //   <div className="w-full px-6 sm:px-6 sm:py-6 bg-linear-to-r from-orange-600 via-orange-500 to-orange-500 rounded-xl flex">
    //     <div className="flex flex-col lg:flex-row gap-4 items-stretch relative">
    //       {/* Banner Section */}
    //       <div className="relative flex flex-col justify-center min-w-[280px] py-4">
    //         {/* Large translucent icon sitting behind the text */}
    //         <ShoppingBagIcon_2 className="absolute -right-4 top-1/2 -translate-y-1/2 w-40 h-40 text-white/20 z-0" />

    //         {/* Text content sits above the icon */}
    //         <div className="relative z-10">
    //           <h2 className="flex items-center gap-2 text-white text-2xl sm:text-3xl font-extrabold mb-4">
    //             Categories
    //           </h2>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    //chatgpt-------------------

    // <section className="mx-auto w-full max-w-[1400px] px-2 py-4">
    //   <div className="relative w-full overflow-hidden rounded-xl bg-linear-to-r from-orange-600 via-orange-500 to-orange-500 px-6 py-8 sm:px-10 sm:py-10 lg:px-10 lg:py-12">
    //     {/* Large background shopping bag */}
    //     <ShoppingBagIcon_2
    //       className="
    //     pointer-events-none
    //     absolute
    //     right-[-20px]
    //     top-1/2
    //     z-0
    //     h-40
    //     w-40
    //     -translate-y-1/2
    //     text-white/20

    //     sm:right-[-10px]
    //     sm:h-48
    //     sm:w-48

    //     md:right-0
    //     md:h-56
    //     md:w-56

    //     lg:right-6
    //     lg:h-64
    //     lg:w-64
    //   "
    //     />

    //     {/* Text content */}
    //     <div className="relative z-10 flex min-h-[300px] flex-col justify-center sm:min-h-[320px] lg:min-h-[340px]">
    //       <h2 className="mb-5 flex items-center gap-2 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
    //         🇮🇳 Hot-sellers in India
    //       </h2>

    //       <div className="space-y-3 text-base font-bold text-white sm:text-lg">
    //         <p className="flex items-center gap-2">
    //           <span>✓</span>
    //           Local trending with better prices
    //         </p>

    //         <p className="flex items-center gap-2">
    //           <span>✓</span>
    //           Up to 20% off
    //         </p>
    //       </div>

    //       <button
    //         type="button"
    //         className="mt-7 w-fit rounded-full bg-white px-6 py-3 font-semibold text-gray-800 transition-transform hover:scale-105"
    //       >
    //         Explore now
    //       </button>
    //     </div>
    //   </div>
    // </section>

    //final-----------------------

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
          {/* <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard /> */}
        </div>
      </div>
    </section>
  );
};

export default Category;
