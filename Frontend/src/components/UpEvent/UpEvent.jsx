/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
import list from "../../../public/list.json";

function UpEvent() {
  return (
    <div className="event-container mx-auto px-6 max-w-screen-xl w-full mb-12"> {/* Adjusted bottom margin and consistent padding */}
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6"> {/* Slightly increased bottom margin */}
        <h1 className="text-2xl font-bold text-start ml-3">Upcoming online events</h1>
        <Link to="/events" className="font-semibold text-blue-500 text-sm hover:underline cursor-pointer">
          See all events
        </Link>
      </div>

      {/* Grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4">
        {list.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default UpEvent;