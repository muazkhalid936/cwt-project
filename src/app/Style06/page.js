import React from "react";
import About from "@/components/About";
import Myservices from "@/components/Myservices";
import Call from "@/components/Call";
import Work from "@/components/Work";
import Blogs from "@/components/Blogs";
import ImageGallery from "@/components/ImageGallery";
import Testonomial from "@/components/Testonomial";
import Homegallery from "@/components/Homegallery";
import TypingEffect from "@/components/TypingEffect";
import "./styles.css";
import RootLayout from "../layout";

const Style02 = () => {
  return (
    <div>
      <div className="carousel style6 w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/bg4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/bg2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/bg3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
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
