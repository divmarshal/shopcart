import React from "react";
import FilterSidebar from "./FilterSidebar";
import Filters from "./Filters";

const Discover = () => {
  return (
    <section className="w-full max-w-350 mx-auto px-2 py-4 relative overflow-hidden">
      <div className="w-full  rounded-xl flex bg-red-200">
        {/* <FilterSidebar /> */}
        <Filters />
      </div>
    </section>
  );
};

export default Discover;
