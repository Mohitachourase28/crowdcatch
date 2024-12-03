/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../assets/Banner.png"; // Importing the image
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative w-full py-16 px-6 max-w-screen-xl mx-auto">
      {/* Background image container */}
      <div className="absolute inset-0 z-0 flex justify-center items-center"> {/* Center the background image */}
        <img
          src={banner}
          alt="Community tech meetup banner"
          className="w-3/2 h-auto opacity-50 object-contain"  // Make the image smaller (50% width of the container)
        />
      </div>

      {/* Content Block */}
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-screen-lg">
        {/* Text Block */}
        <div className="w-full text-center py-12 flex flex-col items-center justify-center bg-opacity-70 px-6 rounded-md">
          <h1 className="text-4xl font-bold leading-tight text-gray-800">
            Connect, Collaborate, Create—Empowering Communities through{" "}
            <span className="text-pink-500">Technology</span>
          </h1>
          <p className="pt-3 text-lg text-gray-600 leading-relaxed max-w-2xl">
            Discover the latest tech events, meetups, and workshops happening in
            your community. Join like-minded individuals, share knowledge, and
            turn your ideas into reality with our platform.
          </p>
          <button 
            onClick={() => navigate('/signup')} 
            className="mt-5 bg-blue-600 text-white rounded-md px-4 py-2 w-[180px] h-[40px] flex items-center justify-center text-sm md:text-base hover:bg-blue-300 hover:text-black transition duration-300">
            Join CrowdCatch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
