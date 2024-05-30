import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { RiMailOpenLine } from "react-icons/ri";

const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center text-5xl font-bold">Contact Us</div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className="font-bold text-gray-500">Conact Us</span>
          </div>
        </div>
      </div>

      <div className="my-20 px-4 mx-auto w-full md:w-2/3 lg:w-1/2 ">
        <div className=" flex justify-center mx-auto">
          <div className="comment px-3 py-10 w-full mx-auto mt-5 lg:mx-0">
            <div className="text-center flex flex-col">
              <span className=" text-center font-bold text-4xl ">
                Get In Touch
              </span>
              <span className=" my-5 text-center text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet maximus est.
              </span>
            </div>
            
            <div className="my-5">
              <label className=" font-medium"> Your Name</label>
              <div className="border">
                <input className="px-4 py-3 w-full"></input>
              </div>
            </div>
            <div className="my-5">
              <label className=" font-medium"> Your Email</label>
              <div className="border">
                <input className="px-4 py-3 w-full"></input>
              </div>
            </div>
            <div className="my-5">
              <label className=" font-medium"> Your Subject</label>
              <div className="border">
                <input className="px-4 py-3 w-full"></input>
              </div>
            </div>
            <div className="my-5">
              <label className=" font-medium">Your Message</label>
              <div className="border">
                <textarea className="w-full px-4  h-40 py-2 text-sm"></textarea>
              </div>
            </div>
            <div className="py-4 flex justify-center w-full">
              <a className=" flex justify-center w-full text-white text-center font-bold text-1xl hover:bg-blue-500 ease-in-out duration-500 bg-orange-500 px-10  py-4">
              Send Message
              <FaArrowRightLong className=" mt-1 ml-2" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Page;
