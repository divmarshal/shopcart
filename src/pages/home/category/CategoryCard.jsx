import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ title, image }) => {
  return (
    <Link
      to={`/categories/${title}`}
      className="flex flex-col justify-between w-37.5 h-52.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group shrink-0  relative"
    >
      {/* Product Image Container */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 rounded-xl"
      />
      <span className="absolute top-5 left-1/2 -translate-x-1/2 text-center text-lg font-bold leading-tight text-white whitespace-nowrap">
        {title}
      </span>
    </Link>
  );
};

export default CategoryCard;
