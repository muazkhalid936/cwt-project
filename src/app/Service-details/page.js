import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

import "./styles.css";

const Page = () => {
  return (
    <>
      <div className="h-2/3 py-36" style={{ backgroundColor: "#e8f1f9" }}>
        <div className="flex flex-col justify-center">
          <div className="text-center text-5xl font-bold">
            Our Services Details
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>/</span>
            <span className="font-medium">Services Details</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-center px-0 md:px-10 lg:mx-auto lg:flex-row mx-2 my-20">
        <div className="w-4/3 xl:w-port1 lg:port1md mx-auto lg:mx-0">
          <div className="border">
            <div>
              <img src="/service.jpg" className="w-full" alt="Blog Main" />
            </div>

            <div className="mx-5">
              <p className="text-4xl my-5  px-0 font-bold">Web Development</p>

              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam
                nulla iusto alias est voluptatum quibusdam sequi possimus
                cupiditate Error pariatur voluptate facere in consectetur fugit
                perspiciatis labore iure tempora Soluta nam tempora unde
                corporis perspiciatis atque error voluptatibus odit ad possimus
                voluptates hic alias expedita ab voluptas dolores necessitatibus
                iste modi sed ut dolorum laborum minima Suscipit rem dolor ipsam
                unde quos Magnam deleniti aut odio dolorem.
              </p>
              <p className="text-4xl my-5 px-0 font-bold">How To Work?</p>

              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam
                nulla iusto alias est voluptatum quibusdam sequi possimus
                cupiditate Error pariatur voluptate facere in consectetur fugit
                perspiciatis labore iure tempora Soluta nam tempora unde
                corporis perspiciatis atque error.
              </p>

              <ul className="list-disc font-medium text-black ml-10 my-5 leading-loose">
                <li>Engine oil level should be regularly checked</li>
                <li>
                  Variou version have evolved over the year sometimes accident.
                </li>
                <li>Many desktop publishing packages and web page editors.</li>
                <li>Industry' standard dummy text ever since the type book.</li>
                <li>
                  It is a long established fact that reader will be distracted
                  content.
                </li>
              </ul>

              <p className="text-4xl my-5 px-0 font-bold">Why Choose Us?</p>

              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus doloribus, sit iure iusto mollitia in cumque
                tempore obcaecati dolores dolorem tenetur autem suscipit
                inventore! Expedita error obcaecati repudiandae nisi ex quisquam
                ipsam quam! Ut soluta iusto est assumenda architecto! Quas eaque
                odio sed cupiditate fugiat fuga impedit deserunt, consequatur
                modi.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full  lg:w-port2 px-5  lg:px-0 flex gap-2 flex-col ">
          <div className=" w-full lg:w-p2 px-5  lg:px-0 flex gap-2 flex-col ">
            <div className=" border w-full">
              <div className=" flex my-5">
                <div className=" mt-2 w-3 h-2 bg-black"></div>{" "}
                <h2 className="ml-5 font-medium">Our Services</h2>
              </div>
              <div className="mx-10 flex flex-col mb-3">
                <div className="flex bb justify-between ease-in-out duration-700 bg-gray-100 hover:bg-orange-500 pt-1 pb-2 px-2 group">
                  <div className="flex mt-2 ease-in-out duration-700 ">
                    <div className="ml-4 transition-transform transform group-hover:translate-x-2 text-black font-bold group-hover:text-white">
                      Web Design
                    </div>
                  </div>
                  <div>
                    <FaAngleDoubleRight className="mt-3" />
                  </div>
                </div>
              </div>
              <div className="mx-10 flex flex-col mb-3">
                <div className="flex bb justify-between ease-in-out duration-700 bg-gray-100 hover:bg-orange-500 pt-1 pb-2 px-2 group">
                  <div className="flex mt-2 ease-in-out duration-700 ">
                    <div className="ml-4 transition-transform transform group-hover:translate-x-2 text-black font-bold group-hover:text-white">
                      Web Development
                    </div>
                  </div>
                  <div>
                    <FaAngleDoubleRight className="mt-3" />
                  </div>
                </div>
              </div>
              <div className="mx-10 flex flex-col mb-3">
                <div className="flex bb justify-between ease-in-out duration-700 bg-gray-100 hover:bg-orange-500 pt-1 pb-2 px-2 group">
                  <div className="flex mt-2 ease-in-out duration-700 ">
                    <div className="ml-4 transition-transform transform group-hover:translate-x-2 text-black font-bold group-hover:text-white">
                      Apps Design
                    </div>
                  </div>
                  <div>
                    <FaAngleDoubleRight className="mt-3" />
                  </div>
                </div>
              </div>
              <div className="mx-10 flex flex-col mb-3">
                <div className="flex bb justify-between ease-in-out duration-700 bg-gray-100 hover:bg-orange-500 pt-1 pb-2 px-2 group">
                  <div className="flex mt-2 ease-in-out duration-700 ">
                    <div className="ml-4 transition-transform transform group-hover:translate-x-2 text-black font-bold group-hover:text-white">
                      UI/UX Design
                    </div>
                  </div>
                  <div>
                    <FaAngleDoubleRight className="mt-3" />
                  </div>
                </div>
              </div>
              <div className="mx-10 flex flex-col mb-3">
                <div className="flex bb justify-between ease-in-out duration-700 bg-gray-100 hover:bg-orange-500 pt-1 pb-2 px-2 group">
                  <div className="flex mt-2 ease-in-out duration-700 ">
                    <div className="ml-4 transition-transform transform group-hover:translate-x-2 text-black font-bold group-hover:text-white">
                      Software Development
                    </div>
                  </div>
                  <div>
                    <FaAngleDoubleRight className="mt-3" />
                  </div>
                </div>
              </div>
              <div className="mx-10 flex flex-col mb-3">
                <div className="flex bb justify-between ease-in-out duration-700 bg-gray-100 hover:bg-orange-500 pt-1 pb-2 px-2 group">
                  <div className="flex mt-2 ease-in-out duration-700 ">
                    <div className="ml-4 transition-transform transform group-hover:translate-x-2 text-black font-bold group-hover:text-white">
                      User Interface Design
                    </div>
                  </div>
                  <div>
                    <FaAngleDoubleRight className="mt-3" />
                  </div>
                </div>
              </div>
              <div className="mx-10 flex flex-col mb-3">
                <div className="flex bb justify-between ease-in-out duration-700 bg-gray-100 hover:bg-orange-500 pt-1 pb-2 px-2 group">
                  <div className="flex mt-2 ease-in-out duration-700 ">
                    <div className="ml-4 transition-transform transform group-hover:translate-x-2 text-black font-bold group-hover:text-white">
                      Digital Marketing
                    </div>
                  </div>
                  <div>
                    <FaAngleDoubleRight className="mt-3" />
                  </div>
                </div>
              </div>
            </div>

            <div className=" border w-full">
              <div className=" flex my-5">
                <div className=" mt-2 w-3 h-2 bg-black"></div>{" "}
                <h2 className="ml-5 font-medium">My Portfolio</h2>
              </div>

              <div className="grid grid-cols-2 mx-6 gap-2">
                <img src="/images/1.jpg" />
                <img src="/images/2.jpg" />
                <img src="/images/3.jpg" />
                <img src="/images/4.jpg" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
