import React from "react";
import logo from "../assets/logo.png";

function Waitlist() {
  return (
    <section className="p-4 sm:p-8 bg-white text-center relative">
      <h3 className="text-lg sm:text-xl text-black mb-2">Coming Soon</h3>
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
        Join The Waitlist
      </h2>

      <div className="flex justify-center mt-2">
        <svg
          width="200"
          height="28"
          viewBox="0 6 20 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15 Q 90 0, 115 15"
            stroke="#3b63f6"
            strokeWidth="4"
            strokeDasharray="7, 7"
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
      </div>

      <p className="text-md sm:text-lg text-black mb-6">
        Join the waitlist and be the first one to get hands on the app
      </p>
      <div
        className="mx-auto bg-gray-900 text-white rounded-xl shadow-lg flex items-center justify-center relative"
        style={{
          height: "auto",
          width: "90%",
          maxWidth: "550px",
          marginBottom: "-60px",
          zIndex: 10,
        }}
      >
        <div className="flex flex-col justify-center items-start relative w-full px-4 sm:px-6 py-4 sm:py-6">
          <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-left w-full">
            Join the waitlist and be the first one to get <br />
            hands on the app 🚀
          </p>
          <div className="relative w-full flex">
            <form className="flex items-center w-full">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="p-3 sm:p-4 rounded-full border-none outline-none text-black w-full sm:w-80 pr-24"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="absolute right-10 sm:right-20 bottom-11 sm:bottom-10 transform translate-x-10 sm:translate-x-16 translate-y-10 opacity-30">
          <img
            src={logo}
            alt="Circle Logo"
            className="w-24 h-24 sm:w-40 sm:h-40"
          />
        </div>
      </div>
    </section>
  );
}

export default Waitlist;
