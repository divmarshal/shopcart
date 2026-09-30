import React from "react";
import FilterSidebar from "./FilterSidebar";

const Discover = () => {
  return (
    <section className="w-full max-w-350 mx-auto px-2 py-4 relative overflow-hidden">
      <div className="w-full px-6 sm:px-6 sm:py-6  rounded-xl flex">
        <FilterSidebar />
      </div>
    </section>
  );
};

export default Discover;
