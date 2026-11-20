import React, { useState } from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import Product from "./pages/products";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* <Header
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
      <Outlet />
      */}
      <Product />
    </div>
  );
};

export default App;
