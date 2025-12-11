import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVentures Inc.",
    text: "This platform transformed our decision-making process. We now make strategic choices in hours instead of weeks, giving us a significant competitive advantage in our market.",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  },
  {
    name: "Michael Rodriguez",
    role: "CFO, DataCorp Solutions",
    text: "The ROI has been incredible. We reduced our analytics costs by 65% while improving accuracy and speed. Our entire team can now access insights without technical barriers.",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    name: "Emily Thompson",
    role: "VP of Strategy, Global Innovations",
    text: "The predictive accuracy is outstanding. We have been able to forecast market trends with 95% accuracy, allowing us to stay ahead of competitors and capitalize on emerging opportunities.",
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-cyan-600 mb-12">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
          >
            {/* Stars */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, j) => (
                <StarIcon key={j} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-800 italic mb-6">{`"${t.text}"`}</p>

            {/* Profile */}
            <div className="flex flex-col items-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-3 object-cover"
              />
              <p className="font-semibold text-cyan-600">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



