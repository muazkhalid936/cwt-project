import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

import "./styles.css";

const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center text-5xl font-bold">Blog Details</div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className="font-medium">Blog Details</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mx-2 my-20">
        <div className="p1 border mx-auto lg:mx-0">
          <div>
            <img src="/1.jpg" className="w-full" alt="Blog Main" />
          </div>

          <div className="flex gap-5 my-10 ml-5">
            <div className="flex items-center">
              <MdOutlineDateRange className="text-xl text-orange-500" />
              <p className="text-sm text-center ml-2">24 May 2024</p>
            </div>
            <div className="flex items-center">
              <FaTags className="text-xl text-orange-500" />
              <a
                href="#"
                className="text-sm text-blue-700 hover:text-orange-500 ease-in-out duration-500 ml-2"
              >
                Technology
              </a>
            </div>
          </div>
          <div className="mx-5">
            <p className="text-3xl px-0 font-bold">
              What’s the Holding Back the It Solution Industry?
            </p>

            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start flex-col content-center lg:flex-row mt-5">
            <img
              src="/2.jpg"
              className="blog-img h-72 mb-2 mx-auto"
              alt="Blog Image 2"
            />
            <img
              src="/3.jpg"
              className="blog-img h-72  mb-2 mx-auto "
              alt="Blog Image 3"
            />
          </div>

          <div className="mx-5">
            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>

          <div className="mx-5 my-5">
            <div className="flex gap-3 font-medium">
              <span className="font-bold py-1">Tags:</span>
              <span className="px-3 border py-1 hover:text-white hover:bg-orange-500  ease-in-out duration-500  bg-slate-100">
                HTML5
              </span>
              <span className="px-3 text-center hover:text-white hover:bg-orange-500 py-1 border bg-slate-100 ease-in-out duration-500 ">
                IT
              </span>
              <span className="px-3 hover:text-white hover:bg-orange-500   text-center py-1 border bg-slate-100 ease-in-out duration-500 ">
                Technology
              </span>
            </div>
            <div className="flex gap-3 mt-5">
              <span className="font-bold py-1">Share:</span>
              <span className="px-3 border py-1 hover:text-white hover:bg-orange-500  ease-in-out duration-500 ">
                <FiLinkedin className="text-md" />
              </span>
              <span className="px-3 text-center hover:text-white hover:bg-orange-500 py-1 border  ease-in-out duration-500 ">
                <FiInstagram className="text-md" />
              </span>
              <span className="px-3 hover:text-white hover:bg-orange-500   text-center py-1 border  ease-in-out duration-500 ">
                <FiFacebook className="text-md" />
              </span>
              <span className="px-3 hover:text-white hover:bg-orange-500   text-center py-1 border  ease-in-out duration-500 ">
                <FiTwitter className="text-md" />
              </span>
            </div>
          </div>
        </div>

        <div className="p2 text-center ">asd</div>
      </div>
    </>
  );
};

export default Page;
