/* eslint-disable no-unused-vars */
import React from 'react';
import EventCard from '../../components/Event/EventCard';

const events = [
  {
    title: 'Talk to a Therapist',
    date: 'Thu, Nov 28 - 8:00 PM IST',
    attendees: 34,
  },
  {
    title: 'Communication and Leadership Club',
    date: 'Thu, Nov 28 - 9:00 PM IST',
    attendees: 73,
  },
  {
    title: 'Power BI Auto ML',
    date: 'Fri, Nov 29 - 5:00 PM IST',
    attendees: 38,
  },
];

const HomeAfterLogin = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Welcome Back!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomeAfterLogin;
