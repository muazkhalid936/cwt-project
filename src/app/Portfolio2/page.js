"use client";

import { FaRegEye } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useState } from "react";

const images = [
  {
    src: "/images/1.jpg",
    categories: ["web", "all"],
    caption: "Creative Design",
  },
  {
    src: "/images/2.jpg",
    categories: ["web", "all"],
    caption: "Creative Design",
  },
  {
    src: "/images/3.jpg",
    categories: ["development", "all"],
    caption: "Creative Design",
  },
  {
    src: "/images/4.jpg",
    categories: ["development", "all"],
    caption: "Creative Design",
  },
  {
    src: "/images/5.jpg",
    categories: ["apps", "all"],
    caption: "Creative Design",
  },
  {
    src: "/images/6.jpg",
    categories: ["apps", "all"],
    caption: "Creative Design",
  },
  {
    src: "/images/7.jpg",
    categories: ["web", "all"],
    caption: "Creative Design",
  },
  {
    src: "/images/8.jpg",
    categories: ["development", "all"],
    caption: "Creative Design",
  },
];

const ImageGallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.categories.includes(filter));

  return (
    <div className="p-5">
      <div className="flex justify-center">
        <div className="mb-5 text-center border px-10 py-2 rounded-full">
          <button
            onClick={() => setFilter("all")}
            className={`mx-2 px-4 py-2 rounded-full transition duration-300 ${
              filter === "all"
                ? "bg-gradient-to-r from-orange-400 to-red-800 text-white"
                : "bg-transparent text-black"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`mx-2 px-4 py-2 rounded-full transition duration-300 ${
              filter === "web"
                ? "bg-gradient-to-r from-orange-400 to-red-800 text-white"
                : "bg-transparent text-black"
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setFilter("development")}
            className={`mx-2 px-4 py-2 rounded-full transition duration-300 ${
              filter === "development"
                ? "bg-gradient-to-r from-orange-400 to-red-800 text-white"
                : "bg-transparent text-black"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setFilter("apps")}
            className={`mx-2 px-4 py-2 rounded-full transition duration-300 ${
              filter === "apps"
                ? "bg-gradient-to-r from-orange-400 to-red-800 text-white"
                : "bg-transparent text-black"
            }`}
          >
            Apps
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 transition duration-500">
        {filteredImages.map((image, index) => (
          <div key={index} className="relative w-96 h-64 overflow-hidden group">
            <img
              src={image.src}
              alt={`Image ${index}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>{image.caption}</span>
              <div className="flex mt-2 space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black"
                >
                  <FaRegEye />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black"
                >
                  <FiLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
