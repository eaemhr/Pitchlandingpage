import React from "react";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Traction from "./components/Traction";
import KeyMilestones from "./components/KeyMilestones";
import Testimonials from "./components/Testimonials";
import FullPitchDeck from "./components/FullPitchDeck";
import PitchDeckButtons from "./components/PitchDeckButtons";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Traction />
      <KeyMilestones />
      <Testimonials />
      <FullPitchDeck />
      <PitchDeckButtons />
      {/* Make sure ContactUs has id="contact-us" for scroll */}
      <ContactUs id="contact-us" />
    </>
  );
}

