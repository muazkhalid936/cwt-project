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
    <div className="relative bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto my-8 p-6 pl-20 flex items-center">
      <div className="absolute -left-10 top-1/2 transform -translate-y-1/2">
        <Image
          src={imageSrc}
          alt={name}
          width={80}
          height={80}
          className="rounded-full border-4 border-white"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-500 mb-2">{role}</p>
        <div className="text-yellow-500 mb-2">{renderStars(rating)}</div>
        <p className="text-gray-700">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
