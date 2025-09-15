import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MyAccount() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    summary: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (user) {
      const fullName = user.name || "";
      const [first = "", ...rest] = fullName.split(" ");
      const last = rest.join(" ");
      setForm({
        firstName: user.firstName ?? first,
        lastName: user.lastName ?? last,
        dob: user.dob ?? "",
        gender: user.gender ?? "",
        address: user.address ?? "",
        summary: user.summary ?? "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...user,
      name: `${form.firstName} ${form.lastName}`,
      firstName: form.firstName,
      lastName: form.lastName,
      dob: form.dob,
      gender: form.gender,
      address: form.address,
      summary: form.summary,
    };
    updateUser(updated);

    setShowPopup(true);

    // 2.5 sec ke baad Home page par redirect
    setTimeout(() => {
      setShowPopup(false);
      navigate("/"); // 👈 redirect to homepage
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6">My Account</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block text-sm mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm mb-1">Gender</label>
              <div className="flex items-center gap-4 p-2 bg-gray-800 border border-gray-700 rounded">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === "male"}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === "female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Profile Summary */}
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Profile Summary</label>
              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none"
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded text-white font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 text-center animate-fade-in">
              <h2 className="text-lg font-semibold text-green-400">
                ✅ Details updated successfully!
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
