/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Layout.js
import React from 'react';
import Navbar from '../Navbar/Navbar';  // Import your navbar component
import Footer from '../Footer/Footer';  // Import your footer component

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
