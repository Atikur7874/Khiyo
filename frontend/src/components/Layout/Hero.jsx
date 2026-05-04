import React from "react";
import heroImg from "../../assets/heroImg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" relative">
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[600px] lg:h-[750px] object-cover "
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className=" text-center text-white p-6">
          <h1 className=" text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Natural & <br /> Trendy
          </h1>
          <p className=" text-sm tracking-tighter md:text-lg mb-6">
            Grow Green. Wear Bold. <br /> Discover terrariums & clothing that
            breathe life into your space and wardrobe.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
