// components/TestimonialCard.js

import React from "react";
import Image from "next/image";

const TestimonialCard = ({ imageSrc, name, role, rating, testimonial }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="relative flex-col bg-white shadow-md max-w-lg my-8 py-6 w-[50vh] lg:w-[120vh]  px-4 h-[40vh] lg:h-[55vh] flex items-center">
      <div className=" mt-1 lg:mt-10">
        <div className="absolute -left-6 lg:-left-10 mt-10  transform -translate-y-1/2">
          <Image
            src={imageSrc}
            alt={name}
            width={100}
            height={100}
            className=""
          />
        </div>

        <div className="ml-0 lg:-ml-40">
          <h2 className="text-lg fontt font-bold">{name}</h2>
          <p className="text-gray-500 mb-2">{role}</p>
          <div className="text-yellow-500 mb-2">{renderStars(rating)}</div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-gray-500 italic">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
