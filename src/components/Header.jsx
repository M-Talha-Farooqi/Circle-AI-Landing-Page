import React, { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-gray-100 to-blue-300 p-8 space-y-5 text-center relative">
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Circle Logo"
            className="bg-blue-800 h-10 w-10 p-1 rounded-md"
          />
          <div className="text-xl text-blue-800 font-bold">Circle</div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-black py-2">
            Features
          </a>
          <a href="#team" className="text-black py-2">
            Our Team
          </a>
          <a
            href="#contact"
            className="text-white border bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#features" className="block py-2 text-black">
            Features
          </a>
          <a href="#team" className="block py-2 text-black">
            Our Team
          </a>
          <a
            href="#contact"
            className="block py-2 text-white bg-blue-800 rounded-md"
          >
            Contact
          </a>
        </div>
      )}

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        One app, everything <br />
        business
        <div className="flex justify-center mt-2">
          <svg
            width="300"
            height="36"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15 Q 60 0, 115 15"
              stroke="#3b63f6"
              strokeWidth="6"
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
        </div>
      </h1>
      <p className="mb-8 text-sm sm:text-base">
        Get started in just minutes, and take your business beyond <br />
        what you imagined.
      </p>
      <button className="bg-blue-800 text-white px-6 py-3 rounded-md">
        Join the Waitlist
      </button>

      <div className="absolute inset-x-0 bottom-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,220L720,328L1440,220L1440,328L720,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;
