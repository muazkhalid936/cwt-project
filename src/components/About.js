import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const About = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="grid content-center  w-full">
          <img src="/about.jpg"  className="px-20 lg:px-1 lg:ml-0"/>
        </div>
        <div className=" lg:text-left w-full px-20 lg:px-1 ">
          <h1 className="text-3xl font-bold text-orange-500 fontt ">Muaz Khalid</h1>
          <p className="py-6 fontt font-medium font-bold text-3xl">
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

          <div className="flex flex-row pt-4 gap-5 ml-3">
            <div className="about-icon">
              <FiFacebook className=" text-xl" />
            </div>
            <div className="about-icon">
              <FiTwitter className="text-xl" />
            </div>
            <div className="about-icon">
              <FiInstagram className="text-xl" />
            </div>
            <div className="about-icon">
              <FaPinterestP className="text-xl" />
            </div>
            <div className="about-icon">
              <FaWhatsapp className="text-xl" />
            </div>
          </div>

          <div className=" flex flex-row  gap-10 mt-10">
            <button className="bg-orange-500 w-40 p-5 text-white font-bold">
              Hire Me
            </button>
            <button className="bg-black text-white w-40 font-bold">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
