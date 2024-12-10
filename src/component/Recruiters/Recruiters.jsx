import React from "react";

const recruitersData = [
  {
    name: "MSME",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/training-internship-logos/MSME-logo.svg", // Replace with actual logo URL
    description: "A global leader in search, AI, and innovative technologies.",
  },
  {
    name: "Anix System",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/training-internship-logos/anix-logo.png", // Replace with actual logo URL
    description: "Empowering individuals and organizations through technology.",
  },
  {
    name: "Indian Oil",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/training-internship-logos/indian-logo.png", // Replace with actual logo URL
    description: "A global e-commerce and cloud computing giant.",
  },
  {
    name: "JSB",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/training-internship-logos/jcb-logo.png", // Replace with actual logo URL
    description:
      "A pioneer in IT services, consulting, and business solutions.",
  },
  {
    name: "Autodesk",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/training-internship-logos/autodesk-logo.png", // Replace with actual logo URL
    description: "A leader in next-generation digital services and consulting.",
  },
  {
    name: "PWD",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/training-internship-logos/assam-pwd-logo.png", // Replace with actual logo URL
    description: "A global e-commerce and cloud computing giant.",
  },
  {
    name: "Cognizant",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/recruiter-logos/congnizant-logo.png", // Replace with actual logo URL
    description:
      "A pioneer in IT services, consulting, and business solutions.",
  },
  {
    name: "Mahindra",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/recruiter-logos/mahindra-logo.png", // Replace with actual logo URL
    description: "A leader in next-generation digital services and consulting.",
  },
];

const Recruiters = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Recruiters And Training Partner
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recruitersData.map((recruiter, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={recruiter.logo}
              alt={`${recruiter.name} Logo`}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              {recruiter.name}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {recruiter.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruiters;
