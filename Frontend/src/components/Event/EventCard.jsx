/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-xl font-bold">{event.title}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-800 font-semibold">{event.attendees} attendees</p>
    </div>
  );
};

export default EventCard;
