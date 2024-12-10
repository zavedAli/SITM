import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-rust-200 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://sitmguwahati.org/images/logo-white-copy.png?V=1"
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold">SCHOLAR'S INSTITUTE</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
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
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-300"
            >
              More
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-40">
                <a
                  href="#admissions"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Admissions
                </a>
                <a
                  href="#placement"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Placement
                </a>
                <a
                  href="#enquiry"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Enquiry
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {!isMobileMenuOpen ? <TbMenuDeep /> : <IoMdClose />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-rust-200">
          <a href="#home" className="block px-4 py-2 hover:bg-rust-300">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-rust-300">
            About
          </a>
          <a href="#departments" className="block px-4 py-2 hover:bg-rust-300">
            Departments
          </a>
          <a href="#courses" className="block px-4 py-2 hover:bg-rust-300">
            Courses
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left px-4 py-2 hover:bg-rust-300"
            >
              More
            </button>
            {isDropdownOpen && (
              <div className="bg-rust-200">
                <a
                  href="#admissions"
                  className="block px-4 py-2 hover:bg-rust-300"
                >
                  Admissions
                </a>
                <a
                  href="#placement"
                  className="block px-4 py-2 hover:bg-rust-300"
                >
                  Placement
                </a>
                <a
                  href="#enquiry"
                  className="block px-4 py-2 hover:bg-rust-300"
                >
                  Enquiry
                </a>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
