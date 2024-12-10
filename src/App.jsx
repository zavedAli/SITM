import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import SidebarTabs from "./component/Sidebar/Sidebar";
import Hero from "./component/Hero/Hero";
import WordsOfWisdom from "./component/WordsOfWisdom/WordsOfWisdom";
import Facilities from "./component/Facilities/Facilities";
import News from "./component/News/News";
import MoU from "./component/MoU/MoU";
import RecentActivity from "./component/RecentActivity/RecentActivity";
import CampusTour from "./component/CampusTour/CampusTour";
import Footer from "./component/Footer/Footer";
import "./App.css"; // Add this line to import the CSS file
import Recruiters from "./component/Recruiters/Recruiters";
import ApplyOnline from "./component/ApplyOnline/ApplyOnline";

const App = () => {
  const [isSidebarSticky, setIsSidebarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSidebarSticky(true);
      } else {
        setIsSidebarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="background-image"></div>

      <Navbar />
      <div className="flex min-h-screen w-full relative justify-between">
        <div
          className={`h-full sticky top-0 transition-transform duration-300 ${
            isSidebarSticky ? "bg-white " : ""
          } z-30 md:w-[13%] w-0`}
        >
          <SidebarTabs />
        </div>
        <div className="h-full w-[100%] md:w-[87%]">
          <div className="ml-0 md:ml-14 py-0 px-6">
            <section id="" className="mt-1">
              <Hero />
            </section>
          </div>
          <div className="ml-0 md:ml-64 p-6">
            <section id="WordsOfWisdom">
              <WordsOfWisdom />
            </section>
          </div>
          <div className="ml-0 md:ml-36 p-6">
            <section id="Facilities" className="mt-8">
              <Facilities />
            </section>
          </div>
          <div className="ml-0 md:ml-36 p-6">
            <section id="News">
              <News />
            </section>
          </div>
          <div className="ml-0 md:ml-36 p-6">
            <section id="MoU">
              <MoU />
            </section>
          </div>
          <div className="ml-0 md:ml-36 p-6">
            <section id="RecentActivity">
              <RecentActivity />
            </section>
          </div>
          <div className="ml-0 md:ml-36 p-6">
            <section id="CampusTour">
              <CampusTour />
            </section>
          </div>
          <div className="ml-0 md:ml-16 p-6">
            <section id="Recruiters">
              <Recruiters />
            </section>
          </div>
          <div className="ml-0 md:ml-16 p-6">
            <section id="ApplyOnline">
              <ApplyOnline />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;