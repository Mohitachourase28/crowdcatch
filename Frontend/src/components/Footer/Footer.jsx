/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import googlePlayBadge from "../../assets/google-play-badge.png";
import appStoreBadge from "../../assets/app-store-badge.png";

const Footer = () => {
  return (
    <footer className="bg-black px-6 sm:px-4 xl:px-0 flex flex-col space-y-12 py-4">
      <div className="mt-2 flex flex-row items-center justify-center pb-6">
        <span className="text-white hidden font-semibold sm:block">
          Create your own Meetup group.
        </span>
        <button className="ml-4 inline-flex rounded-md border-2 px-4 py-2 text-white hover:bg-white hover:text-black focus:bg-white focus:text-gray-700">
          Get Started
        </button>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #808080",
          width: "90%",
          margin: "0 auto",
        }}
      />

      <div className="flex flex-col justify-around sm:flex-row">
        <div className="flex flex-col space-y-2">
          <h4 className="text-white mb-3">Your Account</h4>
          <a href="#" className="text-gray-400 hover:text-white">
            Sign up
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Log in
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Help
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Become an Affiliate
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-white mb-3">Discover</h4>
          <a href="#" className="text-gray-400 hover:text-white">
            Groups
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Calendar
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Topics
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Cities
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Online Events
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Local Guides
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Make Friends
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-white mb-3">Meetup</h4>
          <a href="#" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Blog
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Meetup Pro
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Careers
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Apps
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Podcast
          </a>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <h4 className="text-white">Follow us</h4>
        <div className="flex space-x-4">
          <FaFacebook size={24} className="text-gray-400 hover:text-white" />
          <FaTwitter size={24} className="text-gray-400 hover:text-white" />
          <FaYoutube size={24} className="text-gray-400 hover:text-white" />
          <FaInstagram size={24} className="text-gray-400 hover:text-white" />
          <FaTiktok size={24} className="text-gray-400 hover:text-white" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4">
        <span className="text-gray-400">© 2024 Meetup</span>
        <div className="flex space-x-4 text-gray-400">
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Cookie Policy
          </a>
          <a href="#" className="hover:text-white">
            Help
          </a>
        </div>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <img
            src={googlePlayBadge}
            alt="Get it on Google Play"
            className="w-[140px] h-[53px] object-contain"
          />
          <img
            src={appStoreBadge}
            alt="Download on the App Store"
            className="w-[140px] h-[40px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
