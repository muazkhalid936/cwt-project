import React from "react";


import Service from "@/components/Service";
const Page = () => {
  return (
    <>
      <div
        className="flex w-full flex-col justify-center "
        style={{ backgroundColor: "#e8f1f9" }}
      >
        <div className=" py-10">
          <div className="text-3xl py-3 font-bold text-center fontt">My Services</div>
          <div className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4">
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
