// src/pages/YourGroup.js
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';

import noGrp from "../../assets/noGrp.png";
const YourGroup = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="px-6 sm:px-4 xl:px-0 md:max-w-screen fle-col m-auto flex w-full">
        {/* Back Button */}
        <div className="m-auto my-8 sm:px-4 gl:flex gl:items-start gl:gap-16">
          {/* Back Button */}
        <div className="p-4">
          <Link
            to="/"
            className="mb-2 mt-2 flex gap-2 font-medium text-primary hover:no-underline gl:mb-16"
          >
            <span className="mr-2">←</span> Back to home page
          </Link>
        </div>

          <div className="flex gl:gap-16">
          <div className="flex flex-col items-center justify-center d159n4si">
            <h1 className="text-3xl font-bold lg:text-3xl">Your events</h1>
            <div className="flex justify-center">
              <img
                src={noGrp}
                alt="no group image"
                className="rounded-lg w-50 h-50 max-w-full max-h-[300px] object-contain"
              />
            </div>
            <p className="mt-1 text-gray-600 text-lg"></p>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YourGroup;
