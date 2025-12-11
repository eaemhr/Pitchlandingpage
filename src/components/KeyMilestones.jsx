import React from "react";
import {
  RocketLaunchIcon,
  BanknotesIcon,
  GlobeAltIcon,
  ChartBarIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export default function KeyMilestones() {
  const milestones = [
    {
      quarter: "Q1 2023",
      title: "Product Launch",
      text: "Successfully launched MVP with 50 beta customers from leading tech companies and Fortune 500 enterprises.",
      icon: <RocketLaunchIcon className="w-7 h-7 text-cyan-600" />,
    },
    {
      quarter: "Q2 2023",
      title: "Seed Funding",
      text: "Raised $500K seed round from top-tier venture capital firms and angel investors in Silicon Valley.",
      icon: <BanknotesIcon className="w-7 h-7 text-cyan-600" />,
    },
    {
      quarter: "Q3 2023",
      title: "Market Expansion",
      text: "Expanded to 200+ customers across North America and Europe, establishing strategic partnerships with industry leaders.",
      icon: <GlobeAltIcon className="w-7 h-7 text-cyan-600" />,
    },
    {
      quarter: "Q4 2023",
      title: "Revenue Milestone",
      text: "Achieved $1M ARR with 95% customer retention rate and 130% net revenue retention.",
      icon: <ChartBarIcon className="w-7 h-7 text-cyan-600" />,
    },
    {
      quarter: "Q1 2024",
      title: "Product Innovation",
      text: "Launched AI-powered predictive analytics feature, increasing customer engagement by 40%.",
      icon: <LightBulbIcon className="w-7 h-7 text-cyan-600" />,
    },
    {
      quarter: "Q2 2024",
      title: "Current Status",
      text: "Now serving 500+ customers with $1.2M ARR, preparing for Series A to accelerate growth.",
      icon: <StarIcon className="w-7 h-7 text-cyan-600" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Key Milestones</h2>

      <div className="relative max-w-4xl mx-auto mt-16">
        {/* Middle vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-600 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div
                className={`bg-white p-6 rounded-xl shadow-md w-[48%] ${
                  index % 2 === 0 ? "text-left" : "text-right"
                } transform transition duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <h3 className="text-sm font-bold text-cyan-600">
                  {item.quarter}
                </h3>
                <h4 className="text-xl font-bold text-grey-500">
                  {item.title}
                </h4>
                <p className="text-gray-700 mt-2">{item.text}</p>
              </div>

              {/* Center icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
