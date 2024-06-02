import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className=" flex justify-center gap-5 flex-col text-center">
        <div className="flex justify-center">
          <img src="/error.png" />
        </div>
        <div className=" text-red-500 text-5xl font-bold">Sorry !</div>
        <div className="text-5xl font-bold">This page can't be found.</div>
        <div className="">
          The Page you're looking for isn't available. Try with another page or
          use the go home button below
        </div>
        <div className="flex justify-center">
          <div className="bg-orange-500 rounded-full font-bold text-white py-4 px-4">
            BACK TO HOME
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
