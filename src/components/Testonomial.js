'use client'
import React, { useState, useEffect } from "react";
import TestCard from "./TestCard";
import "./testonomial.css";

const Testonomial = () => {
  const [currentView, setCurrentView] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="py-20" style={{ backgroundColor: "#e8f1f9" }}>
      <div className="container mx-auto px-4">
        <div className="py-10">
          <div className="text-3xl py-3 font-bold text-center">
            My Testonomial
          </div>
          <div className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </div>
        </div>
        <div className="flex justify-center">
          {isLargeScreen? (
            <div className="flex gap-20 flex-row">
              <TestCard
                imageSrc={"/tes1.jpg"}
                name={"Rachel Adams"}
                role={"Regular Clients"}
                rating={5}
                testimonial={
                  "We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
                }
              />
              <TestCard
                imageSrc={"/tes2.jpg"}
                name={"Rachel Adams"}
                role={"Regular Clients"}
                rating={5}
                testimonial={
                  "We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
                }
              />
             
            </div>
          ) : (
            <div className="flex gap-20 flex-row">
              <TestCard
                imageSrc={"/tes1.jpg"}
                name={"Rachel Adams"}
                role={"Regular Clients"}
                rating={5}
                testimonial={
                  "We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
                }
              />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          {isLargeScreen? (
            <div>
              <button
                className={`w-4 h-4 bf p-2 rounded-full mx-2 ${
                  currentView === 1? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={() => toggle(1)}
              ></button>
              <button
                className={`w-4 h-4 bf p-2 rounded-full mx-2 ${
                  currentView === 2? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={() => toggle(2)}
              ></button>
            </div>
          ) : (
            <div>
              <button
                className={`w-4 h-4 bf p-2 rounded-full mx-2 ${
                  currentView === 1? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={() => toggle(1)}
              ></button>
              <button
                className={`w-4 h-4 bf p-2 rounded-full mx-2 ${
                  currentView === 2? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={() => toggle(2)}
              ></button>
              <button
                className={`w-4 h-4 bf p-2 rounded-full mx-2 ${
                  currentView === 3? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={() => toggle(3)}
              ></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testonomial;