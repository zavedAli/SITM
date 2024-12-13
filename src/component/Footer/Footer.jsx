import React from "react";

const Footer = () => {
  return (
    <footer className="bg-rust-200 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Zaved Ali. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-4 text-[12px] md:text-[14px] lg:text-[16px]">
          <a
            href="#"
            className="hover:text-gray-300 text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            href="#"
            className="hover:text-gray-300 text-white transition-colors duration-200"
          >
            Terms of Service
          </a>{" "}
          |
          <a
            href="#"
            className="hover:text-gray-300 text-white transition-colors duration-200"
          >
            {" "}
            | Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
