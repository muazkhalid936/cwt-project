import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <div className="h-screen bg-gray-400 flex justify-center flex-wrap px-5">
        <BlogCard />
        <BlogCard />
    
        <BlogCard />
      </div>
    </>
  );
};

export default Blogs;
