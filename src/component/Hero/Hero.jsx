import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DarkModeContext } from "../../DarkModeContext";
import { GoArrowRight } from "react-icons/go";
import Cover from "../../assets/Hero.jpg";

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      className="p-6 flex flex-col items-center justify-between h-[88vh] w-[100%] overflow-hidden relative"
      style={{
        backgroundImage: `url('${Cover}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black bg-opacity-50" : "bg-white bg-opacity-20"
        }`}
      ></div>

      {/* Animated Content */}
      <motion.div
        ref={ref}
        className={`w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center
        md:items-start text-center md:text-left relative z-10 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        } p-4 rounded-lg sm:m-2 m-0`}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="text-xl font-bold mb-4 sm:text-4xl">
          Welcome to{" "}
          <span
            className=" font-bold bg-clip-text text-transparent bg-gradient-to-r from-rust-100 to-rust-200 cursor-pointer
          hover:bg-gradient-to-l delay-300 transition-all hover:scale-110
          "
          >
            SITM
          </span>
        </h1>
        <motion.p
          className="text-sm sm:text-lg text-gray-500 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Join us to explore endless learning opportunities, connect with peers,
          and build a successful future.🏆🏆
        </motion.p>
        <motion.div
          className="flex gap-3 sm:text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-rust-100 flex items-center gap-2 text-white py-2 px-4 rounded hover:bg-rust-200 transition duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Learn More <GoArrowRight />
          </motion.button>
          <motion.button
            className="border-rust-100 flex items-center gap-2 border-[2px] text-rust-100 py-2 px-4 rounded hover:border-rust-200 hover:text-rust-200 transition duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Apply Online <GoArrowRight />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
