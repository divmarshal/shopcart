import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleClear = () => {
    setQuery("");
  };
  return (
    <>
      {/* <form
        action=""
        className="mx-auto flex w-full max-w-2xl items-center rounded-full border border-gray-300 bg-white px-4 py-1 shadow-sm transition-shadow focus-within:shadow-md"
      >
        <input
          type="search"
          placeholder="Search..."
          className="min-w-0 flex-1 bg-transparent px-2 py-2 outline-none"
        />

        <button
          type="submit"
          aria-label="Search"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          <Search size={20} />
        </button>
      </form> */}

      {/* gemini */}

      <div className="w-full max-w-2xl mx-auto p-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex items-center w-full h-12 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow px-4">
            {/* Input Field */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-gray-800 text-base outline-none bg-transparent pr-2 pl-2"
              placeholder="Search anything..."
            />

            {/* Action Icons Container */}
            <div className="flex items-center space-x-3 text-gray-500">
              {/* Clear (X) Icon */}
              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1 hover:text-gray-700 focus:outline-none"
                  aria-label="Clear search"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}

              {/* Vertical Divider */}
              {query && <div className="h-6 w-px bg-gray-300" />}

              {/* Search Glass Icon */}
              <button
                type="submit"
                className="p-1 text-blue-600 hover:text-blue-700 focus:outline-none"
                aria-label="Submit search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
