import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
  return (
    <div className="lg:w-6/12 relative mx-auto md:ml-auto mb-3 md:mb-0 text-gray-600">
      <input
        className="w-full border-1 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-4">
        <SearchIcon className="h-5 w-5 text-blue-600" />
      </button>
    </div>
  );
};

export default Search;
