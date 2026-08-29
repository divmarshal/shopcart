import { X } from "lucide-react";
import React, { useEffect } from "react";
import { NavLink } from "react-router";

const Header = ({ isMenuOpen, onMenuClose }) => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-amazon-text border-b-2 border-amazon-text py-4"
      : "text-white py-4 hover:text-amazon-text";

  return (
    <>
      <div className="bg-amazon-black justify-center hidden md:flex gap-4">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/blog" className={navLinkClass}>
          Blog
        </NavLink>

        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>

        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </div>

      {/* Mobile view */}

      <div
        className={`
    fixed
    inset-y-0
    left-0
    z-50
    w-full
    bg-white
    flex
    flex-col
    py-2
    px-6
    text-2xl
    text-start
    font-bold
    transition-transform
    duration-300
    ease-in-out
    md:hidden
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <button
          className="ml-auto cursor-pointer"
          onClick={onMenuClose}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <NavLink to="/" className="py-2" onClick={onMenuClose}>
          Home
        </NavLink>

        <NavLink to="/blog" className="py-2" onClick={onMenuClose}>
          Blog
        </NavLink>

        <NavLink to="/contact" className="py-2" onClick={onMenuClose}>
          Contact
        </NavLink>

        <NavLink to="/about" className="py-2" onClick={onMenuClose}>
          About
        </NavLink>
      </div>
    </>
  );
};

export default Header;
