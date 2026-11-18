import React from "react";

import ProductCard from "../../components/ProductCard";

// export default function HomeProductsSection() {
//   const products = [
//     {
//       id: 1,
//       image: "https://via.placeholder.com/300x400",
//       rating: "4",
//       brand: "BROCON",
//       title: "Men Regular Fit Solid Spread Collar Casual Shirt",
//       discount: 83,
//       originalPrice: 1499,
//       price: 253,
//       isHotDeal: true,
//       deliveryDate: "24 Nov",
//     },
//     {
//       id: 2,
//       image: "https://via.placeholder.com/300x400",
//       rating: "3.7",
//       brand: "WE KAIKA",
//       title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
//       discount: 76,
//       originalPrice: 1299,
//       price: 317,
//       isHotDeal: false,
//       deliveryDate: null,
//     },
//     {
//       id: 3,
//       image: "https://via.placeholder.com/300x400",
//       rating: null,
//       brand: "penil creation",
//       title: "Men Regular Fit Solid Spread Collar Casual Shirt",
//       discount: 65,
//       originalPrice: 999,
//       price: 348,
//       isHotDeal: false,
//       deliveryDate: null,
//     },
//     {
//       id: 4,
//       image: "https://via.placeholder.com/300x400",
//       rating: "3.9",
//       brand: "RAFSON",
//       title: "Men Regular Fit Solid Spread Collar Formal Shirt",
//       discount: 79,
//       originalPrice: 1599,
//       price: 333,
//       isHotDeal: false,
//       deliveryDate: "24 Nov",
//     },
//   ];

//   return (
//     <section className="p-4">
//       <h2 className="mb-4 text-lg font-bold text-gray-900">Similar Products</h2>
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </section>
//   );
// }

export const HomeProductsSection = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x400",
      rating: "4",
      brand: "BROCON",
      title: "Men Regular Fit Solid Spread Collar Casual Shirt",
      discount: 83,
      originalPrice: 1499,
      price: 253,
      isHotDeal: true,
      deliveryDate: "24 Nov",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x400",
      rating: "3.7",
      brand: "WE KAIKA",
      title: "Men Slim Fit Checkered Spread Collar Casual Shirt",
      discount: 76,
      originalPrice: 1299,
      price: 317,
      isHotDeal: false,
      deliveryDate: null,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x400",
      rating: null,
      brand: "penil creation",
      title: "Men Regular Fit Solid Spread Collar Casual Shirt",
      discount: 65,
      originalPrice: 999,
      price: 348,
      isHotDeal: false,
      deliveryDate: null,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x400",
      rating: "3.9",
      brand: "RAFSON",
      title: "Men Regular Fit Solid Spread Collar Formal Shirt",
      discount: 79,
      originalPrice: 1599,
      price: 333,
      isHotDeal: false,
      deliveryDate: "24 Nov",
    },
  ];

  return (
    <section className="p-4">
      <h2 className="mb-4 text-lg font-bold text-gray-900">Similar Products</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
