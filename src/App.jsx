import React, { useState } from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import HeroCarousel from "./pages/home/HeroCarousel";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Header
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
      <HeroCarousel />
      <Outlet />
    </div>
  );
};

export default App;
