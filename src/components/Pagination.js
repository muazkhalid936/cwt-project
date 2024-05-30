import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Pagination = () => {
  return (
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
  );
};

export default Pagination;
