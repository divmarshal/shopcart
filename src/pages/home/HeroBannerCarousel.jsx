import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bannerData } from "../../constant";

export default function HeroBannerCarousel() {
  return (
    <div className="relative w-full max-w-350 mx-auto px-2 py-4 group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="rounded-lg overflow-hidden shadow-sm h-70 sm:h-85 md:h-95"
      >
        {bannerData?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className={`w-full h-full flex items-center justify-between px-8 sm:px-16 ${banner.bgColor} ${banner.textColor}`}
            >
              {/* Left Content */}
              <div className="flex-1 max-w-md z-10 select-none">
                {banner.title && (
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-3">
                    {banner.title}
                  </h2>
                )}
                {banner.subtitle && (
                  <div
                    className={`inline-block text-xl sm:text-3xl md:text-4xl font-extrabold px-4 py-2 rounded-md ${banner.badgeColor}`}
                  >
                    {banner.subtitle}
                  </div>
                )}
                {banner.description && (
                  <p className="mt-3 text-sm sm:text-base opacity-90 font-medium">
                    {banner.description}
                  </p>
                )}
              </div>

              {/* Right Image */}
              <div className="flex-1 h-full flex justify-end items-center py-4">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="max-h-full max-w-full object-contain drop-shadow-md pointer-events-none"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons (Flipkart Style) */}
        <button
          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-gray-800 h-16 w-10 flex items-center justify-center rounded-r-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>

        <button
          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-gray-800 h-16 w-10 flex items-center justify-center rounded-l-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50"
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </Swiper>

      {/* Swiper Custom Dots Styling Overrides */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
