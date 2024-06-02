import React from "react";
import "@/app/globals.css";
import { FaLocationDot } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="footer py-10 px-8 lg:px-2 bg-black h-auto footer-color pt-20">
        <nav className="w-auto lg:w-72 p-0">
          <div className="">
            <a href="/" className="font-black">
              <p>
                <span className="text-3xl text-white">CW</span>
                <span className="text-3xl text-orange-500">T</span>
              </p>
            </a>
            <p className="para mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              elementum dui in suscipit congue.
            </p>
            <div className="flex flex-row pt-4 gap-3 ml-3">
              <div className="">
                <FiFacebook className="social-icon text-4xl  rounded-full" />
              </div>
              <div className="">
                <FiTwitter className="social-icon text-4xl  rounded-full" />
              </div>
              <div className="">
                <FiInstagram className="social-icon text-4xl rounded-full" />
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="section">
            <h6 className=" font-bold fontt text-2xl text-gray-300">Get In Touch</h6>
          </div>
          <hr />
          <div className="flex flex-row mb-3 gap-2">
            <div className="">
              <FaLocationDot className="text-3xl text-gray-700 mt-3" />{" "}
            </div>
            <div>
              <div className="text-white text-xl font-black ">Locations</div>
              New York, USA
            </div>
          </div>
          <div className="flex flex-row  mb-3 gap-2">
            <div>
              <LuMail className="text-3xl text-gray-700 mt-3" />{" "}
            </div>
            <div>
              <div className="text-white text-xl font-black">Email</div>
              Muazkhalid936@gmail.com{" "}
            </div>
          </div>
          <div className="flex flex-row mb-3 gap-2">
            <div className="">
              <MdOutlinePhoneAndroid className="text-3xl text-gray-700 mt-3" />{" "}
            </div>
            <div>
              <div className="text-white  text-xl font-black">Phone</div>
              +92-348-4600631
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="font-bold text-gray-300 text-2xl fontt">Information</h6>
          <div className="flex flex-col gap-3">
            <a className="link link-hover">Terms & Condition</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Contact Me</a>
            <a className="link link-hover">FAQs</a>
            <a className="link link-hover">Report an issue</a>
          </div>
        </nav>
        <nav>
          <h6 className="font-bold  text-gray-300 fontt text-2xl">My Services</h6>
          <div className="flex flex-col gap-3">
            <a className="link link-hover">Web Design</a>
            <a className="link link-hover">Web Development</a>
            <a className="link link-hover">UI/UX Design</a>
            <a className="link link-hover">App Design & Develop</a>
            <a className="link link-hover">SEO Marketing</a>
            <a className="link link-hover">Graphic Design</a>
          </div>
        </nav>
      </footer>
      <div className=" bg-black footer-color text-center py-10">
        © 2021 <span className="font-bold">CWT</span>, All Rights Reserved. With
        Love by <span className="font-bold">CodexUnicTheme</span>
      </div>
    </>
  );
};

export default Footer;
