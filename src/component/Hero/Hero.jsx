import React, { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import { GoArrowRight } from "react-icons/go";
import Cover from "../../assets/Hero.jpg";

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  return (
    <div
      className=" p-6 flex flex-col items-center justify-between h-[88vh] w-[100%]"
      style={{
        backgroundImage: `url('${Cover}')`, // Use the imported image
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundRepeat: "no-repeat", // Prevents repeating the image
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div
        className={`w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center
       md:items-start text-center md:text-left ${
         darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
       }   p-4 rounded-lg sm:m-2 m-0 `}
      >
        <h1 className="text-xl font-bold mb-4 sm:text-4xl ">Welcome to SITM</h1>
        <p className="text-sm sm:text-lg text-gray-500 mb-6">
          Join us to explore endless learning opportunities, connect with peers,
          and build a successful future.🏆🏆
        </p>
        <div className="flex gap-3 text-[] sm:text-lg">
          <button className="bg-rust-100 flex items-center gap-2 text-white py-2 px-4 rounded hover:bg-rust-200 transition duration-300">
            Learn More <GoArrowRight />
          </button>
          <button className="border-rust-100 flex items-center gap-2 border-[2px] text-rust-100 py-2 px-4 rounded hover:border-rust-200 hover:text-rust-200 transition duration-300">
            Apply Online <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
