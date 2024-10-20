/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
