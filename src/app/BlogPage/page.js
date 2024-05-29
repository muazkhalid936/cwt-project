import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import "./styles.css";
import BlogSection from "@/components/BlogSection";
import BlogPageCard from "@/components/BlogPageCard";

const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center text-5xl font-bold">News Feed</div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className="font-medium">Blog </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-center px-0 md:px-10 lg:mx-auto lg:flex-row mx-2 my-20">
        <div className="w-4/3 lg:w-p1 mx-auto lg:mx-0">
          <BlogPageCard i={1} />
          <BlogPageCard i={2} />
          <BlogPageCard i={3} />
          <BlogPageCard i={4} />

          <div className="mx-10  font-bold flex flex-row gap-3 justify-center mt-10">
            <a className="px-3 border pt-3  ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
              <FaAngleLeft />
            </a>
            <a className="px-4 border  ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
              1{" "}
            </a>
            <a className="px-4 border  ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
              2{" "}
            </a>
            <a className="px-4 border bg-orange-500 ease-in-out duration-500 py-2 text-white text-sm font-bold">
              3{" "}
            </a>
            <a className="px-4 border  ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
              4{" "}
            </a>
            <a className="px-4 border ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
              5{" "}
            </a>
            <a className="px-3 pt-3 border ease-in-out duration-500 py-2 hover:bg-orange-500 hover:text-white text-sm font-bold">
              <FaAngleRight />{" "}
            </a>
          </div>
        </div>

        <BlogSection />
      </div>
    </>
  );
};

export default Page;
