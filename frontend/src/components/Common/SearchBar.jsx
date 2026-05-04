import React, { useEffect, useRef, useState } from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProductsByFilters,
  setFilters,
} from "../../redux/slices/productSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Autofocus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // prevent page refresh
    dispatch(setFilters({ search: searchTerm }));
    dispatch(fetchProductsByFilters({ search: searchTerm }));
    navigate(`/collections/all?search=${searchTerm}`);
    console.log("Search Term:", searchTerm);
    // Optional: close the input after search
    // setIsOpen(false);
  };

  return (
    <div className="flex items-center space-x-2 transition-all duration-300 relative">
      {/* Search Icon Trigger (Hidden when open) */}
      {!isOpen && (
        <button
          onClick={handleSearchToggle}
          className="text-gray-700 hover:text-black"
        >
          <HiMagnifyingGlass className="h-6 w-6 ml-4" />
        </button>
      )}

      {/* Slide-in Input with Close and Submit Icons */}
      <form
        onSubmit={handleSearch}
        className={`relative flex items-center transition-all duration-300 overflow-hidden ${
          isOpen ? "w-64 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <input
          type="text"
          ref={inputRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="bg-gray-100 px-4 py-2 pr-20 pl-3 rounded-lg focus:outline-none w-full text-sm placeholder:text-gray-600"
        />

        {/* Close Icon */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <HiXMark className="h-5 w-5" />
        </button>

        {/* Search Icon (Submit) */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
        >
          <HiMagnifyingGlass className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
