/* eslint-disable no-unused-vars */
// src/pages/YourConnections.js
import React, { useEffect, useState } from "react";
import userJohn from "../../assets/john.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const UserProfile = () => {
  const [user, setUser] = useState(null); // To store user data
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    // Commented out the token check for now
    // const token = localStorage.getItem("token");

    // if (!token) {
    //   setError("No token found, please log in.");
    //   return;
    // }

    // Mock user data retrieval (replace this with an actual API call)
    setUser({
      name: "John Doe",
      email: "johndoe@example.com",
      groups: 0,
      interests: 0,
      rsvps: 0,
    });
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-red-600 font-bold">{error}</p>
        <p className="mt-4 text-gray-700">
          Please log in to access your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4">
          <button className="mb-2 mt-2 flex gap-2 font-medium text-primary hover:no-underline gl:mb-16">
            <span className="mr-2">←</span> Back to home page
          </button>
        </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
          <div className="relative mb-4">
            <img
              src={userJohn}
              alt="User Avatar"
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />
            <button className="top-1 right-1 bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
              Change profile photo
            </button>
          </div>

          <h1 className="text-center font-bold text-xl">
            {user?.name || "Name"}
          </h1>
          <p className="text-center text-gray-600">{user?.email || "Email"}</p>
          <p className="text-center text-gray-600 mt-2">
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            Bhopal, IN
          </p>
          <p className="text-center text-gray-600">
            Joined Meetup on{" "}
            {new Date().toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="mt-4 flex justify-between text-center text-sm">
            <div>
              <p className="font-bold">{user?.groups}</p>
              <p>Groups</p>
            </div>
            <div>
              <p className="font-bold">{user?.interests}</p>
              <p>Interests</p>
            </div>
            <div>
              <p className="font-bold">{user?.rsvps}</p>
              <p>RSVPs</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 mt-6 w-full max-w-sm text-center">
          <div className="flex items-center gap-4">
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
              M
            </div>
            <div>
              <p className="font-bold">{user?.name}</p>
              <a
                href="#edit-profile"
                className="text-blue-500 text-sm hover:underline"
              >
                Edit profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
