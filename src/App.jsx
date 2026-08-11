import React from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
