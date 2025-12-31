import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";


const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-[7vw] lg:px-[15vw] font-sans"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Hi, I am
          </h1>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Muhammad Mansoor
          </h2>

          <h3 className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Full Stack Developer",
                "MERN Stack Engineer",
                "Programmer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            I am a full-stack web developer and BS IT student with a strong
            interest in building modern web applications. I am currently
            working with the MERN stack (MongoDB, Express.js, React, Node.js)
            and continuously improving my skills through learning and
            hands-on practice.
          </p>

          <a
            href="/Muhammad_Mansoor_CV.pdf"download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-7 sm:px-8 py-3 text-sm sm:text-base md:text-lg font-bold text-white rounded-full transition-transform duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 15px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Tilt
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[26rem] lg:h-[26rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope
          >
            <img
              src={profileImage}
              alt="Muhammad Mansoor"
              className="w-full h-full rounded-full object-cover shadow-[0_10px_25px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
