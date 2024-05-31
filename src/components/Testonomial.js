'use client'
import React, { useState } from "react";
import TestCard from "./TestCard";

const Testonomial = () => {
  const [currentView, setCurrentView] = useState(1);

  return (
    <div className="py-20" style={{ backgroundColor: "#e8f1f9" }}>
      <div className="py-10">
        <div className="text-3xl py-3 font-bold text-center">My Testonomial</div>
        <div className="text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          maximus est.
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        {currentView === 1 ? (
          <>
            <TestCard
              imageSrc="/tes1.jpg"
              name="Rachel Adams"
              role="Regular Clients"
              rating={5}
              testimonial="We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
            />
            <TestCard
              imageSrc="/tes2.jpg"
              name="Rachel Adams"
              role="Regular Clients"
              rating={5}
              testimonial="We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
            />
          </>
        ) : (
          <>
            <TestCard
              imageSrc="/tes2.jpg"
              name="Rachel Adams"
              role="Regular Clients"
              rating={5}
              testimonial="We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
            />
            <TestCard
              imageSrc="/tes1.jpg"
              name="Rachel Adams"
              role="Regular Clients"
              rating={5}
              testimonial="We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
            />
          </>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCurrentView(1)}
          className={`w-4 h-4 rounded-full mx-2 ${currentView === 1 ? 'bg-blue-500' : 'bg-gray-400'}`}
        ></button>
        <button
          onClick={() => setCurrentView(2)}
          className={`w-4 h-4 rounded-full mx-2 ${currentView === 2 ? 'bg-blue-500' : 'bg-gray-400'}`}
        ></button>
      </div>
    </div>
  );
};

export default Testonomial;
