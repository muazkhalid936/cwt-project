import React from "react";

const Homegallery = () => {
  return (
    <div className="flex">
      {["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg"].map((src, index) => (
        <div key={index} className="relative group">
          <img className={`${index > 1 ? "hidden md:block" : ""} ${index > 4 ? "hidden lg:block" : ""}`} src={src} alt={`Image ${index + 1}`} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl transition-transform transform scale-0 group-hover:scale-100">
            +
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homegallery;
