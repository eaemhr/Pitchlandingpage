import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function PitchDeckButtons() {
  const [message, setMessage] = useState("");

  const handleDownload = () => {
    setMessage("Download Ready");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    const contactSection2 = document.getElementById("contact-section");
    const contactSection3 = document.getElementById("contact-us");
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else if (contactSection2) {
      contactSection2.scrollIntoView({ behavior: "smooth" });
    } else if (contactSection3) {
      contactSection3.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-container text-center py-10 relative">
      {/* Download Ready Message - Top Right Corner */}
      {message && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top duration-300">
          <div className="bg-cyan-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 min-w-[200px]">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="font-semibold">{message}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Pitch Deck
        </button>

        <button
          onClick={handleContact}
          className="px-6 py-3 bg-transparent border border-cyan-600 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition"
        >
          Contact Us for More Information
        </button>
      </div>
    </section>
  );
}
