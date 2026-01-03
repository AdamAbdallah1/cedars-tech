import Navbar from "./Portfolio/components/Navbar";
import Hero from "./Portfolio/pages/Hero";
import About from "./Portfolio/pages/About";
import Skills from "./Portfolio/pages/Skills";
import Projects from "./Portfolio/pages/Projects";
import Services from "./Portfolio/pages/Services";
import Contact from "./Portfolio/pages/Contact";
import Footer from "./Portfolio/components/Footer";
import BackToTop from "./Portfolio/components/BackToTop";
import ScrollProgress from "./Portfolio/components/ScrollProgress";

function Portfolio() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
}

export default Portfolio;
