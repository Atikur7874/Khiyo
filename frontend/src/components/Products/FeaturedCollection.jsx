import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/terrarium.jpg";
const FeaturedCollection = () => {
  return (
    <section className=" py-16 px-4 lg:px-0">
      <div className=" container mx-auto flex  flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        <div className=" lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className=" text-lg font-semibold text-gray-700 mb-2">
            Explore The Nature
          </h2>
          <h2 className=" text-4xl lg:text-5xl font-bold mb-6">
            Bring the calm of nature into your home — one terrarium at a time.
          </h2>
          <p className=" text-lg text-gray-600 mb-6">
            Transform your space with handcrafted terrariums that blend natural
            beauty and modern design. Each piece is a self-sustaining world of
            green, made to bring tranquility, style, and a touch of nature into
            your everyday life.
          </p>
          <Link
            to="/collections/terrarium"
            className=" bg-black text-white px-6 py-3
         rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
        {/**right content */}
        <div className=" lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className=" w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl "
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
