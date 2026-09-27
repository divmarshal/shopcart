import Men from "./assets/categoryImg/Men.webp";

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

export const ShoppingBagIcon = ({ size = 120, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bag Body */}
    <path
      d="M15 32 C15 28, 18 25, 22 25 L78 25 C82 25, 85 28, 85 32 L88 82 C88 88, 83 93, 77 93 L23 93 C17 93, 12 88, 12 82 Z"
      fill="#FF3E00"
    />

    {/* Front Fold / Curve Highlights */}
    <path
      d="M20 32 Q50 48 80 32"
      fill="none"
      stroke="#FF6B35"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Handle / Straps */}
    <path
      d="M34 28 V18 C34 10, 66 10, 66 18 V28"
      fill="none"
      stroke="#FFD1B3"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export const BagIcon = ({ size = 120, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

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

// export const HotSellersBagIcon = () => (
//   <svg
//     width="168"
//     height="176"
//     viewBox="0 0 168 176"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     style={{
//       position: "absolute",
//       right: "0px",
//       bottom: "0px",
//       pointerEvents: "none",
//     }}
//   >
//     {/* Outer handle glow layer */}
//     <path
//       d="M50 82 C50 32, 118 32, 118 82"
//       fill="none"
//       stroke="#FF7B31"
//       strokeWidth="28"
//       strokeLinecap="round"
//       opacity="0.9"
//     />

//     {/* Inner main handle */}
//     <path
//       d="M56 80 C56 42, 112 42, 112 80"
//       fill="none"
//       stroke="#FFD5C0"
//       strokeWidth="16"
//       strokeLinecap="round"
//     />

//     {/* Front bag body overlay with curved lip */}
//     <path
//       d="M12 92 C12 78, 22 68, 36 68 L132 68 C146 68, 156 78, 156 92 L168 176 L0 176 Z"
//       fill="#FF4C00"
//     />

//     {/* Curved top rim highlighting the bag opening */}
//     <path
//       d="M20 72 Q84 102 148 72"
//       fill="none"
//       stroke="#FFA375"
//       strokeWidth="8"
//       strokeLinecap="round"
//       opacity="0.8"
//     />
//   </svg>
// );
