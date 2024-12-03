/* eslint-disable no-unused-vars */
// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { AuthContext } from './context/AuthProvider'; // Comment this out

import Navbar from "./components/Navbar/Navbar.jsx";
import HomeBeforeLogin from "./pages/home/HomeBeforePage.jsx";
// import HomeAfterLogin from './pages/home/HomeAfterPage.jsx';
import Registration from "./pages/registration/Registration";
import Login from "./pages/registration/Login";
import ProfileScreen from "./pages/registration/ProfileScreen";
import EventDetail from "./components/Event/EventDetail";
// import ProtectedRoute from './protected-route/ProtectedRoute.jsx';

import YourEvent from "./pages/userAccount/YourEvent";
import YourGroup from "./pages/userAccount/YourGroup";
import YourConnections from "./pages/userAccount/YourConnections";
import Settings from "./pages/userAccount/Settings";
// import Profile from './pages/userAccount/Profile';
import Help from "./pages/userAccount/Help";

// App.jsx
import StartGroup from "./components/Group/StartGroup"; // Default import
import GroupEntry from "./components/Group/groupEntry.jsx";
import GroupDetail from "./components/Group/GroupDetail.jsx";
import AIPage from "./pages/TechCategory.jsx/AIPage.jsx";
import BlockchainPage from "./pages/TechCategory.jsx/BlockchainPage.jsx";
import CloudPage from "./pages/TechCategory.jsx/CloudPage.jsx";
import CyberSecurityPage from "./pages/TechCategory.jsx/CyberSecurityPage.jsx";
import DataSciencePage from "./pages/TechCategory.jsx/DataSciencePage.jsx";
import DevOpsPage from "./pages/TechCategory.jsx/DevOpsPage.jsx";
import MachineLearningPage from "./pages/TechCategory.jsx/MachineLearningPage.jsx";
import IoTPage from "./pages/TechCategory.jsx/IoTPage.jsx";

function App() {
  // const { isLoggedIn } = useContext(AuthContext); // Comment this out

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomeBeforeLogin />} // Remove the isLoggedIn check for now
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Navigate to="/" />} />
        <Route path="/signup" element={<Registration />} />
        <Route
          path="/profile"
          element={
            // Remove ProtectedRoute for now
            <ProfileScreen />
            // <Profile />
          }
        />
        <Route path="/details/:id" element={<EventDetail />} />
        <Route path="/your-event" element={<YourEvent />} />
        <Route path="/your-group" element={<YourGroup />} />
        <Route path="/your-connections" element={<YourConnections />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route
          path="/start-group"
          element={
            // Remove ProtectedRoute for now
            <StartGroup />
          }
        />
        <Route path="/group-entry" element={<GroupEntry />} />
        <Route path="/group/:id" element={<GroupDetail />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
        <Route path="/cloud" element={<CloudPage />} />
        <Route path="/cyber-security" element={<CyberSecurityPage />} />
        <Route path="/data-science" element={<DataSciencePage />} />
        <Route path="/devops" element={<DevOpsPage />} />
        <Route path="/machine-learning" element={<MachineLearningPage />} />
        <Route path="/iot" element={<IoTPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
