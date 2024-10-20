/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
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
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
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
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
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
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
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
            Have an account? <Link to="/" className="text-blue-500 underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
