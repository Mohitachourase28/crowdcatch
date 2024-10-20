/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";

function UpEvent() {
  return (
    <div className="event-container max-w-screen-2xl mx-auto md:px-19 px-4">
      {/* Header Section with flex */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-[20px] text-gray-800">Upcoming online events</h1>
        <h2 className="font-semibold text-blue-500 text-[15px] hover:underline cursor-pointer">
          See all events
        </h2>
      </div>

      {/* Grid for cards with proper spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4 gap-6">
        {list.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default UpEvent;
