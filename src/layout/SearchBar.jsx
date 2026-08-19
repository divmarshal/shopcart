import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <>
      {/* <form action="" className="border-2 border-red-500 w-[60%] mx-auto">
        <input type="text" placeholder="Search..." />
      </form> */}

      {/* <form action="" className="mx-auto w-full max-w-2xl flex">
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-md border-2 px-4 py-2 outline-none"
        />
        <button className="">
          <Search />
        </button>
      </form> */}

      <form
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
      </form>
    </>
  );
};

export default SearchBar;
