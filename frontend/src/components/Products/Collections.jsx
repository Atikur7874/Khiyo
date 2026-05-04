import React from "react";
import fashionCollectionImg from "../../assets/fashionImg.avif";
import TerrariumCollectionImg from "../../assets/terrarium.jpg";

import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <section className=" py-16 px-4 lg:px-0">
      <div className=" container mx-auto flex flex-col md:flex-row gap-8 lg:px-4">
        {/**Fashion collection */}
        <div className=" relative flex-1">
          <img
            src={fashionCollectionImg}
            alt="Fashion Collection"
            className=" w-full h-[700px] object-cover"
          />
          <div className=" absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className=" text-2xl font-bold text-gray-900 mb-3">
              Fresh Fits
            </h2>
            <Link
              to="/collections/all?category=Top%20Wear"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/**Terrarium collection */}
        <div className=" relative flex-1">
          <img
            src={TerrariumCollectionImg}
            alt="terrarium Collection"
            className=" w-full h-[700px] object-cover"
          />
          <div className=" absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className=" text-2xl font-bold text-gray-900 mb-3">
              Terrarium Collection
            </h2>
            <Link to="/collections/all?category=Terrarium" className="text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
