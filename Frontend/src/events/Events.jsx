/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Event from "../components/UpEvent";
import Footer from "../components/Footer";
function Events() {
  return (
    <>
      <Navbar />
      <div>
        <Event />
      </div>
      <Footer />
    </>
  );
}

export default Events;
