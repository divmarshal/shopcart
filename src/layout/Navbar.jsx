import React from "react";
// import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.png";
import placeholderLogo from "../assets/placeholderLogo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="flex max-w-360 mx-auto">
        <div className="py-6">
          <Link to="/">
            <img
              src={placeholderLogo}
              alt="logo"
              className="w-24 md:w-32 h-auto"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
