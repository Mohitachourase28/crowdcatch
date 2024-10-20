// Cards.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaCheck, FaTicketAlt } from "react-icons/fa";

function Cards({ item, customImage }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/genre/${item.genre}`);
  };

  return (
    <div className="mt-4 my-3 p-3" onClick={handleCardClick}>
      {/* Adjust card size to fit within 1000x452 px */}
      <div className="card bg-white hover:scale-105 duration-200 cursor-pointer w-[1000px] h-[452px] max-w-full">
        <figure>
          <img
            src={customImage || item.image}
            alt={item.name}
            className="w-full h-[200px] object-cover" // Adjust image height
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title flex justify-between items-center text-black text-xl">
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
            {item.category === "Free" && (
              <div className="flex items-center text-black">
                <FaTicketAlt className="mr-1" />
                <span>{item.category}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;


/* "date": "Wed, Jul 3 • 6:00 AM IST",
     "status": "pending"*/