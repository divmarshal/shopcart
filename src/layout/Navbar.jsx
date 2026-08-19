import React from "react";
// import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";
import logo2 from "../assets/logo2.png";
import placeholderLogo from "../assets/placeholderLogo.png";
import { Link } from "react-router";
import { Heart, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* <nav className="flex justify-between  max-w-360 mx-auto">
        <div className="py-6">
          <Link to="/">
            <img
              src={placeholderLogo}
              alt="logo"
              className="w-24 md:w-32 h-auto"
            />
          </Link>
        </div>
        <div className="border-2 grow ">
          <SearchBar />
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center space-x-2">
            <span>
              <User />
            </span>
            <span>Marshal</span>
          </div>
          <div className="">
            <Link>
              <Heart />
            </Link>
          </div>
          <div className="">
            <Link>
              <ShoppingCart />
            </Link>
          </div>
        </div>
      </nav> */}

      <nav className="mx-auto max-w-360 grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 lg:px-0">
        <div className="py-6">
          <Link to="/">
            <img
              src={placeholderLogo}
              alt="Shopcart"
              className="w-24 md:w-32 h-auto"
            />
          </Link>
        </div>
        <SearchBar />
        <div className="flex items-center gap-4">
          <Link to="/account" className="flex items-center gap-2">
            <User />
            <span>Marshal</span>
          </Link>
          <Link to="/wishlist" aria-label="Wishlist">
            <Heart />
          </Link>

          <Link to="/cart" aria-label="Shopping cart">
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
