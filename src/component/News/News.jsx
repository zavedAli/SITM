import React, { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext";

const newsArticles = [
  {
    title: "SITM Welcomes New Batch of Students",
    description:
      "The institute is excited to start the new academic session with the arrival of freshers, bringing a wave of enthusiasm and new talent.",
    date: "December 10, 2024",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/13TH%20FOUNDATION%20DAY/WhatsApp%20Image%202023-08-09%20at%2011.51.14.jpeg",
  },
  {
    title: "Annual Sports Meet Highlights",
    description:
      "The annual sports meet was a success, with students showcasing their athletic talents in various sports events and competitions.",
    date: "November 25, 2024",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/WhatsApp%20Image%202023-07-10%20at%2013.56.31.jpeg",
  },
  {
    title: "Tech Symposium 2024 Announced",
    description:
      "SITM will host its annual Tech Symposium, inviting speakers from top tech companies and universities to discuss the latest trends in technology.",
    date: "November 15, 2024",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/WhatsApp%20Image%202023-06-07%20at%2016.06.16%20(1).jpeg",
  },
  {
    title: "New Research Project Launched",
    description:
      "A new research project focusing on renewable energy solutions has been launched, with students and faculty collaborating on innovative ideas.",
    date: "October 30, 2024",
    image:
      "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/gallery/sugam%20bharat%20sitm.jpg",
  },
];

const News = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`w-full p-6 ${darkMode ? "bg-gray-800 text-white" : ""}`}>
      <h2 className="text-3xl font-semibold text-center  mb-6">Latest News</h2>
      <div className="space-y-6">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg flex p-4 cursor-pointer  ${
              darkMode ? "bg-gray-900 text-gray-400" : ""
            }`}
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-24 w-24 object-cover rounded-md mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold  mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {article.description}
              </p>
              <span className="text-xs text-gray-500">{article.date}</span>
              <a
                href="#"
                className="text-blue-500 text-sm ml-2 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a
          href="#more-news"
          className="inline-block bg-rust-100 text-white px-4 py-2 rounded hover:bg-rust-200 transition duration-300"
        >
          More News
        </a>
      </div>
    </div>
  );
};

export default News;
