/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import list from "../../../public/list.json"; // Import the JSON file
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Group from "../../assets/group.png"; // Removed extra space

const EventDetail = () => {
  const { id } = useParams(); // Get the id from the URL
  const event = list.find((item) => item.id === parseInt(id)); // Find the event based on id

  if (!event) {
    return <p>Event not found!</p>; // Handle case where event doesn't exist
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-between mt-20 lg:mt-28">
        <div className="flex w-full flex-col items-center justify-between border-t border-gray-200 bg-gray-100 pb-6 lg:px-5">
          <div className="md:max-w-screen w-full bg-gray-100 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row justify-center">
              <div
                className="flex flex-grow flex-col lg:mt-3 lg:max-w-2xl "
                data-event-label="body"
              >
                <div className="mt-0 w-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full lg:w-300 lg:h-180 mt-0 object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-3xl font-bold">{event.title}</h2>
                  <p className="text-gray-600">Hosted by: {event.hostedBy}</p>
                  <p className="text-gray-900 font-bold">Details</p>
                  <p className="mb-4">
                    Join Zoom Meeting<br />
                    <a
                      href="https://us02web.zoom.us/j/7172007041?pwd=aUxEbXY2YVhpTXRBWk0wb3N1UjBydz09"
                      className="text-blue-600 hover:underline"
                    >
                      https://us02web.zoom.us/j/7172007041?pwd=aUxEbXY2YVhpTXRBWk0wb3N1UjBydz09
                    </a><br />
                    Meeting ID: 717 200 7041<br />
                    Passcode: wonderful<br />
                    Make New Friends
                  </p>
                  <ul className="pl-5 list-disc mb-4">
                    <li>
                      Drink & talk group started with a basic vision that
                      everyone can reach to everyone easily.
                    </li>
                    <li>
                      Learn from each other, chat on topics that you like,
                      relieve yourselves from the stress of life, improve
                      communication skills, and a lot of smiles 😃.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-2xl shadow-lg p-4 space-y-3 max-w-md mx-10 mt-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={Group}
                    alt="Group"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      Drink and Talk India
                    </h2>
                    <p className="text-gray-500 text-sm">Public group</p>
                  </div>
                  <div className="ml-auto">
                    <button className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-lg space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3M16 7V3M3 12h18m-9 9h9"
                    />
                  </svg>
                  <div className="flex-grow">
                    <p className="text-gray-800 font-medium">
                      Thursday, October 24, 2024
                    </p>
                    <p className="text-gray-500">6:30 PM to 9:30 PM IST</p>
                    <p className="text-gray-500">Every week on Thursday</p>
                    <a href="#" className="text-blue-600 hover:underline">
                      Add to calendar
                    </a>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-lg space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m-6 0l-4.553 2.276A2 2 0 012 14.382V9.618a2 2 0 012.447-1.894L9 10m6 0v4m-6-4v4"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-800 font-medium">Online event</p>
                    <p className="text-gray-500">Link visible for attendees</p>
                  </div>
                </div>

                <div className="text-center">
                  <button className="text-gray-500 hover:text-gray-800">
                    Report this event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
