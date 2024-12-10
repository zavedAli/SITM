import React from "react";

const partners = [
  {
    name: "Itobuz Technology",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/mou-partners-logo/itobuz-logo.png?v=1.3", // Replace with actual logos
    description: "Leading innovator in software development and IT solutions.",
  },
  {
    name: "Kreeti Technology",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/mou-partners-logo/kreeti-tech-logo.png?v=1.3", // Replace with actual logos
    description: "Pioneers in renewable energy projects and sustainability.",
  },
  {
    name: "Matrix Media",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/mou-partners-logo/matrix-media-logo.jpg?v=1.3", // Replace with actual logos
    description:
      "A platform for connecting students and educational resources.",
  },
  {
    name: "United Infotech",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/mou-partners-logo/united-infotech-logo.png?v=1.3", // Replace with actual logos
    description:
      "Dedicated to advancing healthcare solutions and partnerships.",
  },
  {
    name: "UpGrade",
    logo: "https://anydhhnsep.cloudimg.io/v7/http://sitmguwahati.org/images/mou-partners-logo/upgrad-logo.png?v=1.3", // Replace with actual logos
    description:
      "Dedicated to advancing healthcare solutions and partnerships.",
  },
];

const MoU = () => {
  return (
    <div className="w-full p-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Our MOU Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-32 w-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {partner.name}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoU;
