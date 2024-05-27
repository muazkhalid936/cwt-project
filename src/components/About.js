import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const About = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center px-2 lg:text-left">
          <h1 className="text-3xl text-orange-500 ">Muaz Khalid</h1>
          <p className="py-6  font-bold text-3xl">
            A professional web designer & developer
          </p>
          <p className=" leading-loose">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences through My passion is to
            design digital user experiences through meaningful interactions.
            Check out my Portfolio
          </p>

          <p className="mt-2 leading-loose">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores.
          </p>

          <div className="flex flex-row pt-4 gap-3 ml-3">
            <div className="">
              <FiFacebook className="social-icon text-5xl  rounded-full" />
            </div>
            <div className="">
              <FiTwitter className="social-icon text-4xl  rounded-full" />
            </div>
            <div className="">
              <FiInstagram className="social-icon text-4xl rounded-full" />
            </div>
          </div>
        </div>
        <div className="   w-full">
          <img src="/about.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
