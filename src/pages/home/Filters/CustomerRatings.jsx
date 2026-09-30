import { ChevronUp } from "lucide-react";

const CustomerRatings = () => {
  const ratings = [4, 3, 2, 1];

  return (
    <form className="w-full border-b border-gray-200  bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-0 py-5">
        <h3 className="text-xs font-bold tracking-wide text-gray-900">
          CUSTOMER RATINGS
        </h3>
      </div>

      {/* Rating options */}
      <div className="px-0 pb-6">
        {ratings.map((rating) => (
          <label
            key={rating}
            className="flex cursor-pointer items-center gap-4 py-2"
          >
            <input
              type="checkbox"
              name="rating"
              value={rating}
              className="h-[18px] w-[18px]"
            />

            <span className="text-base text-gray-900">
              {rating}★ &amp; above
            </span>
          </label>
        ))}
      </div>
    </form>
  );
};

export default CustomerRatings;
