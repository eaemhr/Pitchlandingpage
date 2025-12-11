import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="w-full bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side: Heading + Icons */}
          <div className="space-y-8 text-center md:text-left text-white">
           <h2 className="text-4xl font-bold">Let's Connect</h2>
            <p className="text-gray-300">
              We're actively seeking strategic investors who share our vision of transforming the analytics industry. 
              Schedule a meeting to learn more about this exciting opportunity.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-2xl shadow hover:shadow-lg transition">
                <EnvelopeIcon className="w-8 h-8 text-cyan-400" />
                <div>
                  <h4 className="font-bold text-lg text-cyan-400">Email</h4>
                  <p>investors@aianalytics.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-2xl shadow hover:shadow-lg transition">
                <PhoneIcon className="w-8 h-8 text-cyan-400" />
                <div>
                  <h4 className="font-bold text-lg text-cyan-400">Phone</h4>
                  <p>+1 (415) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-2xl shadow hover:shadow-lg transition">
                <MapPinIcon className="w-8 h-8 text-cyan-400" />
                <div>
                  <h4 className="font-bold text-lg text-cyan-400">Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-xl">
            <form className="grid grid-cols-1 gap-6 text-white">
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 rounded-xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Company / Fund Name"
                className="p-4 rounded-xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                placeholder="Message"
                className="p-4 rounded-xl border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                rows={4}
              />
              <button className="bg-cyan-500 text-white font-semibold py-4 rounded-xl hover:bg-cyan-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          © 2025 AI Analytics Platform. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

