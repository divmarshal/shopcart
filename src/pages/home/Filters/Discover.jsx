import React from "react";
import FilterSidebar from "./FilterSidebar";
import Filters from "./Filters";
import ProductCard from "../../../components/ProductCard";
import { HomeProductsSection } from "../HomeProductsSection";

const Discover = () => {
  return (
    <section className="w-full max-w-350 mx-auto px-2 py-4 relative overflow-hidden">
      <div className="w-full  rounded-xl flex">
        {/* <FilterSidebar /> */}
        {/* <Filters /> */}
        <HomeProductsSection />
      </div>
    </section>
  );
};

export default Discover;
