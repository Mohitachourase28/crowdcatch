// Cards.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaCalendarAlt, FaCheck, FaTicketAlt, FaTimes } from "react-icons/fa"; // Import FaTimes for the cross icon
import { Link } from "react-router-dom";

function Cards({ item, customImage }) {
  return (
    <div className="mt-4 my-3 p-3">
      {/* Adjust card size to fit within 1000x452 px */}
      <Link to={`/details/${item.id}`} className="no-underline text-black">
      <div className="card bg-white hover:scale-105 duration-200 cursor-pointer w-[1000px] h-[452px] max-w-full">
        <figure>
          <img
            src={customImage || item.image}
            alt={item.name}
            className="w-full h-[200px] object-cover" // Adjust image height
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title flex justify-between items-center text-black text-xl hover:underline">
            {item.title}
          </h2>
          <p className="text-gray-700">Hosted by: {item["Hosted by"]}</p>
          <div className="flex items-center text-gray-700 mt-1">
            <FaCalendarAlt className="mr-2" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center mt-1">
            {item.status === "confirmed" && (
              <div className="flex items-center text-green-500 mr-2">
                <FaCheck className="mr-1" />
                <span>Confirmed</span>
              </div>
            )}
            {item.status === "pending" && (
              <div className="flex items-center text-red-500 mr-2">
                <FaTimes className="mr-1" />
                <span>Pending</span>
              </div>
            )}
          </div>

          {/* Show "Free" or "Paid" without showing the price for free events */}
          <div className="flex items-center mt-1">
            {item.category === "Free" ? (
              <div className="flex items-center text-black">
                <FaTicketAlt className="mr-1" />
                <span>{item.category}</span>
              </div>
            ) : (
              <div className="flex items-center text-black">
                <FaTicketAlt className="mr-1" />
                <span>Paid</span>
                <span className="ml-2">| Price: ${item.price}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Cards;

/* "date": "Wed, Jul 3 • 6:00 AM IST",
     "status": "pending"*/
