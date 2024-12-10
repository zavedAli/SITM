import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full p-6 flex flex-col md:flex-row items-center justify-between bg-cover bg-center bg-opacity-[0.2]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", // Replace with your image URL
      }}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/sitm.jpg" // Replace with your image URL
          alt="Hero Image"
          className="w-full max-w-sm object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left bg-white  p-4 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to SITM
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Join us to explore endless learning opportunities, connect with peers,
          and build a successful future.
        </p>
        <div className="flex gap-3">
          <button className="bg-rust-100 text-white py-2 px-4 rounded hover:bg-rust-200 transition duration-300">
            Learn More
          </button>
          <button className="border-rust-100 border-[2px] text-rust-100 py-2 px-4 rounded hover:border-rust-200 hover:text-rust-200 transition duration-300">
            Apply Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
