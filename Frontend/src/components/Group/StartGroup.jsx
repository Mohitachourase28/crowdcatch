/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const StartGroup = () => {
  return (
    <div>
      {/* Back Button */}
      <div className="mt-20">
        <Link
          to="/"
          className="mt-2 flex gap-2 font-medium text-primary hover:no-underline gl:mb-16"
        >
          <span className="mr-2">←</span> Back to home page
        </Link>
      </div>
      {/* Main Container */}
      <div className="bg-white text-center py-10 px-10 mt-20">
        <h1 className="text-3xl font-bold">
          Meetup—The people platform. Where interests become{" "}
          <span className="text-red-500">passions.</span>
        </h1>
        <p className="text-gray-600 mt-4 mb-4">
          Your new community is waiting for you. For 20+ years, millions of
          people have chosen Meetup to make real connections over shared
          interests. Start a group today.
        </p>
        <Link
          to="/group-Entry"
          className="mt-9 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Create a group
        </Link>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Build lasting friendships</h3>
          <p className="text-gray-600 mt-2">
            Spark new friendships. Start a group to meet people who are new in
            town or longtime locals. Enjoy nightlife, happy hours, game nights,
            and more.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Build healthy habits</h3>
          <p className="text-gray-600 mt-2">
            Start a group to practice yoga, meditate, eat better, play a sport,
            run, hike, bike, and meet your goals together.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">
            Build a network for career success
          </h3>
          <p className="text-gray-600 mt-2">
            From real estate to entrepreneurship, there are people who share
            your professional interests. Start a group and get connected.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Prioritize your passions</h3>
          <p className="text-gray-600 mt-2">
            Meet people who share your love for art, crafts, writing, dancing,
            photography, language, or music. Create a group today.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white text-center py-10 px-4">
        <h2 className="text-2xl font-bold">Find your people this year</h2>
        <p className="text-gray-600 mt-4">
          Make time for your interests and meet people who share them. Lasting
          connections are made on Meetup.
        </p>
        <button className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
          Start today
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default StartGroup;
