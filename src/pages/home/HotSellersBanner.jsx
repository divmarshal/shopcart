import React from "react";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=300&fit=crop",
    price: "₹110.56",
    meta: "590+ sold",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop",
    price: "₹150.32",
    meta: "MOQ: 50",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop",
    price: "₹8.73",
    meta: "100+ sold",
  },
  {
    image:
      "https://images.unsplash.com/photo-1620705292148-0f1b2b6a7c1c?w=300&h=300&fit=crop",
    price: "₹21.34",
    meta: "850+ sold",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=300&h=300&fit=crop",
    price: "₹270.57",
    meta: "500+ sold",
  },
];

export default function HotSellersBanner() {
  return (
    <div className="w-full bg-linear-to-r from-orange-600 via-orange-500 to-orange-500 rounded-xl p-6 relative overflow-hidden">
      <div className="flex items-stretch gap-4">
        {/* Left promo panel */}
        <div className="relative flex flex-col justify-center min-w-75 pl-4 pr-8 py-4 overflow-hidden">
          {/* Watermark bag icon */}
          <svg
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-56 h-56 text-white/15"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 2L4 6v14a2 2 0 002 2h12a2 2 0 002-2V6l-2-4H6zm2 8a4 4 0 008 0" />
          </svg>

          <div className="relative z-10">
            <h2 className="flex items-center gap-2 text-white text-2xl sm:text-3xl font-extrabold mb-4">
              <span role="img" aria-label="India flag" className="text-2xl">
                🇮🇳
              </span>
              Hot-sellers in India
            </h2>

            <ul className="space-y-2 mb-5">
              <li className="flex items-center gap-2 text-white font-semibold text-sm">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/90 text-orange-600 text-[10px]">
                  ✓
                </span>
                Local trending with better prices
              </li>
              <li className="flex items-center gap-2 text-white font-semibold text-sm">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/90 text-orange-600 text-[10px]">
                  ✓
                </span>
                Up to 20% off
              </li>
            </ul>

            <button className="bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
              Explore now
            </button>
          </div>
        </div>

        {/* Product cards */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square w-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.meta}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-3 py-2.5">
                <p className="text-gray-900 font-extrabold text-base leading-tight">
                  {product.price}
                </p>
                <p className="text-gray-500 text-xs mt-1">{product.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
