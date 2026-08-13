import React from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
