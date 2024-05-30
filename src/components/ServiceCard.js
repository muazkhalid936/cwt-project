import React from "react";
import "@/app/globals.css";
import { MdOutlineComputer } from "react-icons/md";

const ServiceCard = () => {
  return (
    <div className="bg-white mt-10 asd shadow service-card overflow-hidden relative">
      <div className="absolute top-0 right-0 mt-2 mr-2 z-index-[-1]">
        <div className="bg-orange-500 circle text-right hover:z-10 -mt-20 -mr-20 w-40 h-40 rounded-full flex justify-center items-center">
          <span className="text-white text-3xl mt-10 mr-10 font-bold">01</span>
        </div>
      </div>
      <div className="flex justify-center hover:z-40 items-center mt-10">
        <MdOutlineComputer className="text-8xl text-orange-500" />
      </div>
      <div className="font-black text-xl text-center mt-4">Web Design</div>
      <div className="px-4 mt-2 text-center">
        In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at
        odio a felis commodo pulvinar quis eu neque.
      </div>
      <div className="my-10 text-center">
        <a className="text-white text-sm font-bold px-8 py-3 bg-orange-500 hover:text-orange-500 hover:bg-white ease-in-out duration-500">
          View Details
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
