/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/Banner.png"; // Importing the image

const Banner = () => {
  return (
    <section className="py-10 w-full flex justify-center mt-16 sm:mt-10 md:mt-0"> {/* Responsive top margin */}
      <div className="flex flex-col sm:flex-row items-center max-w-screen-lg w-full px-4">
        {/* Left Side: Text */}
        <div className="sm:w-1/2 w-full text-center sm:text-left mb-8 sm:mb-0">
          <h1 className="text-lg md:text-4xl font-bold mb-4 md:mb-6 leading-tight text-gray-800">
            Connect, Collaborate, Create—Empowering Communities through{" "}
            <span className="text-pink-500">Technology</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-4 md:mb-6 leading-relaxed">
            Discover the latest tech events, meetups, and workshops happening in
            your community. Join like-minded individuals, share knowledge, and
            turn your ideas into reality with our platform.
          </p>
          <button className="bg-blue-600 text-white rounded-md w-[125.29px] h-[40px] flex items-center justify-center text-sm md:text-base hover:bg-blue-300 hover:text-black transition duration-300">
            Join Meetup
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="sm:w-1/2 w-full flex justify-center sm:justify-end">
          <img
            src={banner}
            alt="A community tech meetup banner"
            className="w-full h-auto max-w-xs sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
