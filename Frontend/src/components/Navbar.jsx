/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const { authUser } = useAuth();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 right-0 z-50 ${sticky ? "shadow-md bg-white transition duration-300" : "bg-white"}`}>

      <div className="container mx-auto px-4 md:px-20 flex flex-wrap items-center justify-between h-auto lg:h-16">
        {/* Logo with margin */}
        <div className="text-2xl font-bold cursor-pointer text-pink-600 mr-4 lg:mr-10">
          CrowdCatch
        </div>

        {/* Login/Signup */}
        <div className="flex items-center space-x-4 order-2 lg:order-none ml-auto lg:ml-0">
          {authUser ? (
            <Logout />
          ) : (
            <>
              <Link
                to="/login"
                className="text-black px-3 py-2 rounded-md hover:text-slate-800 transition duration-300"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white w-[85px] h-[32px] text-sm px-4 py-1.5 rounded-md hover:bg-blue-600 transition duration-300 mt-2 lg:mt-0"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Search bar */}
        <div className="w-full lg:w-1/2 order-3 lg:order-none mt-2 lg:mt-0 lg:ml-10 search-margin-bottom">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              className="w-full outline-none px-4 py-2 border rounded-l-md border-r-0 rounded-r-none"
              placeholder="Search events"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-pink-500 p-2 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
