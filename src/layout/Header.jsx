import { X } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <div className="bg-amazon-black justify-center hidden md:flex gap-4">
        {/* <a href="" className="text-white px-4 hover:text-amazon-text">
          <span className="border-b-3 py-2">Home</span>
        </a>
        <a href="" className="text-white px-4 hover:text-amazon-text">
          Blog
        </a>
        <a href="" className="text-white px-4 hover:text-amazon-text">
          Contact
        </a>
        <a href="" className="text-white px-4 hover:text-amazon-text">
          About
        </a> */}

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-amazon-text border-b-2 border-amazon-text py-4"
              : "text-white py-4 hover:text-amazon-text"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amazon-text border-b-2 border-amazon-text py-4"
              : "text-white py-4 hover:text-amazon-text"
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-amazon-text border-b-2 border-amazon-text py-4"
              : "text-white py-4 hover:text-amazon-text"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-amazon-text border-b-2 border-amazon-text py-4"
              : "text-white py-4 hover:text-amazon-text"
          }
        >
          About
        </NavLink>
      </div>

      {/* Mobile view */}

      <div className="md:hidden flex flex-col py-2 px-6 text-2xl text-start font-bold min-h-dvh">
        <button className="justify-end flex cursor-pointer">
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
