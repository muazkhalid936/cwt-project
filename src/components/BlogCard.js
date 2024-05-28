import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";

const BlogCard = () => {
  return (
    <div className="card w-60 md:w-80 lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/1.jpg" alt="Shoes" />
      </figure>
      <div className="h-1 bg-orange-500 w-full"></div>
      <div className="card-body p-4">
        <div className=" flex justify-between">
          <div className="flex gap-4">
            <div className="flex ">
              <div className="text-center">
                <FaUser className="text-orange-500 text-xl" />
              </div>
              Admin
            </div>
            <div className="flex">
              <div>
                <FaTags className="text-orange-500 text-xl" />
              </div>
              Technology
            </div>
          </div>

          <span className=" bg-orange-500 text-center -mt-5 -mr-4 text-white h-20 w-20">
            <span className="text-3xl text-center  mt-2 font-bold">20</span>
            <br />
            OCT
          </span>
        </div>

        <h2 className="card-title">
          Five Ways to Develop a World Class Sales Operations
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore...
        </p>
        <div className="card-actions justify-end">
          <div className="bg-orange-500 font-bold hover:bg-blue-600  ease-in-out duration-500 flex gap-2 text-white rounded-full  py-5 w-32 justify-center text-center">
            READ DETAILS
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
