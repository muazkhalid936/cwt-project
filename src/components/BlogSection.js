import React from "react";
import "@/app/BlogPage/styles.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

const BlogSection = () => {
  return (
    <div className=" w-full lg:w-p2 px-5  lg:px-0 flex gap-2 flex-col ">
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
            <FaMagnifyingGlass className="w-4 mr-2  text-2xl hover:text-orange-500 ease-in-out duration-500 h-5" />
          </button>
        </div>
      </div>

      <div className=" border w-full">
        <div className=" flex my-5">
          <div className=" mt-2 w-3 h-2 bg-black"></div>{" "}
          <h2 className="ml-5 font-medium">Search</h2>
        </div>
        <div class="mx-10  flex flex-col ">
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">Web Design</div>
          </div>
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">Web Development</div>
          </div>
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">Apps Development</div>
          </div>
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">Photography</div>
          </div>
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">UI/UX Design</div>
          </div>
          <div className="flex mb-5 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">Interior Design</div>
          </div>
        </div>
      </div>

      <div className=" border w-full">
        <div className=" flex my-5">
          <div className=" mt-2 w-3 h-2 bg-black"></div>{" "}
          <h2 className="ml-5 font-medium">Search</h2>
        </div>

        <div className="flex gap-10 py-5 flex-col">
          <div class="mx-10  ease-in-out  h-12 duration-500  mb-4 flex items-center">
            <div className="flex gap-2 hover:text-orange-500 ease-in-out duration-500">
              <div>
                <img src="/1.jpg" className=" h-20 w-28 " />
              </div>
              <div className=" flex flex-col gap-3">
                <div className="font-medium">
                  Five Ways to Develop a World Class Sales
                </div>
                <div className="text-sm datee">18 Sep 2021</div>
              </div>
            </div>
          </div>
          <div class="mx-10  ease-in-out  h-12 duration-500  mb-4 flex items-center">
            <div className="flex gap-2 hover:text-orange-500 ease-in-out duration-500">
              <div>
                <img src="/2.jpg" className="h-20 w-28 " />
              </div>
              <div className=" flex flex-col gap-3">
                <div className="font-medium">
                  Five Ways to Develop a World Class Sales
                </div>
                <div className="text-sm datee">18 Sep 2021</div>
              </div>
            </div>
          </div>
          <div class="mx-10  ease-in-out  h-12 duration-500  mb-4 flex items-center">
            <div className="flex gap-2 hover:text-orange-500 ease-in-out duration-500">
              <div>
                <img src="/3.jpg" className=" h-20 w-28 " />
              </div>
              <div className=" flex flex-col gap-3">
                <div className="font-medium">
                  Five Ways to Develop a World Class Sales
                </div>
                <div className="text-sm datee">18 Sep 2021</div>
              </div>
            </div>
          </div>
          <div class="mx-10  ease-in-out  h-12 duration-500  mb-4 flex items-center">
            <div className="flex gap-2 hover:text-orange-500 ease-in-out duration-500">
              <div>
                <img src="/1.jpg" className=" h-20 w-28 " />
              </div>
              <div className=" flex flex-col gap-3">
                <div className="font-medium">
                  Five Ways to Develop a World Class Sales
                </div>
                <div className="text-sm datee">18 Sep 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" border w-full">
        <div className=" flex my-5">
          <div className=" mt-2 w-3 h-2 bg-black"></div>{" "}
          <h2 className="ml-5 font-medium">Tags</h2>
        </div>
        <div className=" py-5 flex flex-wrap gap-2 mx-10  items-center px-auto ">
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            HTML
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            DESIGN
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            WORDPRESS
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            INTERIOR
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            APARTMENTS
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            DEVELOPMENT
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            PHP
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            PHOTOGRAPHY
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            PROPERTY
          </a>
          <a className="px-3 border bg-slate-100 ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
            MANAGMENT
          </a>
        </div>
      </div>

      <div className=" border w-full">
        <div className=" flex my-5">
          <div className=" mt-2 w-3 h-2 bg-black"></div>{" "}
          <h2 className="ml-5 font-medium">Search</h2>
        </div>
        <div class="mx-10  flex flex-col ">
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">September 2021</div>
          </div>
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">October 2021</div>
          </div>
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">August 2021</div>
          </div>
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">July 2021</div>
          </div>
          <div className="flex mb-1 mt-2 aa hover:text-orange-500 ease-in-out duration-500 ">
            <div>
              {" "}
              <FaAngleDoubleRight className="mt-1" />
            </div>
            <div className="ml-1 mb-3">June 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
