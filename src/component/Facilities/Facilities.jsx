import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { DarkModeContext } from "../../DarkModeContext";

const facilities = [
  {
    title: "Central Library",
    description:
      "The Central Library of the institute is a well-designed building with a carpet area of 4500 sq.ft., presently consists of 500 nos. of titles, 6000 volumes of textbooks and 1700 volumes of reference books.",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/Library.JPG?v=1",
  },
  {
    title: "Gymnasium",
    description:
      "A modernized gymnasium is incorporated in the campus to unload the body from the stress and ailments of hectic schedules and speed-life.",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/Gym.JPG?v=1",
  },
  {
    title: "Hostel",
    description:
      "The spacious five-story U-shaped building encompasses a sprawling area of approximately 15,000 sq.ft., surrounded by serene scenic beauty.",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/2.png",
  },
  {
    title: "Classroom",
    description:
      "Spacious and modern classrooms equipped with the latest teaching aids provide an engaging learning environment for students.",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/img/Classroom.JPG?v=1",
  },
];

const FacilitiesCarousel = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="w-full p-6 z-0 text-justify">
      <h2
        className={`text-3xl font-semibold text-center ${
          darkMode ? "text-white" : "text-gray-800"
        }  mb-8`}
      >
        Facilities at SITM
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1 }, // Single slide on small screens
          768: { slidesPerView: 2 }, // Two slides on medium screens
          1024: { slidesPerView: 3 }, // Three slides on large screens
        }}
        className="mySwiper z-0"
      >
        {facilities.map((facility, index) => (
          <SwiperSlide key={index} className="flex justify-center w-full ">
            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              }  shadow-md rounded-lg overflow-hidden hover:shadow-lg 
            transition-shadow duration-300 w-full max-w-screen sm:max-w-[350px] h-[350px] flex flex-col`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-bold  mb-2">{facility.title}</h3>
                <p className="text-sm text-gray-400">{facility.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FacilitiesCarousel;
