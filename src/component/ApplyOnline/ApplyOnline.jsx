import React, { useState, useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext";

const ApplyOnline = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const { darkMode } = useContext(DarkModeContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add form submission logic, such as sending data to a server
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className={`p-6  ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <h2 className="text-3xl font-semibold text-center text-gray-500 mb-6">
        Apply Online
      </h2>
      {isSubmitted ? (
        <div className="text-center text-green-600 text-lg font-semibold">
          Thank you! Your application has been submitted. Our Team will Contact
          you
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`max-w-lg mx-auto  p-6 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 bg-transparent rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 bg-transparent rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 bg-transparent rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="course">
              Course Applying For
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 bg-transparent rounded-lg "
            >
              <option
                value=""
                className={`${darkMode ? "bg-gray-800 text-white" : ""}`}
              >
                Select a course
              </option>
              <option
                value="BCA"
                className={`${darkMode ? "bg-gray-800 text-white" : ""}`}
              >
                BCA
              </option>
              <option
                value="MCA"
                className={`${darkMode ? "bg-gray-800 text-white" : ""}`}
              >
                MCA
              </option>
              <option
                value="MBA"
                className={`${darkMode ? "bg-gray-800 text-white" : ""}`}
              >
                MBA
              </option>
              <option
                value="B.Tech"
                className={`${darkMode ? "bg-gray-800 text-white" : ""}`}
              >
                B.Tech
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="message">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg bg-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-rust-100 text-white py-2 px-4 rounded hover:bg-rust-200 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplyOnline;
