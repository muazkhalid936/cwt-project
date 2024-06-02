import React from "react";
import BlogGridCard from "@/components/BlogGridCard";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Pagination from "@/components/Pagination";

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

      <div className="my-20 px-4">
        <div className=" flex justify-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center mx-auto">
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
            <div className="flex justify-center">
              <BlogGridCard i={3} />
            </div>
            <div className="flex justify-center">
              <BlogGridCard i={5} />
            </div>
            <div className="flex justify-center">
              <BlogGridCard i={1} />
            </div>
          </div>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default Page;
