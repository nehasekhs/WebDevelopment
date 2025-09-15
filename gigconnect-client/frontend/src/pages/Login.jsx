import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isFirstLogin, setIsFirstLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);

      if (isFirstLogin) {
        navigate("/myaccount");
        setIsFirstLogin(false);
      } else {
        navigate("/");
      }
    } catch (err) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-800 to-indigo-600 items-center justify-center text-white p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-extrabold mb-4">Welcome Back 👋</h1>
          <p className="text-lg text-gray-200">
            Log in to continue managing your projects, gigs, and messages all in
            one dashboard.
          </p>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-950 text-white p-8">
        <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-extrabold text-center text-indigo-500">Log In</h2>
          <p className="text-gray-400 text-center mt-2">Access your account</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none text-gray-100"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none text-gray-100"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition px-4 py-3 rounded-lg font-semibold text-white shadow-lg"
            >
              Log In
            </button>
          </form>

          <p className="text-gray-400 text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
