import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Solutions";
import Pricing from "./components/Pricing";
import Projects from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import Solutions from "./components/Solutions";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ProgressBar />

      <Navbar />
      <Hero />
      <Solutions />
      <Work />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;