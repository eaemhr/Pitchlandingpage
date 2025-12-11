import React from "react";
import {
  XCircleIcon,
  CheckCircleIcon,
  BoltIcon,
  ChartPieIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-4">
        The Problem We're Solving
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Traditional analytics tools are complex, slow, and require extensive
        technical expertise to operate effectively.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-16 px-6">
        {/* --- CURRENT CHALLENGES --- */}
        <div className="bg-white p-10 rounded-2xl shadow-md border">
          <div className="flex items-center gap-3 mb-6">
            <XCircleIcon className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl font-semibold">Current Challenges</h3>
          </div>

          <ul className="space-y-6 text-gray-700 leading-relaxed">
            <li className="flex gap-3">
              <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
              <span>
                <strong>Slow Decision Making:</strong> Companies spend weeks
                analyzing data that should take hours, missing critical market
                opportunities and competitive advantages.
              </span>
            </li>

            <li className="flex gap-3">
              <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
              <span>
                <strong>High Costs:</strong> Businesses invest $50K–$200K annually
                in analytics tools plus dedicated data science teams, straining
                budgets without guaranteed ROI.
              </span>
            </li>

            <li className="flex gap-3">
              <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
              <span>
                <strong>Technical Barriers:</strong> Non-technical teams struggle
                with complex interfaces and require constant IT support,
                creating bottlenecks in workflow efficiency.
              </span>
            </li>

            <li className="flex gap-3">
              <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
              <span>
                <strong>Inaccurate Predictions:</strong> Legacy systems fail to
                adapt to rapidly changing market conditions, leading to costly
                strategic mistakes and missed revenue opportunities.
              </span>
            </li>
          </ul>
        </div>

        {/* --- OUR SOLUTION --- */}
        <div className="bg-white p-10 rounded-2xl shadow-md border">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheckIcon className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-semibold">Our Solution</h3>
          </div>

          <ul className="space-y-6 text-gray-700 leading-relaxed">
            <li className="flex gap-3">
              <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>
                <strong>AI-Powered Speed:</strong> Get actionable insights in
                minutes, not weeks—powered by machine learning that processes
                data 10× faster than traditional platforms.
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>
                <strong>Cost Effective:</strong> Reduce analytics costs by 70% with
                our all-in-one platform that eliminates multiple tools and large
                data teams.
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>
                <strong>User-Friendly Interface:</strong> Drag-and-drop dashboard
                builder lets anyone create analytics without coding or IT help.
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span>
                <strong>Predictive Accuracy:</strong> 95% accuracy from AI models
                that learn from real-time market data and adapt to future trends.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- METRICS --- */}
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-20 px-6">
        <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center border">
          <BoltIcon className="w-10 h-10 text-blue-600 mb-3" />
          <h4 className="text-3xl font-bold">10× Faster</h4>
          <p className="text-gray-600 text-center mt-2">
            Analytics processing speed compared to traditional solutions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center border">
          <ChartPieIcon className="w-10 h-10 text-purple-600 mb-3" />
          <h4 className="text-3xl font-bold">70% Savings</h4>
          <p className="text-gray-600 text-center mt-2">
            Reduction in analytics and data science costs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center border">
          <ChartBarIcon className="w-10 h-10 text-green-600 mb-3" />
          <h4 className="text-3xl font-bold">95% Accuracy</h4>
          <p className="text-gray-600 text-center mt-2">
            Predictive model accuracy for business forecasting.
          </p>
        </div>
      </div>
    </section>
  );
}

