import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaGraduationCap } from "react-icons/fa";
import { use } from "react";
import { DarkModeContext } from "../../DarkModeContext";
const achievementsData = [
  {
    icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    title: "50+ Awards",
    description: "Recognized for excellence in education and innovation.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-3xl" />,
    title: "10K+ Students",
    description: "Empowering students to achieve their dreams.",
  },
  {
    icon: <FaGraduationCap className="text-green-500 text-3xl" />,
    title: "95% Placements",
    description: "Ensuring bright futures with top industry opportunities.",
  },
];

const Achievements = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <motion.div
      className="mt-8 flex flex-wrap justify-center items-center gap-6 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {achievementsData.map((achievement, index) => (
        <motion.div
          key={index}
          className={` ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
          } p-6 rounded-lg shadow-lg
             flex flex-col items-center cursor-pointer gap-4 w-64 hover:scale-110 transition-transform duration-300`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex gap-2 flex-row sm:flex-col items-center">
            <div className="text-xl">{achievement.icon}</div>
            <div className="flex  sm:flex-col items-center">
              <h3 className="text-sm sm:text-lg font-bold">
                {achievement.title}
              </h3>
              <p
                className={`text-center hidden  sm:flex text-[12px] md:text-[14px] ${
                  darkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {achievement.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Achievements;
