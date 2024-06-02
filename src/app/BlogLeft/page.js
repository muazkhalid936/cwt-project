import React from "react";
import BlogGridCard from "@/components/BlogGridCard";
import "./styles.css";
import BlogSection from "@/components/BlogSection";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Pagination from "@/components/Pagination";
const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center fontt text-5xl font-bold">
            Blog Left Sidebar
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className=" font-bold text-gray-600">Blog Left Sidebar</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-center px-0 md:px-10 lg:mx-auto  lg:flex-row-reverse mx-2 my-20">
        <div className="w-4/3 lg:w-p1 mx-auto lg:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  justify-center mx-auto">
            <div className="flex justify-center">
              <BlogGridCard i={1} />
            </div>
            <div className="flex justify-center">
              <BlogGridCard i={2} />
            </div>
            <div className="flex justify-center">
              <BlogGridCard i={3} />
            </div>
            <div className="flex justify-center">
              <BlogGridCard i={4} />
            </div>
            <div className="flex justify-center">
              <BlogGridCard i={5} />
            </div>
            <div className="flex justify-center">
              <BlogGridCard i={6} />
            </div>
          </div>

          <Pagination />
        </div>

        <BlogSection />
      </div>
    </>
  );
};

export default Page;
