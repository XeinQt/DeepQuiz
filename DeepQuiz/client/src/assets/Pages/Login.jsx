import React, { useState } from "react";
import logo from "../img/logo.png";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await axios.post("http://localhost:3000/login", {
          username: formData.username,
          password: formData.password,
        });

        localStorage.setItem("token", response.data.token);
        alert("🔥 Login Successful! Redirecting...");
        navigate("/home");
      } else {
        response = await axios.post("http://localhost:3000/register", {
          username: formData.username,
          fullname: formData.fullname,
          password: formData.password,
        });

        alert("✅ Signup successful! You can now log in.");
        setIsLogin(true);
        setFormData({ username: "", password: "", fullname: "" });
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Try again."
      );
      console.error("Auth Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] w-full p-5 flex items-center justify-center">
      <div className="flex flex-col shadow-xl rounded-2xl bg-gray-100 items-center justify-center w-[500px] p-8">
        <div className="text-center">
          <img className="w-42 h-35 mb-[-35px] mx-auto" src={logo} alt="logo" />
          <p className="mt-5">Join the community today!</p>
        </div>

        <button className="mt-5 bg-gray-300 px-5 py-2 rounded-3xl w-[300px] cursor-pointer flex items-center justify-center gap-5">
          <FcGoogle className="text-2xl" /> Use Google Account
        </button>

        <p className="mt-5">or</p>

        <form onSubmit={handleSubmit} className="w-full max-w-[300px]">
          {!isLogin && (
            <label className="flex flex-col mb-4">
              Full Name
              <input
                className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </label>
          )}

          <label className="flex flex-col mb-4">
            Username
            <input
              className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex flex-col mb-6">
            Password
            <input
              className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </label>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-5 py-2 rounded-3xl cursor-pointer hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-5 text-center mb-10">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="font-bold cursor-pointer text-blue-500 hover:text-blue-700"
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
