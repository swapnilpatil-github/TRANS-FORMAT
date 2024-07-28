import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/home" className="font-bold text-black text-lg">
              TRANS-FORMAT
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 relative">
              <Link
                to="/home"
                className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contactus"
                className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300 focus:outline-none"
                >
                  Converters
                  <span className="ml-1">{showDropdown ? "▲" : "▼"}</span>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-lg z-10">
                    <Link
                      to="/audio"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Audio Converter
                    </Link>
                    <Link
                      to="/video"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Video Converter
                    </Link>
                    <Link
                      to="/image"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      Image Converter
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/login"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300"
            >
              Login
            </Link>
            
           
          </div>
        </div>
      </div>
      <div className="border-b border-black"></div> 
    </div>
  );
}

export default Navbar;
