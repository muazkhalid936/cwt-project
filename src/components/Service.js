import React from "react";
import "./service.css";
import { FaLaptopCode } from "react-icons/fa";

function Service() {
  return (
    <div class="services-box">
      <div class="count">
        <span>01</span>
      </div>
      <div class="flex laptop div justify-center">
        <FaLaptopCode  className="text-8xl laptop text-orange-500"/>{" "}
      </div>

      <h2 className="fontt font-bold">Web Design</h2>
      <p>
        In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at
        odio a felis commodo pulvinar quis eu neque.
      </p>
      <a class="read_details" href="services-details.html">
        View Details
      </a>
    </div>
  );
}

export default Service;
