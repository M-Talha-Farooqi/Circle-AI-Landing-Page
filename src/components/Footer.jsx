import React from "react";
import logo from "../assets/logo.png";
import Mail from "../assets/Mail.png";
import Link from "../assets/Link.png";
import Home from "../assets/Home.png";

function Footer() {
  return (
    <footer className="p-8 bg-blue-300 relative" style={{ height: "300px" }}>
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Circle Logo"
              className="h-10 w-10 p-1 rounded-md bg-blue-900"
            />
            <span className="text-xl text-blue-900 font-bold">Circle</span>
          </div>
          <div className="text-sm text-blue-800 font-bold">
            One App, Everything Business
          </div>
        </div>

        {/* Email, Link, and Home */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mt-4 md:mt-0">
          <div className="flex flex-col md:items-start space-y-4 md:space-y-0">
            <a
              href="mailto:thecircleofficial@gmail.com"
              className="flex items-center space-x-2 text-white"
            >
              <img src={Mail} alt="Email" className="h-6 w-6" />
              <span>thecircleofficial@gmail.com</span>
            </a>

            <a
              href="https://circleofficial.linktr.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white"
            >
              <img src={Link} alt="Link" className="h-6 w-6" />
              <span>circleofficial.linktr.ee</span>
            </a>
          </div>
          <div className="ml-8 md:ml-16 ">
            <a href="/" className="flex items-center">
              <img
                src={Home}
                alt="Home"
                className="h-10 w-10 bg-blue-900 rounded-full p-2"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
