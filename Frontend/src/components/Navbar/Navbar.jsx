// /** DONE */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaEnvelope,
  FaUserCircle,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa"; // Importing icons

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false); // State to toggle navbar in mobile view
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle navbar toggle in mobile view
  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-50 ${
        sticky ? "shadow-md bg-white transition duration-300" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-2 md:px-10 flex items-center justify-between h-auto lg:h-20">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer text-pink-600">
          CrowdCatch
        </div>
        {/* Navbar for smaller screens */}
        <button
          className="lg:hidden text-gray-600 text-2xl"
          onClick={toggleNavbar}
        >
          <FaSearch />
        </button>
        {isNavbarOpen && (
          <div className="w-full lg:hidden mt-2 transition-transform duration-300">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                className="w-full outline-none px-2 py-1 border rounded-l-md border-r-0 rounded-r-none" // Further reduced padding
                placeholder="Search events"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-pink-500 p-1 rounded-r-md">
                <FaSearch className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        )}
        {/* Desktop and wider view */}
        <div className="hidden lg:flex items-center w-full justify-between px-2">
          <div className="w-full lg:w-1/2">
            <div className="relative flex items-center w-full mb-8">
              <input
                type="text"
                className="w-full outline-none px-2 py-1 border rounded-l-md border-r-0 rounded-r-none"
                placeholder="Search events"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-pink-500 p-1 rounded-r-md">
                <FaSearch className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          {/* Right side: Start New Group button, Messages, Notifications, Profile */}
          <div className="flex items-center space-x-2 ml-2 px-2 mb-8">
            {/* Start New Group button */}
            <Link
              to="/start-group" // Navigates to the StartGroup page when clicked
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-300 hover:text-black transition duration-300"
            >
              Start New Group
            </Link>
            {/* Messages icon */}
            <button className="relative">
              <FaEnvelope className="w-5 h-5 text-gray-600" />
            </button>
            {/* Notifications icon */}
            <button className="relative">
              <FaBell className="w-5 h-5 text-gray-600" />
            </button>
            {/* Profile dropdown */}
            <div className="relative">
              <button
                className="flex items-center"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <FaUserCircle className="w-7 h-7 text-gray-600" />
                <FaChevronDown className="ml-1 text-gray-600" />
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <Link
                    to="/your-event"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Your Event
                  </Link>
                  <Link
                    to="/your-group"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Your Group
                  </Link>
                  <Link
                    to="/your-connections"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Your Connections
                  </Link>
                  <div className="border-t my-2"></div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    View Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/help"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Help
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
