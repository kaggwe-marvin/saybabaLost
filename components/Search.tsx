"use client";
import { useState } from "react";
import { ReportItem } from "@/typings";
import { Item } from "./Item";
import { useSearchData } from "@/hooks/useSearchData";

function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredData = useSearchData(searchQuery);

  return (
    <div className="flex justify-end flex-1 px-2">
      <div className="form-control relative">
        <button
          className="btn btn-ghost btn-circle md:hidden lg:hidden"
          onClick={() => setSearchQuery("")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <input
          className={`input input-bordered w-24 md:w-auto ${
            searchQuery ? "block" : "hidden"
          }`}
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        {filteredData.map((item: ReportItem) => (
          <Item key={item?.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Search;
