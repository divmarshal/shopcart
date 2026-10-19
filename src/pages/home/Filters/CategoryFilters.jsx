import React, { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { Link } from "react-router";

export default function CategoryFilters() {
  return (
    <div className="bg-white border-b border-gray-200 select-none font-sans pb-4">
      <h1 className="text-xs font-bold text-gray-800">CATEGORIES</h1>
      <div className="flex items-center mt-2">
        <span className="mr-1 text-gray-400">
          <ChevronLeft size={20} />
        </span>
        <span className="inline-block overflow-hidden text-ellipsis align-top whitespace-nowrap text-sm font-normal leading-[1.4] text-text-gray">
          Clothes
        </span>
      </div>
      <div className="flex items-center mt-2 gap-1">
        <span className="">
          <ChevronDown size={20} />
        </span>
        <span className="inline-block overflow-hidden text-ellipsis align-top whitespace-nowrap text-sm font-medium leading-[1.4]">
          Men
        </span>
      </div>
      <div className="overflow-x-hidden py-1.25 pr-4 pl-7.5 text-ellipsis whitespace-nowrap text-sm font-normal">
        <span>T-shirts</span>
      </div>
    </div>
  );
}
