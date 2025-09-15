import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900/95 sticky top-0 z-40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Nav */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow">
                <span className="text-white font-bold">GC</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold leading-tight">
                  GigConnect
                </div>
                <div className="text-xs text-gray-400 -mt-0.5">
                  Hire. Work. Scale.
                </div>
              </div>
            </Link>

            {/* Links */}
            <nav className="hidden md:flex items-center gap-4 ml-4 text-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/gigs"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }
              >
                Gigs
              </NavLink>
              <NavLink
                to="/chats"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }
              >
                Chat
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }
              >
                Pricing
              </NavLink>
            </nav>
          </div>

          {/* Search */}
          <div className="hidden md:flex md:flex-1 justify-center px-4">
            <SearchBar />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 relative">
            {/* Post Project Button */}
            <Link
              to="/post-project"
              className="inline-flex items-center justify-center px-5 py-2.5 
                         rounded-lg font-medium text-sm text-white 
                         bg-blue-600 border border-blue-700 shadow-sm
                         hover:bg-blue-700 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-1 transition"
            >
              Post Project
            </Link>

            {user ? (
              <div className="relative">
                {/* Avatar */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold focus:outline-none"
                >
                  {user.name?.[0]?.toUpperCase() || "U"}
                </button>

                {/* Dropdown */}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/myaccount"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      My Account
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-sm bg-gray-100 px-4 py-2 rounded-full text-gray-900 font-semibold border border-gray-300 hover:bg-gray-200 transition"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
