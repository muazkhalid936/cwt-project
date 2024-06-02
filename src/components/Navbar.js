"use client";
import React, { useState,useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import Image from "next/image";
import "@/app/globals.css"
const Navbar = () => {
  const [isFirstDrawerOpen, setFirstDrawerOpen] = useState(false);
  const [isSecondDrawerOpen, setSecondDrawerOpen] = useState(false);
  const [isHomeContentVisible, setHomeContentVisible] = useState(false);

  const [isAboutContentVisible, setAboutContentVisible] = useState(false);
  const [isPageContentVisible, setPageContentVisible] = useState(false);
  const [isServicesContentVisible, setServicesContentVisible] = useState(false);
  const [isPortfolioContentVisible, setPortfolioContentVisible] =
    useState(false);
  const [isContactContentVisible, setContactContentVisible] = useState(false);

  const toggleAboutContent = () =>
    setAboutContentVisible(!isAboutContentVisible);
  const togglePageContent = () => setPageContentVisible(!isPageContentVisible);
  const toggleServicesContent = () =>
    setServicesContentVisible(!isServicesContentVisible);
  const togglePortfolioContent = () =>
    setPortfolioContentVisible(!isPortfolioContentVisible);
  const toggleContactContent = () =>
    setContactContentVisible(!isContactContentVisible);

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

  const toggleHomeContent = () => {
    setHomeContentVisible(!isHomeContentVisible);
  };

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };



  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`fixed inset-x-0 top-0 z-50 bg-transparent px-3 xl:px-32 2xl:px-60 flex justify-between py-4 ${isFixed? 'navbar-fixed' : ''}`}>
       
        <div>
          <a href="/" className="font-black">
           <img src="/logo.png"/>
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-evenly gap-5 font-medium text-sm">
            <li className="content-center">
              <div className="dropdown p-0 m-0 dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 hover:text-orange-500"
                >
                 <a href="/">Home +</a> 
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
                    <a href="#">Home Style 03</a>
                  </li>
                  <li>
                    <a href="#">Home Style 04</a>
                  </li>
                  <li>
                    <a href="#">Home Style 05</a>
                  </li>
                  <li>
                    <a href="#">Home Style 06</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="content-center">
              <a href="/About">About us</a>
              </li>
            <li className="content-center">
              <div className="dropdown p-0 m-0 dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 hover:text-orange-500"
                >
                  Page +
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] gap-3 menu p-2 text-black shadow bg-base-100 w-52"
                  style={{ marginLeft: "-50px", marginBottom: "-30px" }}
                >
                  <li>
                    <a href="/About">About Us</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/Pricing">Pricing Plane</a>
                  </li>
                  <li>
                    <a href="/404">404 Error</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="content-center">
              <div className="dropdown p-0 m-0 dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 hover:text-orange-500"
                >
                  Services +
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] gap-3 menu p-2 text-black shadow bg-base-100 w-52"
                  style={{ marginLeft: "-50px", marginBottom: "-30px" }}
                >
                  <li>
                    <a href="/Services">Service</a>
                  </li>
                  <li>
                    <a href="/Service-details">Service Details</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="content-center">
              <div className="dropdown p-0 m-0 dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 hover:text-orange-500"
                >
                  Portfolio +
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] gap-3 menu p-2 text-black shadow bg-base-100 w-52"
                  style={{ marginLeft: "-50px", marginBottom: "-30px" }}
                >
                  <li>
                    <a href="/Portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/Portfolio2">Portfolio Column 2</a>
                  </li>
                  <li>
                    <a href="/Portfolio-details">Portfolio Details</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="content-center">
              <div className="dropdown p-0 m-0 dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 hover:text-orange-500"
                >
                  Blog +
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] gap-3 menu p-2 text-black shadow bg-base-100 w-52"
                  style={{ marginLeft: "-50px", marginBottom: "-30px" }}
                >
                  <li>
                    <a href="/BlogPage">Blog</a>
                  </li>
                  <li>
                    <a href="/BlogGrid">Blog Grid</a>
                  </li>
                  <li>
                    <a href="/BlogLeft">Blog Left Sidebar</a>
                  </li>
                  <li>
                    <a href="/BlogRight">Blog Right Sidebar</a>
                  </li>
                  <li>
                    <a href="/SingleBlog">Blog Details</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="content-center">
              <a
                href="/Contact"
                className="hover:text-orange-500 ease-in-out duration-500"
              >
                Contact Us
              </a>
            </li>
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

        <div
          className={`fixed overflow-y-auto top-0 right-0 h-full bg-white shadow-lg transition-transform transform z-50 ${
            isFirstDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "80%", maxWidth: "400px", transition: "0.5s" }}
        >
          <div className="bg-black flex justify-between">
            <div>
              <p className="text-white p-4 font-black">About Us</p>
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

        <div
      className={`fixed overflow-y-auto top-0 left-0 h-full bg-white shadow-lg transition-transform transform z-50 ${
        isSecondDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '80%', maxWidth: '300px', transition: '0.5s' }}
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
        <ul className="flex list-none flex-col justify-evenly font-bold text-base">
          <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
            <a onClick={() => toggleMenu('home')} href="/">
              Home
            </a>
          </li>
          {activeMenu === 'home' && (
            <ul className="ml-10 ease-in-out duration-500">
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="Style02">Home Style 01</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="#">Home Style 02</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="#">Home Style 03</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="#">Home Style 04</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="#">Home Style 05</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="#">Home Style 06</a>
              </li>
            </ul>
          )}
          <hr />
          <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
            <a onClick={() => toggleMenu('about')} href="About">
              About Us
            </a>
          </li>
          <hr />
          <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
            <a onClick={() => toggleMenu('page')} href="#">
              Page
            </a>
          </li>
          {activeMenu === 'page' && (
            <ul className="ml-10 ease-in-out duration-500">
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/About">About Us</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/Contact">Contact Us</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/Pricing">Pricing Plan</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/404">404 Error</a>
              </li>
            </ul>
          )}
          <hr />
          <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
            <a onClick={() => toggleMenu('services')} href="#">
              Services
            </a>
          </li>
          {activeMenu === 'services' && (
            <ul className="ml-10 ease-in-out duration-500">
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/Services">Services</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="Services-details">Services Details</a>
              </li>
            </ul>
          )}
          <hr />
          <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
            <a onClick={() => toggleMenu('portfolio')} href="#">
              Portfolio
            </a>
          </li>
          {activeMenu === 'portfolio' && (
            <ul className="ml-10 ease-in-out duration-500">
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="Portfolio">Portfolio</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="Portfolio2">Portfolio 2 Columns</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="Portfolio-details">Portfolio Details</a>
              </li>
            </ul>
          )}
          <hr />
          <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
            <a onClick={() => toggleMenu('contact')} href="#">
              Blog
            </a>
          </li>
          {activeMenu === 'contact' && (
            <ul className="ml-10 ease-in-out duration-500">
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="SingleBlog">Blog</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/BlogGrid">Blog Grid</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/BlogLeft">Blog Left Sidebar</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/BlogRight">Blog Right Sidebar</a>
              </li>
              <hr />
              <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
                <a href="/SingleBlog">Blog Details</a>
              </li>
            </ul>
          )}
          <hr />
          <li className="content-center ml-2 my-3 active:text-orange-500 hover:text-orange-500 ease-in-out duration-300 cursor-pointer">
            <a href="/Contact">Contact Us</a>
          </li>
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
