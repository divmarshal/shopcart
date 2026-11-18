import React from "react";

const ProductCard = ({
  image,
  rating,
  brand,
  title,
  discount,
  originalPrice,
  price,
  isHotDeal = false,
  deliveryDate,
}) => {
  return (
    <div className="group flex flex-col w-full max-w-[240px] bg-white cursor-pointer">
      {/* Image & Rating Badge Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={`${brand} ${title}`}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />

        {rating && (
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-xs font-bold text-gray-900 shadow-sm">
            <span>{rating}</span>
            <span className="text-[#14958f] text-[10px]">★</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-2.5 flex flex-col gap-0.5 px-0.5">
        {/* Brand & Truncated Title */}
        <p className="truncate text-[13px] text-gray-800">
          <span className="font-bold text-gray-900">{brand}</span>{" "}
          <span className="text-gray-600">{title}</span>
        </p>

        {/* Discount Percentage */}
        {discount && (
          <span className="text-[12px] font-bold text-[#14958f]">
            {discount}% OFF
          </span>
        )}

        {/* Pricing Row */}
        <div className="flex items-baseline gap-1.5">
          {originalPrice && (
            <span className="text-[13px] text-gray-400 line-through">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
          )}
          <span className="text-[15px] font-bold text-gray-900">
            ₹{price.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Hot Deal Badge */}
        {isHotDeal && (
          <span className="mt-0.5 w-fit rounded bg-[#e7f8f3] px-1.5 py-0.5 text-[11px] font-bold text-[#14958f]">
            Hot Deal
          </span>
        )}

        {/* Delivery Estimate */}
        {deliveryDate && (
          <p className="mt-0.5 text-[12px] text-gray-600">
            Get it by{" "}
            <span className="font-bold text-gray-900">{deliveryDate}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

// Example Usage matching the "Similar Products" section
