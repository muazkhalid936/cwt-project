import About from "@/components/About";
import React from "react";
import Myservices from "@/components/Myservices";
import Call from "@/components/Call";
import Work from "@/components/Work";
import Blogs from "@/components/Blogs";
import ImageGallery from "@/components/ImageGallery";
import Testonomial from "@/components/Testonomial";
import Homegallery from "@/components/Homegallery";
import "./styles.css";
import Navbar2 from "@/components/Navbar2";
const Style02 = (showNavbar= true) => {
  return (
    <div>
      <Navbar2 />
      <div className="h-screen con">
        <div className=" flex justify-center">
          <p className=" text-3xl fontt font-bold text-white">Hello, I am Muaz Khalid</p>
          <div class="headers">


          </div>
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
