"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [isFirstDrawerOpen, setFirstDrawerOpen] = useState(false);
  const [isSecondDrawerOpen, setSecondDrawerOpen] = useState(false);

  const toggleFirstDrawer = () => {
    setFirstDrawerOpen(!isFirstDrawerOpen);
  };

  const toggleSecondDrawer = () => {
    setSecondDrawerOpen(!isSecondDrawerOpen);
  };

  const closeFirstDrawer = () => {
    setFirstDrawerOpen(false);
  };

  const closeSecondDrawer = () => {
    setSecondDrawerOpen(false);
  };

  return (
    <>
      <div className="mt-10 ml-10 lg:ml-4 bg-transparent px-3 xl:px-32  2xl:px-60 flex justify-between mb-4">
        <div>
          <a href="/" className="font-black">
            <p>
              <span className="text-2xl text-orange-500">CW</span>
              <span className="text-2xl">T</span>
            </p>
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-evenly gap-10 font-medium text-base">
            <li className="content-center">
              <div className="dropdown p-0 m-0 dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 hover:text-orange-500"
                >
                  Home +
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] gap-3 menu p-2 text-black shadow bg-base-100 w-52"
                  style={{ marginLeft: "-50px", marginBottom: "-30px" }}
                >
                  <li>
                    <a href="/">Home Style 01</a>
                  </li>
                  <li>
                    <a href="/Style02">Home Style 02</a>
                  </li>
                  <li>
                    <a>Home Style 03</a>
                  </li>
                  <li>
                    <a>Home Style 04</a>
                  </li>
                  <li>
                    <a>Home Style 05</a>
                  </li>
                  <li>
                    <a>Home Style 06</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="content-center">About us</li>
            <li className="content-center">Page +</li>
            <li className="content-center">Services +</li>
            <li className="content-center">Portfolio +</li>
            <li className="content-center">Contact Us</li>
            <li className="content-center">
              <IoMenu
                className="text-4xl items-center cursor-pointer"
                onClick={toggleFirstDrawer}
              />
            </li>
          </ul>
        </div>

        {isFirstDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeFirstDrawer}
          ></div>
        )}

        {isSecondDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSecondDrawer}
          ></div>
        )}

        {/* First Drawer */}
        <div
          className={`fixed overflow-y-auto top-0 right-0 h-full bg-white shadow-lg transition-transform transform z-50 ${
            isFirstDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "80%", maxWidth: "400px", transition: "0.5s" }}
        >
          <div className="bg-black flex justify-between">
            <div>
              <p className="text-white p-4 font-black">First Drawer</p>
            </div>
            <button onClick={closeFirstDrawer} className="p-4 text-white">
              Close
            </button>
          </div>
          <div>
            <div className="flex text-center justify-center my-10">
              <Image
                src={"/user.png"}
                className="rounded-full"
                width={200}
                height={200}
                alt="User Profile"
              />
            </div>
            <div className="ml-5">
              <div className="flex flex-col mb-5 gap-4">
                <label className="font-black text-2xl">Name : </label>
                <span>Muaz Khalid</span>
              </div>
              <div className="flex flex-col mb-5 gap-4">
                <label className="font-black text-2xl">Email : </label>
                <span>Muazkhalid936@gmail.com</span>
              </div>
              <div className="flex flex-col mb-5 gap-4">
                <label className="font-black text-2xl">Contact Info: </label>
                <span>+92 348 4600631</span>
              </div>
              <div className="flex flex-col mb-5 gap-4">
                <label className="font-black text-2xl">Address : </label>
                <span>4155 Mann Island, Liverpool L3, United Kingdom.</span>
              </div>
              <div className="flex flex-col mb-5 gap-4">
                <label className="font-black text-2xl">About Me : </label>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Drawer */}
        <div
          className={`fixed overflow-y-auto top-0 left-0 h-full bg-white shadow-lg transition-transform transform z-50 ${
            isSecondDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ width: "80%", maxWidth: "300px", transition: "0.5s" }}
        >
          <div>
            <div className="text-center my-8">
              <a href="/" className="font-black">
                <p>
                  <span className="text-2xl text-orange-500">CW</span>
                  <span className="text-2xl">T</span>
                </p>
              </a>
            </div>
            <ul className="flex flex-col justify-evenly font-bold text-base">
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300">
                Home
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300">
                About us
              </li>
              <hr />
              <li className="content-center active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 ml-2 my-3">
                Page
              </li>
              <hr />
              <li className="active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 content-center ml-2 my-3">
                Services
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300">
                Portfolio
              </li>
              <hr />
              <li className="content-center active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 ml-2 my-3">
                Contact Us
              </li>
              <hr />
            </ul>
          </div>
        </div>

        <div className="block mr-10 lg:hidden">
          <CgMenuRightAlt
            className="text-3xl cursor-pointer"
            onClick={toggleSecondDrawer}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
