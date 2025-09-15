import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PostProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");
  const { addProject } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !budget) {
      setError("All fields are required!");
      return;
    }

    addProject({ title, description, budget });
    alert("✅ Project Posted Successfully!");

    // reset form
    setTitle("");
    setDescription("");
    setBudget("");
    setError("");

    navigate("/dashboard"); // ✅ redirect to Dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/90 backdrop-blur p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5 border border-gray-800"
      >
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
          Post a New Project 🚀
        </h2>
        {error && (
          <p className="text-red-400 text-sm text-center font-medium">{error}</p>
        )}

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Project Title"
          className="w-full px-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-indigo-500 outline-none transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="w-full px-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-indigo-500 outline-none transition min-h-[120px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Budget ($)"
          className="w-full px-4 py-3 rounded-lg bg-gray-800/80 border border-gray-700 focus:border-indigo-500 outline-none transition"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        {/* Creative Button */}
        <button
          type="submit"
          className="relative w-full py-3 rounded-xl font-semibold 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          shadow-lg transition-all transform hover:-translate-y-0.5 hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">🚀 Post Project</span>

          {/* Shine Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 
          translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
        </button>
      </form>
    </div>
  );
}
