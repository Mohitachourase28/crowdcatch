/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="content w-full items-center">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default Home;
