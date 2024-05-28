import React from "react";
import ServiceCard from "./ServiceCard";

const Myservices = () => {
  return (
    <>
      <div className="h-auto pb-10" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="text-center py-20">
          <div className="font-bold text-3xl">My Services</div>
          <div className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </div>
        </div>
        <div className="flex  flex-wrap gap-3  justify-center">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
           <ServiceCard />
          <ServiceCard />
          <ServiceCard /> 
        </div>
      </div>
    </>
  );
};

export default Myservices;
