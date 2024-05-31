'use client'
import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

  const cards = [
    {
      imageSrc: "/tes1.jpg",
      name: "Rachel Adams",
      role: "Regular Clients",
      rating: 5,
      testimonial: "We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
    },
    {
      imageSrc: "/tes2.jpg",
      name: "Rachel Adams",
      role: "Regular Clients",
      rating: 5,
      testimonial: "We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
    },
    {
      imageSrc: "/tes1.jpg",
      name: "Rachel Adams",
      role: "Regular Clients",
      rating: 5,
      testimonial: "We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills."
    }
  ];

  const renderCards = () => {
    if (isLargeScreen) {
      return (
        <>
          <TestCard {...cards[currentView - 1]} />
          <TestCard {...cards[currentView % cards.length]} />
        </>
      );
    } else {
      return <TestCard {...cards[currentView - 1]} />;
    }
  };

  return (
    <div className="py-20" style={{ backgroundColor: "#e8f1f9" }}>
      <div className="container mx-auto px-4">
        <div className="py-10">
          <div className="text-3xl py-3 font-bold text-center">My Testonomial</div>
          <div className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
            maximus est.
          </div>
        </div>
        <div className="relative overflow-hidden text-center">
          <TransitionGroup className={`grid gap-4 ${isLargeScreen ? "lg:grid-cols-2" : ""}`}>
            <CSSTransition key={currentView} timeout={500} classNames="card">
              <div className="flex justify-center">
                {renderCards()}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="flex justify-center mt-6">
          {isLargeScreen ? (
            <>
              <button
                onClick={() => setCurrentView(1)}
                className={`w-4 h-4 rounded-full mx-2 ${currentView === 1 ? 'bg-blue-500' : 'bg-gray-400'}`}
              ></button>
              <button
                onClick={() => setCurrentView(2)}
                className={`w-4 h-4 rounded-full mx-2 ${currentView === 2 ? 'bg-blue-500' : 'bg-gray-400'}`}
              ></button>
            </>
          ) : (
            cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentView(index + 1)}
                className={`w-4 h-4 rounded-full mx-2 ${currentView === index + 1 ? 'bg-blue-500' : 'bg-gray-400'}`}
              ></button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Testonomial;
