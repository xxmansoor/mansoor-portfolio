import React from "react";
import { education } from "../../constants"; // your education data

const Education = () => {
  const edu = education[0]; // only the first education entry

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-lg font-semibold">
          My education has been a journey of learning and development. Here is the detail of my academic background
        </p>
      </div>

      {/* Single Education Card */}
      <div className="max-w-md mx-auto bg-gray-900 rounded-2xl p-6 sm:p-8 border border-white shadow-2xl backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* University Logo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md overflow-hidden flex-shrink-0">
            <img
              src={edu.img}
              alt={edu.school}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Degree & School Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-sm sm:text-md text-gray-300">{edu.school}</h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{edu.date}</p>
          </div>
        </div>
        <p className="mt-2 text-gray-400 text-sm sm:text-base">{edu.desc}</p>
      </div>
    </section>
  );
};

export default Education;
