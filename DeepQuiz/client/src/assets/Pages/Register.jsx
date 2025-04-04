import React, { useState } from "react";
import logo from "../img/logo.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!formData.username || !formData.fullname || !formData.password) {
      setError("All fields are required");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3000/register", formData);
  
      console.log("✅ Registration Success:", response.data); // Debugging
  
      // Ensure the alert fires before navigation
      alert("🔥 Registration Successful! You will be redirected to login.");
  
      // Reset input fields
      setFormData({ username: "", fullname: "", password: "" });
  
      // Delay navigation slightly to ensure user sees alert
      setTimeout(() => {
        navigate("/login");
      }, 1000);
  
    } catch (error) {
      console.error("❌ Registration Error:", error);
  
      if (error.response) {
        setError(error.response.data.message || "Registration failed");
      } else if (error.request) {
        setError("Server not responding. Please try again later.");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };
    

  return (
    <div className="h-[100vh] w-full p-3 flex items-center justify-center">
      <div className="flex flex-col shadow-xl rounded-2xl bg-gray-100 items-center justify-center w-[500px] p-6">
        <div className="text-center">
          <img className="w-42 h-35 mb-[-35px] mx-auto" src={logo} alt="logo" />
          <p className="mt-4">Join the community today!</p>
        </div>

        <button className="mt-5 bg-gray-300 px-5 py-2 rounded-3xl w-[300px] cursor-pointer flex items-center justify-center gap-5">
          <FcGoogle className="text-2xl" /> Use Google Account
        </button>

        <p className="mt-5">or</p>

        <form onSubmit={handleRegister} className="w-full max-w-[300px] mt-4">
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="fullname" className="mb-1">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
              type="text"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="password" className="mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-5 py-2 rounded-3xl cursor-pointer hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center mb-10">
          Already a member?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-bold cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
