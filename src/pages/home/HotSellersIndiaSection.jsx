import React from "react";

const HotSellersIndiaSection = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150", // Replace with exact product image URL
      price: "₹110.56",
      meta: "590+ sold",
      url: "https://www.alibaba.com/",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      price: "₹150.32",
      meta: "MOQ: 50",
      url: "https://www.alibaba.com/",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      price: "₹270.57",
      meta: "500+ sold",
      url: "https://www.alibaba.com/",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      price: "₹21.34",
      meta: "850+ sold",
      url: "https://www.alibaba.com/",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      price: "₹1,529.30",
      meta: "810+ sold",
      url: "https://www.alibaba.com/",
    },
  ];

  return (
    <section className="bg-orange-500 rounded-xl p-6 text-white font-sans max-w-full overflow-hidden mt-5">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        {/* Banner Section */}
        <div className="shrink-0 w-full lg:w-1/4 flex flex-col justify-between pr-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🇮🇳</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Hot-sellers in India
              </h2>
            </div>

            <ul className="space-y-1 text-sm font-medium mt-4">
              <li className="flex items-center gap-1.5">
                <span className="bg-white text-orange-500 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                Local trending with better prices
              </li>
              <li className="flex items-center gap-1.5">
                <span className="bg-white text-orange-500 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                Up to 20% off
              </li>
            </ul>
          </div>

          <a
            href="https://www.alibaba.com/"
            className="inline-block mt-6 px-5 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:bg-gray-100 text-center w-fit transition-colors"
          >
            Explore now
          </a>
        </div>

        {/* Product Grid / Slider */}
        <div className="flex-1 overflow-x-auto pb-2">
          <div className="flex gap-3">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.url}
                className="shrink-0 w-38 bg-white text-black rounded-lg p-2 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-full h-32 mb-2 flex items-center justify-center overflow-hidden rounded-md bg-gray-50">
                  <img
                    src={product.image}
                    alt="Product item"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-base text-gray-900">
                    {product.price}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{product.meta}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotSellersIndiaSection;
