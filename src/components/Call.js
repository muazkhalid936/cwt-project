import React from "react";
import "@/app/globals.css";
import { MdLocalPhone } from "react-icons/md";

const Call = () => {
  return (
    <div className="flex call-cover justify-center w-full bg-black">
      <div className="bg-black ml-0 lg:ml-40 flex  px-0 items-center w-full max-w-screen-lg">
        <div className="text-center w-full lg:w-1/2 px-4 sm:px-8">
          <div className="py-10 text-3xl text-white fontt">
            Any Question You Have
          </div>
          <div className="font-bold text-3xl lg:text-6xl md:text-5xl text-white">
            +158 862 1252
          </div>
          <div className="flex justify-center mt-10">
            <div className="bg-orange-500 font-bold hover:bg-blue-600 ease-in-out duration-500 flex gap-2 text-white rounded-full py-5 px-10 sm:px-12 lg:px-16 justify-center text-center">
              <MdLocalPhone className="text-xl" />
              MAKE CALL
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/call.png" className="call-img" alt="Call" />
        </div>
      </div>
    </div>
  );
};

export default Call;
