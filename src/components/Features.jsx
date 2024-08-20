import React from "react";
import Connect from "../assets/Connect.png";
import Donate from "../assets/Donate.png";
import Criticalthinking from "../assets/Criticalthinking.png";

function Features() {
  return (
    <section id="features" className="p-8 bg-white">
      <p className="text-center text-lg mb-4">Explore endless possibilities</p>

      <h2 className="text-3xl font-bold text-center mb-2 relative">
        <span className="inline-block">Features</span>{" "}
        <span className="inline-block"> We Provide</span>
        <div className=" left-1/2 transform -translate-x-3/4 bottom-[-8px] w-[120px] mx-auto">
          <svg
            width="120"
            height="10"
            viewBox="0 0 110 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8 Q 60 0, 115 8"
              stroke="#3b63f6"
              strokeWidth="5"
              strokeDasharray="7, 7"
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
        </div>
      </h2>

      <p className="text-center text-lg mb-8">
        Get started in just minutes, and take your business beyond what you
        imagined
      </p>

      <div className="flex flex-wrap justify-center items-start gap-6">
        {/* Feature 1 */}
        <div className="relative flex flex-col justify-between w-[300px] h-[450px] bg-black text-white p-6 rounded-xl shadow-md">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover opacity-10 "
            style={{
              backgroundImage: `url(${Connect})`,
              backgroundSize: "200px",
              backgroundPosition: "right",
              height: "85%",
            }}
          />
          <div
            className="flex flex-col justify-between w-[200px] h-[380px] text-white"
            style={{
              backgroundImage: `url(${Connect})`,
              backgroundPosition: "top left",
              backgroundRepeat: "no-repeat",
              backgroundSize: "80px",
            }}
          ></div>
          <div className="relative flex-grow"></div>
          <p className="relative z-10">
            Get started in just minutes, and take your business beyond what you
            imagined.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="relative flex flex-col justify-between w-[300px] h-[450px] bg-blue-200 text-black p-6 rounded-xl shadow-md">
          <div
            className="flex flex-col justify-between w-[200px] h-[380px] text-white"
            style={{
              backgroundImage: `url(${Donate})`,
              backgroundPosition: "top left",
              backgroundRepeat: "no-repeat",
              backgroundSize: "80px",
            }}
          ></div>
          <div
            className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
            style={{
              backgroundImage: `url(${Donate})`,
              backgroundSize: "200px",
              backgroundPosition: "right",
              height: "85%",
            }}
          />

          <div className="relative flex-grow"></div>
          <h3 className="relative text-xl font-bold mb-4 z-10">
            Find Investment
          </h3>
          <p className="relative z-10">
            Get started in just minutes, and take your business beyond what you
            imagined.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="relative flex flex-col mt-9 w-[630px] h-[200px] bg-blue-200 text-black p-6 rounded-xl shadow-md mx-auto">
        <div
          className="absolute top-2 right-4 w-[80px] h-[80px] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${Criticalthinking})`,
            backgroundSize: "80px",
            backgroundPosition: "top right",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
          style={{
            backgroundImage: `url(${Criticalthinking})`,
            backgroundSize: "120px",

            backgroundPosition: "calc(100% - 100px) center",
          }}
        ></div>
        <div className="relative flex-grow"></div>
        <h3 className="relative text-xl font-bold mb-4 mt-8 z-10">
          AI Business Consultant
        </h3>
        <p className="relative z-10">
          Get started in just minutes, and take your business <br />
          beyond what you imagined.
        </p>
      </div>
    </section>
  );
}

export default Features;
