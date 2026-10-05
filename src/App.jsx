import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import Solutions from "./components/Solutions";
import Work from "./components/Work";
import FAQ from "./components/FAQ";
import Assistant from "./components/Assistant/Assistant";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ProgressBar />

      <Intro />
      <Navbar />
      <Hero />
      <Solutions />
      <Work />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <Assistant />
    </div>
  );
}

export default App;