import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import "./styles.css";
import Myservices from "@/components/Myservices";
import Service from "@/components/Service";
const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center fontt text-5xl font-bold">Services</div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className="font-bold text-gray-500">Conact Us</span>
          </div>
        </div>
      </div>

<div className="flex my-20 justify-center">

      <div className="grid lg:grid-cols-3   md:grid-cols-2 grid-cols-1 gap-4">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
</div>
      </div>

     
    </>
  );
};

export default Page;
