import { X } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Header = () => {
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

      <div className="md:hidden flex flex-col py-2 px-6 text-2xl text-start font-bold min-h-dvh">
        <button className="ml-auto cursor-pointer">
          <X size={32} />
        </button>
        <NavLink to="/" className="py-2">
          Home
        </NavLink>
        <NavLink to="/blog" className="py-2">
          Blog
        </NavLink>
        <NavLink to="/contact" className="py-2">
          Contact
        </NavLink>
        <NavLink to="/about" className="py-2">
          About
        </NavLink>
      </div>
    </>
  );
};

export default Header;
