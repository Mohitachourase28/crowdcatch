/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [, , logout] = useAuth(); // Destructure to get the logout function

  const handleLogout = () => {
    try {
      logout(); // Call the logout function from context
      toast.success("Logout successfully");

      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
