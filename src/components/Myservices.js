import React from "react";

import "./styles.css";
import ServiceCard from "@/components/ServiceCard";
const Page = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center "
        style={{ backgroundColor: "#e8f1f9" }}
      >
        <div className=" py-10">
          <div className="text-3xl py-3 font-bold text-center">My Services</div>
          <div className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <div className="grid lg:grid-cols-3 ml-20  md:grid-cols-2 grid-cols-1 gap-4">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
