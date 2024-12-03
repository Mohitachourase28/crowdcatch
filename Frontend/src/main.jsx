/* eslint-disable no-unused-vars */
// Main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { AuthProvider } from './context/AuthProvider'; // Comment this out
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider>  {/* Comment this out */}
    <App />
  // </AuthProvider>  {/* Comment this out */}
);
