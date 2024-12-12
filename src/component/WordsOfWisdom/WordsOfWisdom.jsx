import React, { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext";

const WordsOfWisdom = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="w-full flex flex-col justify-center">
      <div
        className={`max-w-4xl p-6  shadow-lg rounded-lg my-2 justify-center
         ${
           darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
         }`}
      >
        <h2 className="text-lg font-semibold  mb-4 text-center">
          Advisor's Note
        </h2>
        <div className="flex flex-col items-center md:flex-row gap-4">
          {/* Image Section */}
          <div className="flex-shrink-0  ">
            <img
              src="https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/advisor.jpg?h=300"
              alt="Advisor"
              className="w-48 h-48 object-cover rounded-md"
            />
          </div>
          {/* Content Section */}
          <div>
            <p className=" mb-4 text-justify line-clamp-[7] text-sm ">
              It is my great pleasure to welcome you to Scholar’s Institute of
              Technology and Management (SITM), located at the Gateway of
              North-East, Guwahati. The Institute began functioning as a
              full-fledged organization in July, 2011 and it is a great moment
              that SITM has completed three years of journey that it has
              undertaken to impart quality and excellent technical education to
              the young engineering aspirants of our country. This Institution
              is promoted by the Scholar’s Academy Education Trust, founded on
              8th May, 2008 under the Indian Trust Act, 1882.
            </p>
            <p className="font-semibold ">
              - Dr. A.A.S.H. Barbhuiya, Advisor, SITM
            </p>
          </div>
        </div>
        {/* Read More Button */}
        <button
          className={`mt-4 md:text-[16px] text-[12px] px-4 py-2 bg-rust-100 ${
            darkMode ? "text-gray-700" : "text-white"
          }  rounded hover:bg-rust-200`}
        >
          Read More
        </button>
      </div>
      <div
        className={`max-w-4xl p-6  shadow-lg rounded-lg my-2 justify-center
         ${
           darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
         }`}
      >
        <h2 className="text-lg  font-semibold  mb-4 text-center">
          Director's Note
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center md:justify-start">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org//images/director.jpg?h=250"
              alt="Advisor"
              className="w-48 h-48 object-cover rounded-md"
            />
          </div>
          {/* Content Section */}
          <div>
            <p className=" mb-4 text-justify  line-clamp-[7] text-sm">
              Beloved Students and Respected Parents, Whole Hearted greeting to
              all my beloved students and their respected parents for choosing
              this SITM for their future building institution. This institution
              is known for it's excellent infrastructure spread over 10 acres of
              land; dedicated faculties for all streams of engineering and
              finally good placement for the purpose of which students have come
              from various parts of the Northeast. For the session of 2017-2018,
              the institution has been further geared up with fully dedicated
              faculties and staff. The foundation of our college holds a higher
              standard and expectation for each student. Our experienced and
              efficient faculties contribute to its strength with their
              unrelenting endeavor and commitment. In moulding the young minds,
              SITM is honest to have inspired learning, innovative thinking and
              creative problem solvers so that they can adapt with the current
              developments without question. Choosing SITM as your children's
              educational home is choosing the best facilities that will
              facilitate them to have an extra edge.
            </p>
            <p className="font-semibold ">- J. Lodh, Director, SITM</p>
          </div>
        </div>
        {/* Read More Button */}
        <button
          className={`mt-4 md:text-[16px] text-[12px] px-4 py-2 bg-rust-100 ${
            darkMode ? "text-gray-700" : "text-white"
          }  rounded hover:bg-rust-200`}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default WordsOfWisdom;
