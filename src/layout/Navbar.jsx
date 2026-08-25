import React from "react";
// import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";
import logo2 from "../assets/logo2.png";
import placeholderLogo from "../assets/placeholderLogo.png";
import { Link } from "react-router";
import { EllipsisVertical, Heart, ShoppingCart, User } from "lucide-react";

const Navbar = ({ onMenuOpen }) => {
  return (
    <>
      <nav
        className="
    mx-auto max-w-360
    grid
    grid-cols-[auto_1fr]
    items-center
    gap-x-4
    px-4

    md:grid-cols-[auto_1fr_auto]
    md:gap-4

    lg:px-0
  "
      >
        {/* Logo */}
        <div className="py-6">
          <Link to="/">
            <img
              src={placeholderLogo}
              alt="Shopcart"
              className="w-24 md:w-32 h-auto"
            />
          </Link>
        </div>

        {/* Search */}
        <div
          className="
      col-span-2
      row-start-2
      w-full
      pb-4

      md:col-span-1
      md:row-start-1
      md:col-start-2
      md:pb-0
    "
        >
          <SearchBar />
        </div>

        {/* Actions */}
        <div
          className="
      col-start-2
      row-start-1
      flex
      items-center
      justify-end
      gap-4

      md:col-start-3
      md:row-start-1
    "
        >
          <Link to="/account" className="flex items-center gap-2">
            <User />
            <span className="hidden sm:inline">Marshal</span>
          </Link>

          <Link to="/wishlist" aria-label="Wishlist">
            <Heart />
          </Link>

          <Link to="/cart" aria-label="Shopping cart">
            <ShoppingCart />
          </Link>

          <button
            className="inline md:hidden"
            aria-label="More options"
            onClick={onMenuOpen}
          >
            <EllipsisVertical />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
