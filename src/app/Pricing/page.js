import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import "./styles.css";
import PricingCard from "@/components/PricingCard";
const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center text-5xl font-bold">Pricing Plane</div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className="font-bold text-gray-500">Pricing</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col">
        <div className="my-10">
          <div className=" text-center font-bold text-3xl  ">Pricing Plane</div>
          <div className=" text-center mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </div>
        </div>
<div className="flex justify-center">

        <div className="py-10 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3 ">
         
         

        <div className="h-[60vh] border asd hover:-translate-y-5 ease-in-out duration-500 w-[45vh] overflow-hidden">
        <div className=" ss h-[40vh] w-[54vh] -ml-10  -mt-60 rounded-full z-10 group"></div>
        <div className="flex flex-col z-20 -mt-28">
          <span className="text-orange-500 text-center text-xl pp">Basic</span>
          <span className="text-3xl mt-2 pp font-black text-center">$19.89</span>
        </div>

        <div className="text-center btm pb-3 mt-20">
          Basic Listing Submission
        </div>
        <div className="text-center btm pb-3 mt-3">One Listing </div>

        <div className="text-center btm pb-3 mt-3">30 Days Availability</div>

        <div className="text-center btm pb-3 mt-3">Limited Support</div>

        <div className="text-center btm pb-3 mt-3">Accept Reviews</div>

        <div className="text-center btm pb-3 mt-3">Edit Your Listing </div>
        <div className="flex justify-center">
          <div className="text-center py-2 rounded-full mt-4 px-4 bg-orange-500 text-white">
            Get Started{" "}
          </div>
        </div>
      </div>




      <div className="h-[60vh] border asd hover:-translate-y-5 ease-in-out duration-500 w-[45vh] overflow-hidden">
        <div className=" bg-orange-500 h-[40vh] w-[54vh] -ml-10  -mt-60 rounded-full z-10 group"></div>
        <div className="flex flex-col z-20 -mt-28">
          <span className=" text-center text-xl text-white">Standard</span>
          <span className="mt-2 text-3xl text-white font-black text-center">$99.89</span>
        </div>

        <div className="text-center btm pb-3 mt-20">
          Basic Listing Submission
        </div>
        <div className="text-center btm pb-3 mt-3">One Listing </div>

        <div className="text-center btm pb-3 mt-3">30 Days Availability</div>

        <div className="text-center btm pb-3 mt-3">Limited Support</div>

        <div className="text-center btm pb-3 mt-3">Accept Reviews</div>

        <div className="text-center btm pb-3 mt-3">Edit Your Listing </div>
        <div className="flex justify-center">
          <div className="text-center py-2 rounded-full mt-4 px-4 bg-orange-500 text-white">
            Get Started{" "}
          </div>
        </div>
      </div>






      <div className="h-[60vh] border asd hover:-translate-y-5 ease-in-out duration-500 w-[45vh] overflow-hidden">
        <div className=" ss h-[40vh] w-[54vh] -ml-10  -mt-60 rounded-full z-10 group"></div>
        <div className="flex flex-col z-20 -mt-28">
          <span className="text-orange-500 text-center text-xl pp">Premium</span>
          <span className="text-3xl pp font-black text-center mt-2">$119.89</span>
        </div>

        <div className="text-center btm pb-3 mt-20">
          Basic Listing Submission
        </div>
        <div className="text-center btm pb-3 mt-3">One Listing </div>

        <div className="text-center btm pb-3 mt-3">30 Days Availability</div>

        <div className="text-center btm pb-3 mt-3">Limited Support</div>

        <div className="text-center btm pb-3 mt-3">Accept Reviews</div>

        <div className="text-center btm pb-3 mt-3">Edit Your Listing </div>
        <div className="flex justify-center">
          <div className="text-center py-2 rounded-full mt-4 px-4 bg-orange-500 text-white">
            Get Started{" "}
          </div>
        </div>
      </div>





        </div>
</div>
      </div>
    </>
  );
};

export default Page;
