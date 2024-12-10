import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const campusImages = [
  {
    title: "Central Library",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/Library.JPG?v=1",
  },
  {
    title: "Gymnasium",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/Gym.JPG?v=1",
  },
  {
    title: "Hostel",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/2.png",
  },
  {
    title: "Classroom",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/Classroom.JPG?v=1",
  },
  {
    title: "experiment",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/home_slider/O.jpg",
  },
  {
    title: "camputer lab",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/home_slider/M.jpg",
  },
  {
    title: "playground",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/Playground.JPG",
  },
  {
    title: "e&c",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/home_slider/S.jpg",
  },
];

const CampusTour = () => {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState("down");
  const animation = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine scroll direction
      if (window.scrollY > lastScrollY) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (direction === "down") {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0.5, y: 10, transition: { duration: 0.5 } });
    }
  }, [direction, animation]);

  return (
    <div className="w-full p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Campus Tour
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campusImages.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={animation}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CampusTour;
