"use client";

import { FaRegEye } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useState } from "react";
import "./styles.css";
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

<>
    <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
    <div className="flex flex-col justify-center">
      <div className="text-center text-5xl font-bold">Portfolio 02 Column</div>
      <div className="flex justify-center gap-3 mt-10">
        <a href="/" className="font-bold">
          Home
        </a>
        <span>/</span>
        <span className="font-bold text-gray-500">Portfolio 02 Column</span>
      </div>
    </div>
  </div>

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
            className={`mx-2 px-4 py-2 rounded-full ease-in-out duration-500 ${
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
      <div className="flex flex-wrap justify-center gap-5 ease-in-out duration-500">
        {filteredImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              src={image.src}
              alt={`Image ${index}`}
              className="img-w object-cover transition-transform duration-500 "
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

      <div class="flex items-center justify-center my-10 bg-gray-100">
        <button
          type="button"
          class="flex items-center px-4 py-4 hover:bg-blue-500 hover:-translate-y-2 ease-in-out duration-500 bg-orange-500 text-white font-semibold rounded-full shadow-md"
          disabled
        >
          Processing
          <svg class="animate-spin h-5 w-5 ml-3" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              stroke-width="4"
              fill="none"
              stroke-linecap="round"
            ></circle>
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    </>
  );
};

export default ImageGallery;
