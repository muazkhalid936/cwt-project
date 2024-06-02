import React from "react";

import "./styles.css";
import About from "@/components/About";
import Call from "@/components/Call";
import Testonomial from "@/components/Testonomial";
import Skills from "@/components/Skills";
import Homegallery from "@/components/Homegallery";
const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center text-5xl font-bold fontt">About Us</div>
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


       <Skills />
     <Call />
     <Testonomial />
     <Homegallery />
      </div>
    </>
  );
};

export default Page;
