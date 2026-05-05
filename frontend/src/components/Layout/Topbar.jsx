import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="bg-[#8BCA3D] text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaFacebook className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We are providing most beautiful Terrarium in Bangladesh!</span>
        </div>
        <div className="text-sm hidden text-center md:block">
          <a href="tel:+8801310283671" className="hover:text-gray-300">
            +88013001442
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
