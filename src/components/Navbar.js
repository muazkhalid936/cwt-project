"use client"
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <div className="mt-10 ml-4 flex justify-between mb-10">
        <div>
          <a href="/" className="font-black">
            <p>
              <span className="text-2xl text-orange-500">CW</span>
              <span className="text-2xl">T</span>
            </p>
          </a>
        </div>
        <ul className="flex justify-evenly gap-10 font-medium text-base">
          <li className="content-center">Home +</li>
          <li className="content-center">About us</li>
          <li className="content-center">Page +</li>
          <li className="content-center">Services +</li>
          <li className="content-center">Portfolio +</li>
          <li className="content-center">Contact Us</li>
          <li className="content-center">
            <IoMenu
              className="text-4xl items-center cursor-pointer"
              onClick={toggleDrawer}
            />
          </li>
        </ul>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDrawer}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform z-50 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "300px", transition: "0.5s" }}
      >
        <button onClick={closeDrawer} className="p-4">
          Close
        </button>
        <ul className="flex flex-col p-4 space-y-4">
          <li>Home</li>
          <li>About us</li>
          <li>Page</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
