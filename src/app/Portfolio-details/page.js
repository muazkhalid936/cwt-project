import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa6";

import "./styles.css";

const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center text-5xl fontt font-bold">
            Portfolio 02 Column
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className="font-medium">Portfolio 02 Column</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-center px-0 md:px-10 lg:mx-auto lg:flex-row mx-2 my-20">
        <div className="w-4/3 xl:w-port1 lg:port1md mx-auto lg:mx-0">
          <div className="border">
            <div>
              <img src="/portfolio.jpg" className="w-full" alt="Blog Main" />
            </div>

            <div className="mx-5">
              <p className="text-5xl my-10 px-0 font-bold">
                Givest is a non profit and fund rising website.
              </p>

              <span className="text-orange-500 text-sm font-medium">
                |<span className="mx-2">|</span>
                GIVEST - NON PROFIT WEBSITE
              </span>

              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                omnis sunt tempore tempora quo voluptates aperiam reiciendis
                distinctio quaerat animi modi! Tenetur magnam eius alias dicta
                cupiditate modi corrupti quidem aut qui natus voluptas sit. Vel
                aliquam non aliquid incidunt praesentium dolor odio minus
                corporis consectetur eius consequatur deleniti aperiam magni
                saepe ipsum iste quam quas illum enim animi quae iusto obcaecati
                pariatur placeat Quos et qui laborum hic repellendus.
              </p>
              <p className="mt-10 text-3xl font-bold">Feature of This Item</p>

              <div className="mt-10 flex flex-col gap-5 mx-10">
                <div className=" flex gap-3 mx-2">
                  <div>
                    <FaRegHandPointRight  className="text-orange-500 text-3xl"/>
                  </div>
                  <div className="mt-1  text-gray-500 font-medium">Easy color change with SASS or Variable</div>
                </div>
                <div className=" flex gap-3 mx-2">
                  <div>
                    <FaRegHandPointRight  className="text-orange-500 text-3xl"/>
                  </div>
                  <div className="mt-1  text-gray-500 font-medium">Huge set of UI elements and blocks</div>
                </div>
                <div className=" flex gap-3 mx-2">
                  <div>
                    <FaRegHandPointRight  className="text-orange-500 text-3xl"/>
                  </div>
                  <div className="mt-1  text-gray-500 font-medium">Compatible Browsers:IE11+, Firefox, Safari, Opera, Chrome, Edge</div>
                </div>
                <div className=" flex gap-3 mx-2">
                  <div>
                    <FaRegHandPointRight  className="text-orange-500 text-3xl"/>
                  </div>
                  <div className="mt-1  text-gray-500 font-medium"> Images With jQuery Inner Zoom, outer Zoom</div>
                </div>
                <div className=" flex gap-3 mx-2">
                  <div>
                    <FaRegHandPointRight  className="text-orange-500 text-3xl"/>
                  </div>
                  <div className="mt-1  text-gray-500 font-medium"> Unlimited Category Page Variations</div>
                </div>
              </div>
            </div>

         

            <div className="mx-5">
              <p className="my-10 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis omnis sunt tempore tempora quo voluptates aperiam reiciendis distinctio quaerat animi modi! Tenetur magnam eius alias dicta cupiditate modi corrupti quidem aut qui natus voluptas sit. Vel aliquam non aliquid incidunt praesentium dolor odio minus corporis consectetur eius consequatur deleniti aperiam magni saepe ipsum iste quam quas illum enim animi quae iusto obcaecati pariatur placeat Quos et qui laborum hic repellendus.
              </p>
            </div>

           
          </div>
         

         
        </div>

        <div className=" w-full  lg:w-port2 px-5  lg:px-0 flex gap-2 flex-col ">
          <div className=" border w-full">
            <div className="justify-center asd mx-5 h-10 flex my-5">
              <h2 className=" font-black text-2xl  ">Infromation</h2>
            </div>
            <div className="px-5 flex justify-between pb-3">
              <span className="font-bold text-sm">Customer Name:</span>
              <span className="text-gray-400 text-sm">Steven John</span>
            </div>
            <div className="px-5 flex justify-between pb-3">
              <span className="font-bold text-sm">Category:</span>
              <span className="text-gray-400 text-sm">Technology</span>
            </div>
            <div className="px-5 flex justify-between pb-3">
              <span className="font-bold text-sm">Budget:</span>
              <span className="text-gray-400 text-sm">$458.00</span>
            </div>
            <div className="px-5 flex justify-between pb-3">
              <span className="font-bold text-sm">Buration:</span>
              <span className="text-gray-400 text-sm">26 Days</span>
            </div>
            <div className="px-5 flex justify-between pb-3">
              <span className="font-bold text-sm">Date:</span>
              <span className="text-gray-400 text-sm">09 May, 2021</span>
            </div>
            <div className="px-5 flex justify-between pb-3">
              <span className="font-bold text-sm">Status:</span>
              <span className="text-gray-400 text-sm">In Process</span>
            </div>
            <div className="px-5 flex justify-between pb-3">
              <span className="font-bold text-sm">Software:</span>
              <span className="text-gray-400 text-sm">Laravel</span>
            </div>

            <div className="px-5 flex justify-between flec-row lg:flex-col pb-3">
              <span className="font-bold text-sm">Demo Link:</span>
              <span className="text-blue-800 ease-in-out flex justify-end duration-500 hover:text-orange-500 text-sm ">
                https://www.example.com
              </span>
            </div>

            <div className="px-5 flex justify-between pb-1 lg:pb-3">
              <span className="font-bold text-sm">Tags:</span>
              <div className="flex font-medium">
                <span className="text-blue-800 ease-in-out flex justify-end duration-500 hover:text-orange-500 text-sm ">
                  HTML
                </span>
                ,
                <span className="text-blue-800 ease-in-out flex justify-end duration-500 hover:text-orange-500 text-sm ">
                  CSS
                </span>
                ,
                <span className="text-blue-800 ease-in-out flex justify-end duration-500 hover:text-orange-500 text-sm ">
                  PHP
                </span>
              </div>
            </div>

            <div className="px-5 flex justify-between flec-row lg:flex-col pb-3">
              <span className="font-bold text-xl mt-10 lg:mt-0 ">Share:</span>
              <span className="text-blue-800 ease-in-out flex justify-end duration-500 hover:text-orange-500 text-sm ">
                <div className="flex flex-row pt-4 gap-3 ml-3">
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
                    <FaWhatsapp className="text-xl" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
