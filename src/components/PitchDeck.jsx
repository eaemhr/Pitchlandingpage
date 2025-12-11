import React from "react";

export default function PitchDeck() {
  const items = [
    {
      title: "10x Faster",
      desc: "Analytics processing speed compared to traditional tools.",
    },
    {
      title: "70% Savings",
      desc: "Reduction in total analytics and data science costs.",
    },
    {
      title: "95% Accuracy",
      desc: "Predictive accuracy for business forecasting.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center px-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


