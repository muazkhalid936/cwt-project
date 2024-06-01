import About from "@/components/About";
import "./globals.css";
import Myservices from "@/components/Myservices";
import FloatingX from "@/components/FloatingX";
import Call from "@/components/Call";
import Work from "@/components/Work";
import Blogs from "@/components/Blogs";
import ImageGallery from "@/components/ImageGallery";
import Testonomial from "@/components/Testonomial";

export default function Home() {
  return (
    <div className="">
      <div className="absolute ml-10  lg:-mt-20 2xl:-mt-40 left-0 top-1/2 transform -translate-y-1/2">
        <FloatingX />
      </div>
      <div
        style={{ backgroundColor: "#e8f1f9" }}
        className="flex flex-col lg:flex-row-reverse px-3 lg:px-0 xl:px-32 2xl:px-60 gap-0 w-full justify-between"
      >
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <img src="/man.png" className="h-96 img-hero mx-auto" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mx-4 lg:mx-2">
            <span className="text-xl font-roboto block mb-2">
              Hello, My name is Muaz Khalid
            </span>
            <span className="text-3xl lg:text-4xl font-black block mb-2">
              I'm a Professional Web Designer &
            </span>
            <span className="text-orange-500 text-3xl lg:text-4xl font-black block">
              WordPress Developer
            </span>
            <br />
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </span>
            <br />
            <button className="text-white bg-orange-500 font-bold px-12 py-4 my-3">
              Download CV
            </button>
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
    </div>
  );
}
