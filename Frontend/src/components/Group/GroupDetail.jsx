/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

const GroupDetail = () => {
  const location = useLocation();
  const group = location.state?.group; // Get group data from location state

  if (!group) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Group not found</p>
      </div>
    );
  }

  return (
    <div>
      {/* Back Button */}
<div className="mt-20">
  <Link to="/" className="mb-2 mt-2 flex gap-2 font-medium text-primary hover:no-underline gl:mb-16">
    <span className="mr-2">←</span> Back to home page
  </Link>
</div>
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center mt-20">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full">
        <div className="relative">
          <img
            src="/images/bookimg2.jpg"
            alt="Group Cover"
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {group.groupName}
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Description:</strong> {group.description}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Location:</strong> {group.location}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Number of Members:</strong> {group.members}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Status:</strong> {group.status}
          </p>

          <div className="border-t border-gray-300 mt-6 pt-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              About
            </h2>
            <p className="text-gray-600 mb-4">
              Detailed information about the group can go here. For example,
              the group's purpose, goals, or any relevant details.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Events
            </h2>
            <p className="text-gray-600 mb-4">
              Upcoming events will be displayed here.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Members
            </h2>
            <p className="text-gray-600 mb-4">
              A list of members or highlights about the members.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Photos
            </h2>
            <p className="text-gray-600 mb-4">
              Group photos or related images can be showcased here.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Discussion
            </h2>
            <p className="text-gray-600">
              Discussions or highlights of recent conversations can be included
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default GroupDetail;
