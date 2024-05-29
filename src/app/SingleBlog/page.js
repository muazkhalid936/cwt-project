import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";

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

      <div className="flex flex-col gap-5 justify-center px-0 lg:mx-auto lg:flex-row mx-2 my-20">
        <div className="w-p1 mx-auto lg:mx-0">
          <div className="border">
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
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <p className="mt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </div>

            <div className="flex justify-center gap-2 px-2 lg:justify-start flex-col content-center lg:flex-row mt-5">
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
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <p className="mt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
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
          <div className="comment border w-full mx-auto mt-5 lg:mx-0">
            <div className=" font-bold text-2xl pl-3 py-4">03 Comments</div>
            <div className="mb-10">
              <div className="px-4 flex py-5">
                <div className="com-img">
                  <img src="/user.jpg" className="h-24 w-24 md:w-32 lg:w-60" />
                </div>
                <div className="px-4 com flex flex-col">
                  <span className="font-medium">Jonathom Doe</span>
                  <span className="text-sm leading-loose">
                    September 19, 2021 at 11:25 am
                  </span>
                  <span className="text-sm leading-loose">
                    Aenean volutpat sed lacus eu faucibus. Quisque nunc dui,
                    finibus at bibendum et, egestas eget lectus. Ut iaculis
                    tempor risus a dictum. Aenean volutpat sed lacus eu
                    faucibus. Quisque nunc dui, finibus at bibendum et, egestas
                    eget lectus. Ut iaculis tempor risus a dictum.
                  </span>
                  <a className="border rounded-full px-5 w-20 py-1 hover:text-orange-500 ease-in-out duration-500 hover:border-orange-500 mt-5">
                    Reply
                  </a>
                </div>
              </div>
              <div className="pr-4  pl-32 flex py-5">
                <div className="com-img">
                  <img src="/user.jpg" className="h-24 w-24 md:w-32 lg:w-60" />
                </div>
                <div className="px-4 com flex flex-col">
                  <span className="font-medium">Jonathom Doe</span>
                  <span className="text-sm leading-loose">
                    September 19, 2021 at 11:25 am
                  </span>
                  <span className="text-sm leading-loose">
                    Aenean volutpat sed lacus eu faucibus. Quisque nunc dui,
                    finibus at bibendum et, egestas eget lectus. Ut iaculis
                    tempor risus a dictum.
                  </span>
                  <a className="border rounded-full px-5 w-20 py-1 hover:text-orange-500 ease-in-out duration-500 hover:border-orange-500 mt-5">
                    Reply
                  </a>
                </div>
              </div>
              <div className="px-4 flex py-5">
                <div className="com-img">
                  <img src="/user.jpg" className="h-24 w-24 md:w-32 lg:w-60" />
                </div>
                <div className="px-4 com flex flex-col">
                  <span className="font-medium">Jonathom Doe</span>
                  <span className="text-sm leading-loose">
                    September 19, 2021 at 11:25 am
                  </span>
                  <span className="text-sm leading-loose">
                    Aenean volutpat sed lacus eu faucibus. Quisque nunc dui,
                    finibus at bibendum et, egestas eget lectus. Ut iaculis
                    tempor risus a dictum.
                  </span>
                  <a className="border rounded-full px-5 w-20 py-1 hover:text-orange-500 ease-in-out duration-500 hover:border-orange-500 mt-5">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="comment border px-3 py-10 w-full mx-auto mt-5 lg:mx-0">
            <div>
              <span className="font-bold text-2xl ">
                Leave Your Comment Here
              </span>
            </div>

            <div className="border my-5">
              <textarea
                className="w-full px-4  h-40 py-2 text-sm"
                placeholder="Write Comment"
              ></textarea>
            </div>
            <div className="border my-5">
              <input
                className="px-4 py-4 w-full"
                placeholder="Your Name"
              ></input>
            </div>
            <div className="border my-5">
              <input
                className="px-4 py-4 w-full"
                placeholder="Your Email"
              ></input>
            </div>
            <div className="border my-5">
              <input
                className="px-4 py-4 w-full"
                placeholder="Your Subjects"
              ></input>
            </div>
            <div className="py-5">
              <a className=" text-white font-bold text-1xl bg-orange-500 px-5  py-4">
                Submit Comment
              </a>
            </div>
          </div>
        </div>

        <div className=" w-full lg:w-p2 flex gap-2 flex-col ">



          <div className=" border w-full">
            <div className=" flex my-5">
              <div className=" mt-2 w-3 h-2 bg-black"></div>{" "}
              <h2 className="ml-5 font-medium">Search</h2>
            </div>
            <div class="mx-10 border ease-in-out  h-12 duration-500 active:border-orange-500 focus:border-orange-500 mb-4 flex items-center">
              <input
                type="text"
                class="flex-grow p-2 outline-none"
                placeholder="Search Here.."
              />
              <div class="vertical-line"></div>
              <button class="p-2">
               <FaMagnifyingGlass  className="w-4 mr-2  text-2xl hover:text-orange-500 ease-in-out duration-500 h-5"/>
              </button>
            </div>
          </div>





          <div className=" border w-full">
            <div className=" flex my-5">
              <div className=" mt-2 w-3 h-2 bg-black"></div>{" "}
              <h2 className="ml-5 font-medium">Search</h2>
            </div>
            <div class="mx-10 border ease-in-out  h-12 duration-500 active:border-orange-500 focus:border-orange-500 mb-4 flex items-center">
              <input
                type="text"
                class="flex-grow p-2 outline-none"
                placeholder="Search Here.."
              />
              <div class="vertical-line"></div>
              <button class="p-2">
               <FaMagnifyingGlass  className="w-4 mr-2  text-2xl hover:text-orange-500 ease-in-out duration-500 h-5"/>
              </button>
            </div>
          </div>




          
        </div>
      </div>
    </>
  );
};

export default Page;
