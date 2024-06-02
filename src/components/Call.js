import React from "react";
import "@/app/globals.css";
import { MdLocalPhone } from "react-icons/md";

const Call = () => {
  return (
    <div className=" flex justify-center bg-black">
      <div className="bg-black  flex   p-0 lg:pl-60 items-center">
        <div className="text-center textarea1">
          <div className="py-10 text-3xl text-white fontt">
            Any Question You Have
          </div>
          <div className="font-bold  text-6xl lg:text-8xl md:text-7xl text-white">
            +158 862 1252
          </div>
          <div className=" flex justify-center mt-10">
            <div className="bg-orange-500 font-bold hover:bg-blue-600  ease-in-out duration-500 flex gap-2 text-white rounded-full  py-5 w-40 justify-center text-center">
              <div>
                <MdLocalPhone className=" m-0 p-0 text-xl" />
              </div>
              MAKE CALL
            </div>
          </div>
        </div>
        <div className="call-img-cont hidden  md:hidden lg:block">
          <img src="/call.png" className="call-img" />
        </div>
      </div>
    </div>
  );
};

export default Call;
