import React, { useState, useContext, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import Logo from "../../assets/logo-sitm.png";
import { FaChevronDown, FaChevronUp, FaRegMoon, FaSun } from "react-icons/fa";
import { DarkModeContext } from "../../DarkModeContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-rust-200 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3 z-50">
          <img src={Logo} alt="Logo" className="md:w-42 md:h-14 w-38 h-12" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 md:items-center">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#departments" className="hover:text-gray-300">
            Departments
          </a>
          <a href="#courses" className="hover:text-gray-300">
            Courses
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-300 flex gap-1 items-center"
            >
              More
              <span className="scale-75 pt-1">
                {!isDropdownOpen ? <FaChevronDown /> : <FaChevronUp />}
              </span>
            </button>
            {isDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-40 ${
                  darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-black"
                } rounded-md shadow-lg z-40`}
              >
                <a
                  href="#admissions"
                  className="block px-4 py-2 hover:scale-105 transition-all ease-in"
                >
                  Admissions
                </a>
                <a
                  href="#placement"
                  className="block px-4 py-2 hover:scale-105 transition-all ease-in"
                >
                  Placement
                </a>
                <a
                  href="#enquiry"
                  className="block px-4 py-2 hover:scale-105 transition-all ease-in"
                >
                  Enquiry
                </a>
              </div>
            )}
          </div>
          {!isMobileMenuOpen && (
            <a
              href="#"
              className="hover:text-gray-300 mx-6"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? (
                <span className="hover:animate-spin">
                  <FaSun />
                </span>
              ) : (
                <span className="hover:animate-bounce">
                  <FaRegMoon />
                </span>
              )}
            </a>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex gap-4 items-center md:hidden">
          <a
            href="#"
            className="hover:text-gray-300 md:hidden flex"
            onClick={() => {
              console.log("Dark mode toggled");
              setDarkMode((prev) => !prev);
            }}
          >
            {darkMode ? (
              <span className="hover:animate-spin">
                <FaSun />
              </span>
            ) : (
              <span className="hover:animate-bounce">
                <FaRegMoon />
              </span>
            )}
          </a>

          <button
            className="focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {!isMobileMenuOpen ? (
              <TbMenuDeep size={24} />
            ) : (
              <IoMdClose size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-rust-200 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        } shadow-md`}
        style={{ zIndex: 40 }}
      >
        <nav className="md:hidden mb-7">
          <a href="#home" className="block px-4 py-2 hover:bg-[#b9445b]">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-[#b9445b]">
            About
          </a>
          <a href="#departments" className="block px-4 py-2 hover:bg-[#b9445b]">
            Departments
          </a>
          <a href="#courses" className="block px-4 py-2 hover:bg-[#b9445b]">
            Courses
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left px-4 py-2 hover:bg-[#b9445b] flex gap-1 items-center"
            >
              More
              <span className="scale-75 pt-2">
                {!isDropdownOpen ? <FaChevronDown /> : <FaChevronUp />}
              </span>
            </button>
            {isDropdownOpen && (
              <div className="mt-2">
                <a
                  href="#admissions"
                  className="block px-4 py-2 hover:bg-[#b9445b]"
                >
                  Admissions
                </a>
                <a
                  href="#placement"
                  className="block px-4 py-2 hover:bg-[#b9445b]"
                >
                  Placement
                </a>
                <a
                  href="#enquiry"
                  className="block px-4 py-2 hover:bg-[#b9445b]"
                >
                  Enquiry
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
