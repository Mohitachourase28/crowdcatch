/* eslint-disable no-unused-vars */
// Content.jsx
import React from 'react';
import Banner from '../Banner/Banner';
import UpEvent from '../UpEvent/UpEvent';
import MeetupBanner from '../JoinBanner/MeetupBanner';
import ExploreCategories from '../ExploreCategory/ExploreCategories';

const Content = () => {
  return (
    <div className="content-container ">
      <Banner />
      <UpEvent />
      <MeetupBanner />
      <ExploreCategories/>
    </div>
  );
};

export default Content;

