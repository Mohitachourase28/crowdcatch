/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import api from "../../api"; // Axios instance
// import GroupList from "./GroupList"; // Import GroupList

// const GroupEntry = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     location: "",
//     topics: "", 
//     groupName: "",
//     description: "",
//   });

//   // State to store the groups
//   const [groups, setGroups] = useState([]);

//   // Handle navigation between steps
//   const handleNext = () => setStep(step + 1);
//   const handleBack = () => setStep(step - 1);

//   // Handle input field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Fetch groups from the server (for displaying the list of groups)
//   const fetchGroups = async () => {
//     try {
//       const response = await api.get("/groups");
//       setGroups(response.data.groups); // Assuming your API returns a list of groups
//     } catch (error) {
//       console.error("Error fetching groups", error);
//     }
//   };

//   // Submit form data using Axios
//   const handleSubmit = async () => {
//     // Convert topics from a string to an array
//     const topicsArray = formData.topics.split(",").map((topic) => topic.trim());
//     const updatedFormData = { ...formData, topics: topicsArray };

//     try {
//       const response = await api.post("/groups/start", updatedFormData);
//       alert(response.data.message);
//       setStep(1); // Reset to step 1 after successful submission
//       setFormData({ location: "", topics: "", groupName: "", description: "" }); // Reset form data

//       fetchGroups(); // Re-fetch the groups after a successful submission
//     } catch (error) {
//       alert(
//         "Error creating group! " + (error.response?.data?.error || error.message)
//       );
//     }
//   };

//   useEffect(() => {
//     fetchGroups(); // Fetch groups when the component mounts
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         {step === 1 && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Step 1: Set Your Location</h2>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Enter your location"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               onClick={handleNext}
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
//               disabled={!formData.location}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {step === 2 && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Step 2: Choose Topics</h2>
//             <input
//               type="text"
//               name="topics"
//               value={formData.topics}
//               onChange={handleChange}
//               placeholder="Enter topics (comma-separated)"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={handleBack}
//                 className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//                 disabled={!formData.topics}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Step 3: Group Details</h2>
//             <input
//               type="text"
//               name="groupName"
//               value={formData.groupName}
//               onChange={handleChange}
//               placeholder="Enter group name"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Enter group description"
//               className="w-full px-4 py-2 border rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={handleBack}
//                 className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
//                 disabled={!formData.groupName || !formData.description}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Display the list of groups */}
//       <GroupList groups={groups} />
//     </div>
//   );
// };

// export default GroupEntry;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GroupEntry = () => {
  const [formData, setFormData] = useState({
    groupName: '',
    description: '',
    location: '',
    members: 0,
    status: 'Public', // Default status
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newGroup = {
      id: Date.now(),
      ...formData,
    };
    navigate(`/group/${newGroup.id}`, { state: { group: newGroup } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create a New Group</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
            <input
              type="text"
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              placeholder="Enter group name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter group description"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter group location"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Members</label>
            <input
              type="number"
              name="members"
              value={formData.members}
              onChange={handleChange}
              placeholder="Number of members"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupEntry;
