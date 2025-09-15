import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find the Right <span className="text-indigo-500">Talent</span> <br />
            for Your Next Project 🚀
          </h1>
          <p className="text-lg text-gray-300">
            GigConnect is your trusted platform to hire skilled freelancers and
            grow your business faster. From design to development, we’ve got the
            best professionals ready to work with you.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold"
            >
              Get Started
            </Link>
            <Link
              to="/gigs"
              className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-full font-semibold"
            >
              Browse Gigs
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8">
            <div>
              <p className="text-2xl font-bold text-indigo-400">10k+</p>
              <p className="text-gray-400 text-sm">Freelancers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-400">500+</p>
              <p className="text-gray-400 text-sm">Companies</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-400">4.8/5</p>
              <p className="text-gray-400 text-sm">Avg. Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="relative">
         <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
          alt="Freelancer Illustration"
          className="absolute inset-0 w-full h-full object-contain lg:object-cover p-10"
        />


        </div>
      </div>
    </section>
  );
}
