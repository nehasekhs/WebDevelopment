import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} GigConnect. All rights reserved.</p>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
