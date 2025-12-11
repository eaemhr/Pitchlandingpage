import React from "react";
import {
  UsersIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
  StarIcon,
} from "@heroicons/react/24/solid";

export default function Traction() {
  const data = [
    {
      value: "500+",
      label: "Active Customers",
      icon: <UsersIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />,
    },
    {
      value: "$1.2M",
      label: "ARR",
      icon: <BanknotesIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />,
    },
    {
      value: "350%",
      label: "YoY Growth",
      icon: (
        <ArrowTrendingUpIcon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
      ),
    },
    {
      value: "98%",
      label: "Customer Retention",
      icon: <ShieldCheckIcon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />,
    },
    {
      value: "45",
      label: "Enterprise Clients",
      icon: (
        <BuildingOffice2Icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
      ),
    },
    {
      value: "4.9/5",
      label: "Customer Rating",
      icon: <StarIcon className="w-8 h-8 text-cyan-500 mx-auto mb-2" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center">Our Traction & Growth</h2>

      <p className="text-center mt-3 text-gray-600 max-w-xl mx-auto">
        Strong customer adoption, revenue growth, and top-tier retention.
      </p>

      <div className="grid md:grid-cols-6 gap-6 max-w-6xl mx-auto mt-12 px-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            {item.icon}
            <h3 className="text-3xl font-bold">{item.value}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
