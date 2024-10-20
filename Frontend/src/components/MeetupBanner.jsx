/* eslint-disable no-unused-vars */
import React from 'react';
import volImage from '../assets/vol.png';

const MeetupBanner = () => {
  return (
    <div className="meetup-banner-container max-w-screen-2xl mx-auto md:px-15 px-4 w-full flex justify-center px-4 relative z-10">
      <div className="max-w-[1995px] w-full bg-purple-50 flex flex-col items-center justify-center py-10 rounded-lg">
        {/* Inner Container for Content */}
        <div className="flex flex-col md:flex-row items-center w-full px-4">
          <div className="flex flex-col justify-center w-full md:w-[60%] pr-4">
            <h2 className="text-2xl font-bold mb-4">
              Join Meetup
            </h2>
            <p className="text-base mb-6">
              People use Meetup to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.
            </p>
            <button className="bg-blue-600 text-white rounded-md w-[125.29px] h-[40px] flex items-center justify-center text-sm md:text-base hover:bg-blue-300 hover:text-black transition duration-300">
              Sign Up
            </button>
          </div>
          <div className="w-3/4 md:w-[30%] flex justify-center mt-6 ml-10 md:mt-0">
            <img
              src={volImage}
              alt="Hands raised illustration"
              className="w-2/3 md:w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupBanner;
