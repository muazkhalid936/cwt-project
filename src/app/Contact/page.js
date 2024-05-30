import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import "./styles.css"
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
            <span className="font-bold text-gray-500">Contact Us</span>
          </div>
        </div>
      </div>

     <div className="flex justify-center">

     <div className="mt-20 grid  gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center">
        <div className="flex gap-2 aa">
          <div className="bg-orange-100 justify-center flex w-20">
            <LiaMapMarkedAltSolid className="text-7xl text-orange-500" />
          </div>
          <div className="flex flex-col gap-1 justify-end">
            <span className="font-bold">ADDRESS</span>
            <span className="text-sm">Kurfürstendamm 80 Mecklenburg Vorpommern Berlin</span>
          </div>
        </div>
        <div className="flex gap-2 aa">
          <div className="bg-orange-100 w-20 flex justify-center">
            <CiHeadphones className="text-7xl text-orange-500" />
          </div>
          <div className="flex flex-col gap-1 justify-end">
            <span className="font-bold">OUR PHONE</span>
            <div className="flex flex-col">
            <span className="text-sm">Telephone: (+78) 123-9123</span>
            <span className="text-sm">Mobile: 000 123 9123</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 aa">
          <div className="bg-orange-100 flex justify-center w-20">
            <IoMailOutline className="text-7xl text-orange-500" />
          </div>
          <div className="flex flex-col gap-1 justify-end">
            <span className="font-bold">EMAIL</span>
           <div className="flex flex-col">
           <span className="text-sm">Office Email:123@gmail.com</span>
            <span className="text-sm">Inquiries:123@gmail.com</span>
           </div>
          </div>
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
