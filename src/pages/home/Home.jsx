import React from "react";
import HeroBannerCarousel from "./HeroBannerCarousel";
import Category from "./category/Category";
import Discover from "./Filters/Discover";

const Home = () => {
  return (
    <>
      <HeroBannerCarousel />
      <Category />
      <Discover />
    </>
  );
};

export default Home;
