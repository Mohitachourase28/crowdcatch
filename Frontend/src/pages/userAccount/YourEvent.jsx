/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/pages/YourEvent.js
// import React, { useState } from "react";
// import hostingImage from "../../assets/hosting.png"; // Update the path based on your actual file structure
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";

// // Reusable Tab Navigation Component
// const TabNavigation = ({ tabs, selectedTab, onTabSelect }) => (
//   <div className="flex mb-4 border-b border-gray-300">
//     {tabs.map((tab) => (
//       <button
//         key={tab}
//         onClick={() => onTabSelect(tab)}
//         className={`px-4 py-2 focus:outline-none ${
//           selectedTab === tab ? "font-bold border-b-2 border-black" : ""
//         }`}
//       >
//         {tab}
//       </button>
//     ))}
//   </div>
// );

// // Reusable Calendar Component
// const Calendar = ({ highlightDate }) => {
//   const days = [
//     [null, null, null, 1, 2, 3, 4],
//     [5, 6, 7, 8, 9, 10, 11],
//     [12, 13, 14, 15, 16, 17, 18],
//     [19, 20, 21, 22, 23, 24, 25],
//     [26, 27, 28, 29, 30, null, null],
//   ];

//   return (
//     <table className="m-auto border-collapse text-center w-3/4 lg:w-1/2">
//       <thead>
//         <tr>
//           {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
//             <th key={day} className="py-2 font-bold border-b">
//               {day}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {days.map((week, i) => (
//           <tr key={i}>
//             {week.map((day, idx) => (
//               <td
//                 key={idx}
//                 className={`py-3 ${
//                   day === highlightDate
//                     ? "bg-blue-500 text-white rounded-full"
//                     : "text-gray-700"
//                 }`}
//               >
//                 {day || ""}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const YourEvents = () => {
//   const [selectedTab, setSelectedTab] = useState("Hosting");
//   const tabs = ["Attending", "Hosting", "Saved", "Past"];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex flex-grow flex-col justify-center mt-20 lg:mt-28">
//         <div className="p-6 font-sans">
//           <a href="/" className="text-blue-500 underline">
//             &lt; Back to home page
//           </a>

//           <div className="items-center justify-center">
//           <h2 className="mt-4 text-2xl font-bold">Your Events</h2>

//           <TabNavigation
//             tabs={tabs}
//             selectedTab={selectedTab}
//             onTabSelect={setSelectedTab}
//           />

//           <div className="mt-12 text-center items-center">
//             {selectedTab === "Hosting" ? (
//               <>
//                 <img
//                   src={hostingImage}
//                   alt="Hosting illustration"
//                   className="mx-auto mb-6 w-24 h-auto"
//                 />
//                 <p>You are not hosting any upcoming events</p>
//                 <a href="#" className="text-blue-500 font-bold underline">
//                   Create a group to get started
//                 </a>
//                 <Calendar highlightDate={23} />
//               </>
//             ) : (
//               <p>{`No events under "${selectedTab}" tab`}</p>
//             )}
//           </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default YourEvents;

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

// Import images
import hostingImg from "../../assets/hosting.png";
import pastImg from "../../assets/pastEve.png";
import attendingImg from "../../assets/plan.png";
import savedImg from "../../assets/saved.png";

const YourEvents = () => {
  const [activeTab, setActiveTab] = useState("Hosting");
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Content for each tab
  const tabContent = {
    Attending: {
      image: attendingImg,
      paragraph: "You are not attending any upcoming events.",
      link: { text: "Explore events to join", href: "#explore-events" },
    },
    Hosting: {
      image: hostingImg,
      paragraph: "You are not hosting any upcoming events.",
      link: { text: "Create a group to get started", href: "#create-group" },
    },
    Saved: {
      image: savedImg,
      paragraph: "You have not saved any events.",
      link: { text: "Discover events to save", href: "#discover-events" },
    },
    Past: {
      image: pastImg,
      paragraph: "You have no past events to view.",
      link: { text: "Check out recent events", href: "#recent-events" },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col mt-20 lg:mt-25">
        {/* Back Button */}
        <div className="p-4">
          <Link
            to="/"
            className="mb-2 mt-2 flex gap-2 font-medium text-primary hover:no-underline gl:mb-16"
          >
            <span className="mr-2">←</span> Back to home page
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-stretch lg:justify-center gap-6 p-6">
          {/* Sidebar for Desktop */}
          <div className="hidden lg:block bg-white shadow-md rounded-lg p-4 w-70 flex flex-col">
            <ul className="space-y-4">
              {Object.keys(tabContent).map((tab) => (
                <li
                  key={tab}
                  className={`font-bold cursor-pointer ${
                    activeTab === tab ? "text-blue-500" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>

            {/* Interactive Calendar */}
            <div className="mt-6 flex-1 flex flex-col justify-between">
              <h3 className="text-center font-semibold mb-2">Event Calendar</h3>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="rounded-lg shadow-md"
              />
              <p className="mt-4 text-sm text-center text-gray-700">
                Selected Date:{" "}
                <span className="font-bold">{selectedDate.toDateString()}</span>
              </p>
            </div>
          </div>

          {/* Main Section */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 text-center flex flex-col">
            {/* Tabs for Tablet/Mobile */}
            <div className="lg:hidden flex justify-center border-b mb-6">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 font-bold ${
                    activeTab === tab ? "border-b-2 border-blue-500" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="flex flex-col justify-center flex-1">
              <h1 className="pb-8 text-3xl font-bold lg:text-4xl">
                Your events
              </h1>
              <div className="flex justify-center">
                <img
                  src={tabContent[activeTab].image}
                  alt={activeTab}
                  className="rounded-lg w-50 h-50 max-w-full max-h-[300px] object-contain"
                />
              </div>
              <p className="mt-6 text-gray-600 text-lg">
                {tabContent[activeTab].paragraph}
              </p>
              <a
                href={tabContent[activeTab].link.href}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                {tabContent[activeTab].link.text}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YourEvents;
