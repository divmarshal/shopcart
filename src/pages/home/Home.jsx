import React from "react";
import HeroBannerCarousel from "./HeroBannerCarousel";
import Category from "./category/Category";
import HotSellersIndiaSection from "./HotSellersIndiaSection";
import HotSellersProductCard from "./HotSellersProductCard";
import HotSellersBanner from "./HotSellersBanner";
import CategoryCard from "./category/CategoryCard";

const Home = () => {
  return (
    <>
      <HeroBannerCarousel />
      <Category />
      <CategoryCard />
      {/* <HotSellersIndiaSection /> */}
      {/* <HotSellersProductCard /> */}
      {/* <HotSellersBanner /> */}
    </>
  );
};

export default Home;
