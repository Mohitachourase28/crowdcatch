import axios from "axios";

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const getGroups = () => {
    return api.get("/groups"); // Replace with your endpoint to fetch groups
  };
  
export default api;
