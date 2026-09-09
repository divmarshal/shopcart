import React from "react";
import HeroBannerCarousel from "./HeroBannerCarousel";
import Category from "./category/Category";
import HotSellersIndiaSection from "./HotSellersIndiaSection";
import HotSellersProductCard from "./HotSellersProductCard";
import HotSellersBanner from "./HotSellersBanner";

const Home = () => {
  return (
    <>
      <HeroBannerCarousel />
      <Category />
      <HotSellersIndiaSection />
      {/* <HotSellersProductCard /> */}
      <HotSellersBanner />
    </>
  );
};

export default Home;
