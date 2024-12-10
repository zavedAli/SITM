import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { GoSidebarCollapse } from "react-icons/go";

const SidebarTabs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const tabs = [
    { name: "Words of Wisdom", id: "WordsOfWisdom" },
    { name: "Facilities", id: "Facilities" },
    { name: "News", id: "News" },
    { name: "MoU", id: "MoU" },
    { name: "Recent Activity", id: "RecentActivity" },
    { name: "Campus Tour", id: "CampusTour" },
    { name: "Recruiters", id: "Recruiters" },
    { name: "Apply Online", id: "ApplyOnline" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false); // Close sidebar on mobile
  };

  const detectActiveSection = () => {
    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(tab.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", detectActiveSection);
    return () => {
      window.removeEventListener("scroll", detectActiveSection);
    };
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-[100vh] bg-rust-300 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0 z-20 rounded-lg md:mx-1 md:mt-1`}
      >
        <div className=" p-4 flex flex-col items-center relative"> logo</div>
        <div className="h-[1px] w-[100%] bg-slate-400"></div>
        <div className="space-y-2 p-4 flex flex-col items-center relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleScroll(tab.id)}
              className={`block w-full text-left px-4 py-2 rounded-lg hover:border-l-4 hover:border-white transition-all delay-75 ${
                activeSection === tab.id
                  ? "bg-rust-200 text-white border-l-4 border-white"
                  : ""
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="flex gap-6 justify-center scale-110 absolute bottom-32 left-14">
          <FaFacebook className="hover:text-rust-100  cursor-pointer transition-all ease-in" />{" "}
          <FaSquareXTwitter className="hover:text-rust-100  cursor-pointer transition-all ease-in" />{" "}
          <AiFillInstagram className="hover:text-rust-100  cursor-pointer transition-all ease-in" />{" "}
          <FaYoutube className="hover:text-rust-100  cursor-pointer transition-all ease-in" />
        </div>
      </aside>

      {/* Floating Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed bottom-10 left-6 w-12 h-12 shadow-lg flex items-center rounded-full ${
          isSidebarOpen ? "bg-white text-rust-200" : "bg-rust-200 text-white"
        } justify-center text-3xl md:hidden z-30  shadow-lg`}
      >
        <GoSidebarCollapse />
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black transition-opacity duration-300 z-10 opacity-50"
        />
      )}
    </div>
  );
};

export default SidebarTabs;
