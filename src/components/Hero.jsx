import React from "react";

export default function Hero() {
  const handleViewPitchDeck = () => {
    // Try to find the pitch deck section by common IDs
    const pitchDeckSection = document.getElementById("full-pitch-deck");
    const pitchDeckSection2 = document.getElementById("pitch-deck");
    const pitchDeckSection3 = document.getElementById("pitchdeck");
    
    if (pitchDeckSection) {
      pitchDeckSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else if (pitchDeckSection2) {
      pitchDeckSection2.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else if (pitchDeckSection3) {
      pitchDeckSection3.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else {
      // If pitch deck section not found, you might want to:
      // 1. Navigate to a separate pitch deck page
      // window.location.href = "/pitch-deck";
      
      // 2. Or show a message
      alert("Pitch deck section not found. Please navigate to the pitch deck page.");
    }
  };

  const handleScheduleMeeting = () => {
    // Try to find the contact section by common IDs
    const contactSection = document.getElementById("contact");
    const contactSection2 = document.getElementById("contact-section");
    const contactSection3 = document.getElementById("contact-us");
    
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else if (contactSection2) {
      contactSection2.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else if (contactSection3) {
      contactSection3.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    } else {
      // If contact section not found
      alert("Contact section not found. Please navigate to our contact page.");
    }
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-11 text-white">
        <span className="px-4 py-1 text-cyan-400 text-opacity-100 bg-cyan-500 bg-opacity-30 hover:bg-opacity-70 rounded-full text-sm">
          Series A Fundraising
        </span>
        <h1 className="text-5xl font-bold mt-6 leading-tight">
          Revolutionizing the <br /> Future of AI-Powered <br /> Analytics
        </h1>

        <p className="mt-6 text-lg max-w-2xl">
          We're building the next generation of predictive analytics tools that
          help businesses make data-driven decisions 10× faster.Join us in transforming how companies leverage
          artificial intelligence for strategic growth and competitive advantage.
        </p>

        <div className="flex gap-8 mt-8">
          <div>
            <p className="text-3xl font-bold ">$2.5M</p>
            <p className="text-sm">Seeking Investment</p>
          </div>
          <div>
            <p className="text-3xl font-bold">$50M</p>
            <p className="text-sm">Market Opportunity</p>
          </div>
          <div>
            <p className="text-3xl font-bold">3.5x</p>
            <p className="text-sm">YoY Growth</p>
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          <button 
            onClick={handleViewPitchDeck}
            className="bg-cyan-500 px-6 py-3 rounded font-semibold hover:bg-cyan-600 transition"
          >
            View Pitch Deck
          </button>
          <button 
            onClick={handleScheduleMeeting}
            className="bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded text-black font-semibold hover:bg-opacity-30 transition"
          >
            Schedule Meeting
          </button>
        </div>
      </div>
    </section>
  );
}