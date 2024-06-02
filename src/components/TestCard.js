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
    <div className="relative bg-white rounded-lg shadow-md max-w-lg my-8 p-6 pl-20 h-[30vh] flex items-center">
      <div className="absolute -left-10  transform -translate-y-1/2">
        <Image
          src={imageSrc}
          alt={name}
          width={100}
          height={100}
          className=""
        />
      </div>
      <div>
        <h2 className="text-lg fontt font-bold">{name}</h2>
        <p className="text-gray-500 mb-2">{role}</p>
        <div className="text-yellow-500 mb-2">{renderStars(rating)}</div>
        <p className="text-gray-700">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
