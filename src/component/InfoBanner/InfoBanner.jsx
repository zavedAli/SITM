import React, { useState, useEffect } from "react";

const InfoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the popup when the close button is clicked
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("infoPopupClosed", "true");
  };

  // Check if the popup was previously closed
  useEffect(() => {
    if (localStorage.getItem("infoPopupClosed") === "true") {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg relative max-w-sm w-full">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <p className="text-center text-gray-800">
          This app was created by: Your Name
        </p>
      </div>
    </div>
  );
};

export default InfoBanner;
