/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Registration() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Registration form submit handler
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/user/register", userInfo);
      console.log(response.data);

      if (response.data) {
        toast.success("Registration Successful");
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        navigate(from, { replace: true });
      }
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred. Please try again.";
      console.error("Error:", message);
      toast.error("Error: " + message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="form w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">CREATE AN ACCOUNT</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your fullname"
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              }`}
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">{errors.fullname.message}</span>
            )}
          </div>
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition duration-200"
          >
            Submit
          </button>
          <h2 className="text-center my-4">OR</h2>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;

