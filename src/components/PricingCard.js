import React from "react";
import "./pricing.css";
const PricingCard = () => {
  return (
    <>
      <div className="h-[60vh] border asd hover:-translate-y-5 ease-in-out duration-500 w-[45vh] overflow-hidden">
        <div className=" ss h-[40vh] w-[54vh] -ml-10  -mt-60 rounded-full z-10 group"></div>
        <div className="flex flex-col z-20 -mt-28">
          <span className="text-orange-500 text-center text-xl pp">Basic</span>
          <span className="text-3xl pp font-black text-center">$19.89</span>
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
    </>
  );
};

export default PricingCard;
