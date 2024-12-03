/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/pages/YourConnections.js
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

// Importing icons
import userIcon from "../../assets/user.png";
import documentIcon from "../../assets/document1.png";
import settingsIcon from "../../assets/setting.png";
import emailIcon from "../../assets/email.png";
import lockIcon from "../../assets/lock.png";
import socialMediaIcon from "../../assets/socialMedia.png";
import starIcon from "../../assets/star.png";
import bellIcon from "../../assets/bell.png";
import emoticonIcon from "../../assets/emoticon.png";
import creditCardIcon from "../../assets/credit-card.png";
import applicationIcon from "../../assets/application.png";
import dollarIcon from  "../../assets/dollar.png";
import infoIcon from "../../assets/info.png"

function App() {
  const [activeSection, setActiveSection] = useState("Edit Profile");

  const sections = {
    "Edit Profile": <EditProfile />,
    "Personal Info": <PersonalInfo />,
    "Account Management": <AccountManagement />,
    "Email Updates": <EmailUpdates />,
    Privacy: <Privacy />,
    "Social Media": <SocialMedia />,
    Interests: <Interests />,
    "Mobile Notifications": <MobileNotifications />,
    "Organizer Subscription": <OrganizerSubscription />,
    "Meetup+ Subscription": <MeetupSubscription />,
    "Payment Methods": <PaymentMethods />,
    "Payments Made": <PaymentsMade />,
    "Payments Received": <PaymentsReceived />,
    Apps: <Apps />,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 mt-16 overflow-hidden">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {sections[activeSection]}
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Sidebar({ activeSection, setActiveSection }) {
  const options = [
    { name: "Edit Profile", icon: userIcon },
    { name: "Personal Info", icon: documentIcon },
    { name: "Account Management", icon: settingsIcon },
    { name: "Email Updates", icon: emailIcon },
    { name: "Privacy", icon: lockIcon },
    { name: "Social Media", icon: socialMediaIcon },
    { name: "Interests", icon: starIcon },
    { name: "Mobile Notifications", icon: bellIcon },
    { name: "Organizer Subscription", icon: emoticonIcon },
    { name: "Meetup+ Subscription", icon: creditCardIcon },
    { name: "Payment Methods", icon: documentIcon },
    { name: "Payments Made", icon: creditCardIcon },
    { name: "Payments Received", icon: dollarIcon },
    { name: "Apps", icon: applicationIcon },
    { name: "Help", icon: infoIcon }
  ];

  return (
    <aside className="bg-gray-100 border-r border-gray-300 h-full overflow-y-auto">
      <div className="hidden lg:flex flex-col w-64 p-4">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        {options.map((option) => (
          <div
            key={option.name}
            className={`p-3 mb-2 rounded flex items-center justify-between cursor-pointer ${
              activeSection === option.name
                ? "bg-blue-600 text-white font-semibold"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection(option.name)}
          >
            <span>{option.name}</span>
            <img src={option.icon} alt={option.name} className="h-6 w-6" />
          </div>
        ))}
      </div>

      {/* Small screen sidebar */}
      <div className="flex lg:hidden flex-col w-16 p-2">
        {options.map((option) => (
          <div
            key={option.name}
            className={`p-2 rounded flex items-center justify-center cursor-pointer ${
              activeSection === option.name
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection(option.name)}
          >
            <img src={option.icon} alt={option.name} className="h-6 w-6" />
          </div>
        ))}
      </div>
    </aside>
  );
}

// Components for Each Section
function EditProfile() {
  return (
    <section className="p-6 bg-white shadow rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>
      <p className="text-sm text-gray-500 mb-6">
        This information will appear on your public profile.
      </p>

      {/* Profile Picture Upload */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-700">
          M
        </div>
        <div className="ml-4">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-md mr-2">
            Upload New
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
            Choose from library
          </button>
        </div>
      </div>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Name (required)
        </label>
        <input
          type="text"
          defaultValue="Mohita Chourase"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Your location
        </label>
        <p className="text-gray-700">Bhopal, India</p>
        <a href="#" className="text-blue-500 text-sm">
          Edit address
        </a>
      </div>

      {/* Bio */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          rows="4"
          placeholder="Write a little bit about yourself here"
          maxLength="250"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        <div className="text-sm text-gray-400 text-right">250</div>
      </div>

      {/* Toggles */}
      <div className="mb-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-300">
          <span>Show Meetup groups</span>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-teal-600"
            defaultChecked
          />
        </div>
        <a href="#" className="text-blue-500 text-sm">
          View your groups
        </a>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-300">
          <span>Show interests</span>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-teal-600"
            defaultChecked
          />
        </div>
        <a href="#" className="text-blue-500 text-sm">
          Edit your interests
        </a>
      </div>

      {/* Social Media */}
      <div className="mb-6">
        <div className="py-2">
          <span>Social media</span>
        </div>
        <p className="text-gray-700 text-sm">
          Any added social media links will appear on your profile page.
        </p>
        <a href="#" className="text-blue-500 text-sm">
          Edit your social media
        </a>
      </div>

      {/* Save Changes */}
      <button className="w-full py-2 bg-pink-600 text-white rounded-md font-semibold hover:bg-pink-700">
        Save Changes
      </button>
    </section>
  );
}

function PersonalInfo() {
  return (
    <section className="p-6 bg-white shadow rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Personal Info</h1>
      <p className="text-sm text-gray-500 mb-6">
        Update your personal information such as name, birthdate, and contact
        info.
      </p>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          defaultValue="Mohita Chourase"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          defaultValue="2002-05-12"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Contact Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          defaultValue="+91 9876543210"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          defaultValue="mohita@example.com"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <textarea
          rows="3"
          defaultValue="Bhopal, Madhya Pradesh, India"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          defaultValue="Female"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Save Changes */}
      <button className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">
        Save Changes
      </button>
    </section>
  );
}

function AccountManagement() {
  const [email, setEmail] = useState("example@email.com");
  const [language, setLanguage] = useState("");
  const [timeZone, setTimeZone] = useState(
    "System Time (default) - India Standard Time"
  );

  const handleSaveChanges = () => {
    // Logic for saving changes
    console.log({ email, language, timeZone });
    alert("Changes saved successfully!");
  };

  const handleChangePassword = () => {
    // Logic for changing password
    alert("Redirecting to password change page...");
  };

  const handleDeactivateAccount = () => {
    // Logic for account deactivation
    alert("Are you sure you want to deactivate your account?");
  };

  return (
    <section className="p-6 bg-white shadow rounded-md">
      {/* Header Section */}
      <section>
        <h1 className="text-2xl font-semibold mb-4">Account Management</h1>
        <p className="text-sm text-gray-600">
          Manage your account settings, change your password, or deactivate your
          account.
        </p>
      </section>

      {/* Email */}
      <div className="mt-6 mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Language */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Preferred Language
        </label>
        <input
          type="text"
          placeholder="English"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Time Zone */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Time Zone
        </label>
        <input
          type="text"
          placeholder="Time Zone"
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Change Password */}
      <div className="flex items-center justify-between mt-6 mb-4">
        <button
          className="px-4 py-2 bg-pink-600 text-white rounded-md font-semibold hover:bg-pink-700"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </div>

      {/* Deactivate Account */}
      <div className="mt-6">
        <button
          className="w-full py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700"
          onClick={handleDeactivateAccount}
        >
          Deactivate Account
        </button>
      </div>

      {/* Save Changes */}
      <div className="mt-6">
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}

function EmailUpdates() {
  // State for toggling switches
  const [settings, setSettings] = useState({
    messages: true,
    repliesToComments: true,
    suggestedEvents: true,
    newMeetupGroups: true,
    updatesFromMeetupHQ: true,
    meetupHQSurveys: true,
    iCalAttachments: true,
    updatesFromProNetworks: true,
    connections: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="p-6 bg-white shadow rounded-md">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Email Updates</h1>
      <p className="text-sm text-gray-600 mb-6">
        Set your email preferences and notification settings for updates.
      </p>

      {/* Settings */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Updates from Meetup</h2>
        <div className="space-y-4">
          {Object.keys(settings).map((key) => (
            <div
              key={key}
              className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-md border border-gray-200"
            >
              <span className="text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <button
                onClick={() => handleToggle(key)}
                className={`relative inline-flex h-6 w-12 rounded-full border-2 transition-colors focus:outline-none ${
                  settings[key]
                    ? "bg-green-500 border-green-500"
                    : "bg-gray-300 border-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                    settings[key] ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Turn Off All Updates */}
        <div className="p-6 mt-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">Turn off all email updates</h2>
          <p className="text-sm text-gray-600 mt-2">
            We’ll stop sending you email updates. You will still receive certain
            communications, such as legal announcements and transactional updates.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 focus:outline-none"
            type="button"
          >
            Turn off
          </button>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Privacy</h1>
      <p>Control your privacy settings and visibility of your profile.</p>
    </section>
  );
}

function SocialMedia() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Social Media</h1>
      <p>Connect or disconnect your social media accounts.</p>
    </section>
  );
}

function Interests() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Interests</h1>
      <p>Update your interests to get personalized recommendations.</p>
    </section>
  );
}

function MobileNotifications() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Mobile Notifications</h1>
      <p>Manage your mobile push notifications and preferences.</p>
    </section>
  );
}

function OrganizerSubscription() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Organizer Subscription</h1>
      <p>Manage your organizer subscription and related features.</p>
    </section>
  );
}

function MeetupSubscription() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Meetup+ Subscription</h1>
      <p>Manage your Meetup+ subscription and billing.</p>
    </section>
  );
}

function PaymentMethods() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Payment Methods</h1>
      <p>You don't have any saved cards for your organizer subscription</p>
      <p>Add, remove, or update your payment methods.</p>
    </section>
  );
}

function PaymentsMade() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Payments Made</h1>
      <p>View the history of your payments and receipts.</p>
    </section>
  );
}

function PaymentsReceived() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Payments Received</h1>
      <p>Track payments received for your events and subscriptions.</p>
    </section>
  );
}

function Apps() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Apps</h1>
      <p>Manage connected apps and integrations.</p>
    </section>
  );
}

export default App;
