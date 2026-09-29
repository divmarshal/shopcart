export const bannerData = [
  {
    id: 1,
    title: "MEN'S SLIDES",
    subtitle: "Under ₹149",
    bgColor: "bg-[#fbeedb]",
    textColor: "text-[#4a2e1b]",
    badgeColor: "bg-[#4a2e1b] text-white",
    image: "https://via.placeholder.com/600x400?text=Men%27s+Slides",
    alt: "Men's Slides",
  },
  {
    id: 2,
    title: "vivo T3 Ultra 5G",
    subtitle: "Launch 12th Sep, 12 PM",
    description: "Segment's Slimmest 5500 mAh Phone*",
    bgColor: "bg-[#1a1f2c]",
    textColor: "text-white",
    badgeColor: "bg-blue-600 text-white",
    image: "https://via.placeholder.com/600x400?text=Smartphone",
    alt: "vivo T3 Ultra 5G",
  },
  {
    id: 3,
    title: "TOP APPLIANCES",
    subtitle: "Up to 75% Off",
    description: "Washing Machines, TVs & More",
    bgColor: "bg-[#0f172a]",
    textColor: "text-white",
    badgeColor: "bg-yellow-500 text-black",
    image: "https://via.placeholder.com/600x400?text=Appliances",
    alt: "Top Appliances",
  },
];

export const categories = [
  {
    id: 1,
    title: "Men",
    image:
      "https://rukminim1.flixcart.com/image/1600/2140/xif0q/t-shirt/c/p/i/m-cjc24-polo-fs-beig-blk-brklyn-41-jump-cuts-original-imahgygss2ungmyg.jpeg?q=60",
  },
  {
    id: 2,
    title: "Women",
    image:
      "https://rukminim1.flixcart.com/image/1600/2140/xif0q/top/w/c/4/m-1-v-neck-black-top-s-anamwear-resized-original-imahmajgwwm9xzas.jpeg?q=60",
  },
  {
    id: 3,
    title: "Foot Wears",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-shoe/0/9/t/6-1416-6-jumpink-black-original-imaheznafr8g3kwq.jpeg?q=70",
  },
  {
    id: 4,
    title: "Bags",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/0/7/k/db-print-02-4-5-db-print-02-tote-dressberry-15-original-imahpbjvb6fjnpkg.jpeg?q=70",
  },
  {
    id: 5,
    title: "Watches",
    image:
      "https://rukminim2.flixcart.com/image/1600/2140/xif0q/watch/r/e/d/-original-imahzxh88aymeysq.jpeg?q=60",
  },
];

export const ShoppingBagIcon_2 = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bag body */}
    <path
      d="M40 70
         C40 65, 44 60, 50 60
         L150 60
         C156 60, 160 65, 160 70
         L172 175
         C173 182, 168 188, 161 188
         L39 188
         C32 188, 27 182, 28 175
         L40 70 Z"
      fill="currentColor"
    />
    {/* Handle loop */}
    <path
      d="M65 75
         L65 45
         C65 25, 80 10, 100 10
         C120 10, 135 25, 135 45
         L135 75"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
