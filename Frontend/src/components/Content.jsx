/* eslint-disable no-unused-vars */
// Content.jsx
import React from 'react';
import Banner from './Banner';
import UpEvent from './UpEvent';
import MeetupBanner from './MeetupBanner';

const Content = () => {
  return (
    <div className="content-container ">
      <Banner />
      <UpEvent />
      <MeetupBanner />
    </div>
  );
};

export default Content;
