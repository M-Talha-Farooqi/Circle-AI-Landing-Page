import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

function Team() {
  return (
    <section id="team" className="p-8">
      <h3 className="text-xl  text-center mb-2">Founders</h3>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold inline-block">Meet The Team</h2>
        <div className="flex justify-center mt-2">
          <svg
            width="300"
            height="38"
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
      </div>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center items-center gap-8 mx-auto max-w-[800px]">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <img
            src={image1}
            alt="Team Member 1"
            className="rounded-lg w-32 h-32 mb-4 object-cover"
          />
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
          <img
            src={image2}
            alt="Team Member 2"
            className="rounded-lg w-32 h-32 mb-4 object-cover"
          />
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
          <img
            src={image3}
            alt="Team Member 3"
            className="rounded-lg w-32 h-32 mb-4 object-cover"
          />
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col items-center">
          <img
            src={image4}
            alt="Team Member 4"
            className="rounded-lg w-32 h-32 mb-4 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
