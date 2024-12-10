import React from "react";

const activities = [
  {
    title: "New Research Project Initiated",
    description:
      "A groundbreaking new research project on artificial intelligence has begun, fostering collaboration between students and faculty.",
    date: "December 10, 2024",
  },
  {
    title: "Annual Sports Meet Highlights",
    description:
      "The annual sports meet was a success, with students showcasing their athletic talents in various sports events and competitions.",
    date: "November 25, 2024",
  },
  {
    title: "SITM Tech Symposium 2024",
    description:
      "The institute hosted its annual Tech Symposium, featuring guest speakers from top tech companies and universities.",
    date: "November 15, 2024",
  },
  {
    title: "Hostel Renovation Completed",
    description:
      "The renovation of the campus hostel has been completed, providing students with upgraded facilities and improved comfort.",
    date: "October 30, 2024",
  },
];

const RecentActivity = () => {
  return (
    <div className="w-full p-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Recent Activities
      </h2>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-3">
              <div className="h-5 w-5 bg-rust-200 rounded-full flex-shrink-0"></div>
              <span className="ml-3 text-sm text-gray-500">
                {activity.date}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {activity.title}
            </h3>
            <p className="text-sm text-gray-600">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
