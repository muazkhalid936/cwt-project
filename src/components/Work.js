import React from "react";
import "./work.css";

const Work = () => {
  return (
    <div className="bg flex flex-col items-center justify-center text-black relative h-[50vh]">
      <h1 className="text-4xl text-white font-bold text-center">
        Let's Work Together
      </h1>
      <p className="text-xl text-gray-300 text-center">
        I am available for freelance projects. Hire me and get your projects
        done
      </p>
      <button className="bg-[#f26c4f] py-4 px-10 text-lg text-white leading-6 font-semibold rounded-full hover:bg-blue-600">
        Hire Me
      </button>
    </div>
  );
};

export default Work;
