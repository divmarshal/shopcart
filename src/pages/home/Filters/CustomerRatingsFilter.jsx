import React, { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

const CustomerRatingsFilter = ({
  onChange,
  defaultOpen = true,
  defaultSelected = [],
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const [selected, setSelected] = useState(defaultSelected);
  const listId = useId();

  const toggleRating = (rating) => {
    setSelected((prev) => {
      const next = prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating];
      next.sort((a, b) => b - a);
      onChange?.(next);
      return next;
    });
  };

  return (
    // <div className="w-64 bg-white border-b border-gray-200 py-3 px-4 font-sans text-xs select-none">
    //   {/* Header / Accordion Toggle */}
    //   <button
    //     onClick={() => setIsOpen(!isOpen)}
    //     className="w-full flex items-center justify-between font-bold text-gray-800 uppercase tracking-wide py-1 focus:outline-none"
    //   >
    //     <span>Customer Ratings</span>
    //     {isOpen ? (
    //       <ChevronUp className="w-4 h-4 text-gray-500" />
    //     ) : (
    //       <ChevronDown className="w-4 h-4 text-gray-500" />
    //     )}
    //   </button>

    //   {/* Rating Options */}
    //   {isOpen && (
    //     <div className="mt-3 space-y-2.5">
    //       {ratingOptions.map((rating) => (
    //         <label
    //           key={rating}
    //           className="flex items-center gap-2 cursor-pointer text-gray-800 hover:text-black"
    //         >
    //           <input
    //             type="checkbox"
    //             checked={selectedRatings.includes(rating)}
    //             onChange={() => handleCheckboxChange(rating)}
    //             className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-0 cursor-pointer"
    //           />
    //           <span className="flex items-center gap-1 font-medium text-sm">
    //             {rating}
    //             <Star className="w-3 h-3 fill-current text-gray-700" />
    //             <span className="text-xs font-normal text-gray-700">
    //               & above
    //             </span>
    //           </span>
    //         </label>
    //       ))}
    //     </div>
    //   )}
    // </div>

    // claude----------------

    <div className="w-full max-w-[340px] border-b border-[#f0f0f0] bg-white font-sans text-[#212121]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={listId}
        className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-[13px] font-semibold uppercase tracking-[0.4px]">
          Customer Ratings
        </span>
        <Chevron open={open} />
      </button>

      {open && (
        <ul id={listId} className="m-0 list-none px-5 pb-4">
          {RATING_OPTIONS.map((rating) => {
            const checked = selected.includes(rating);
            return (
              <li key={rating} className="mt-1 first:mt-0">
                <label className="group flex cursor-pointer select-none items-center gap-4 py-2 text-sm">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={checked}
                    onChange={() => toggleRating(rating)}
                  />
                  <span
                    className={`box-border inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[2px] border transition-colors duration-150 group-hover:border-[#2874f0] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2874f0] ${
                      checked
                        ? "border-[#2874f0] bg-[#2874f0]"
                        : "border-[#c2c2c2] bg-white"
                    }`}
                  >
                    {checked && <Tick />}
                  </span>
                  <span className="inline-flex items-baseline">
                    {rating}
                    <span className="ml-px mr-1.5">★</span>
                    &amp; above
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomerRatingsFilter;
