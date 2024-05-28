import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <div className="h-auto">
        <div className="text-center py-20">
          <p className="text-3xl mb-2 font-bold">Latest Blogs</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </p>
        </div>
        <div className=" pb-10 gap-2 justify-center flex-wrap bg-white flex  px-0">
          <BlogCard i={1} />
          <BlogCard i={2} />

          <BlogCard i={3} />
        </div>
      </div>
    </>
  );
};

export default Blogs;
