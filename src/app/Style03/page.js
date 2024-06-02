import React from "react";
import About from "@/components/About";
import Myservices from "@/components/Myservices";
import Call from "@/components/Call";
import Work from "@/components/Work";
import Blogs from "@/components/Blogs";
import ImageGallery from "@/components/ImageGallery";
import Testonomial from "@/components/Testonomial";
import Homegallery from "@/components/Homegallery";
import TypingEffect from "@/components/TypingEffect"
import "./styles.css";
import RootLayout from "../layout";

const Style02 = () => {
  return (
   


<div>
      <div className="h-screen con flex items-center justify-center">
        <div className="text-center">
          <p className=" fontt text-white font-bold text-3xl text-center"> Hello, I am Muaz Khalid</p>
          <p className="text-6xl lg:text-8xl text-white robot font-bold mt-4">
            <TypingEffect />
          </p>
          <div className="headers"></div>
        </div>
      </div>

      <About />
      <Myservices />
      <Work />
      <ImageGallery />
      <Call />
      <Testonomial />
      <Blogs />
      <Homegallery />
    </div>


  );
};

export default Style02;
