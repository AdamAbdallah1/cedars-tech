import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import Solutions from "./components/Solutions";
import Work from "./components/Work";
import FAQ from "./components/FAQ";
import Process from "./components/Process";
import Assistant from "./components/Assistant/Assistant";
import React, { useEffect } from "react";
import Intro from "./components/Intro";
import { initReveals } from "./lib/reveal";

function App() {
  useEffect(() => initReveals(), []);
  return (
    <div className="bg-black text-white min-h-screen">
      <ProgressBar />

      <Intro />
      <Navbar />
      <Hero />
      <Solutions />
      <Work />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <Assistant />
    </div>
  );
}

export default App;