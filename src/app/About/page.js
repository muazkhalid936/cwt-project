import React from "react";

import "./styles.css";
import About from "@/components/About";
import Call from "@/components/Call";
import Testonomial from "@/components/Testonomial";
import Navbar from "@/components/Navbar";
const Page = () => {
  return (
    <>
    <Navbar />
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center text-5xl font-bold">About Us</div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className="font-bold text-gray-500">About</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <About />


        <MySkills />
     <Call />
     <Testonomial />
      </div>
    </>
  );
};

export default Page;
