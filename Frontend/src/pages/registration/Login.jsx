/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider.jsx"; // Adjust path as necessary

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(''); // State to hold error message
  const { setAuthUser } = useAuth(); // Access the setAuthUser function from context
  const navigate = useNavigate(); // Hook for navigation

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const { data: responseData } = await axios.post("http://localhost:5000/api/user/login", userInfo);
      localStorage.setItem("token", responseData.token); // Save the token to localStorage
      localStorage.setItem('Users', JSON.stringify(responseData.user)); // Store user data
      setAuthUser(responseData.user); // Set authenticated user in context
      toast.success("Logged in Successfully");
      
      // Redirect to the profile or another page
      navigate('/profile'); // Redirect to the profile page
    } catch (error) {
      setError('Login failed. Check your credentials.');
      if (error.response) {
        console.error("Error:", error.response.data);
        toast.error("Error: " + error.response.data.message);
      } else {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="wrapper min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-xl text-center mb-4">LOGIN</h3>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>
          {/* Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
