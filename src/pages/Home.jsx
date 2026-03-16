import React, { useState, useEffect, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProgressBar from "../components/ProgressBar";
import Loader from "../components/Loader";
import GlobalStars from "./GlobalStars"; 

const Offer = React.lazy(() => import("../components/Offer"));
const Projects = React.lazy(() => import("../components/Projects"));
const Contact = React.lazy(() => import("../components/Contact"));
const Footer = React.lazy(() => import("../components/Footer"));
const ScrollToTop = React.lazy(() => import("../components/ScrollToTop"));
const CookieBar = React.lazy(() => import("../components/CookieBar"));
const NotificationBar = React.lazy(() => import("../components/NotificationBar"));
const Feedback = React.lazy(() => import("../components/Feedback"));

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      {loading && <Loader />}

      {!loading && (
        <Suspense fallback={<Loader />}>
          
          <ProgressBar />
          <GlobalStars /> 

          <div className="fixed inset-0 -z-20 bg-slate-950" />

          <Navbar />

          <Hero />

          <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <Offer />
            <Projects />
            <Contact />
            <Footer />
          </main>

          <ScrollToTop />
          <CookieBar />
          <NotificationBar />
          <Feedback />

        </Suspense>
      )}
    </div>
  );
}

export default Home;