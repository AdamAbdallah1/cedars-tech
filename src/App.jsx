import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidEther from './components/LiquidEther';
import ScrollToTop from './components/ScrollToTop';
import CookieBar from './components/CookieBar';
import NotificationBar from './components/NotificationBar';
import Loader from './components/Loader';
import Feedback from './components/Feedback';
import ProgressBar from './components/ProgressBar';
import Projects from './components/Projects';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      {loading && <Loader />}

      {!loading && (
        <>
        <ProgressBar />
          <div className="fixed inset-0 -z-10">
            <LiquidEther
              colors={['#5227FF', '#FF9FFC', '#B19EEF']}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          <div className="fixed inset-0 -z-20 bg-slate-950" />

          <div className="container mx-auto px-8 relative z-10">
            <Navbar />
            <Hero />
            <Offer />
            <Projects />
            <Contact />
            <Footer />
          </div>

          <ScrollToTop />
          <CookieBar />
          <NotificationBar />
          <Feedback />
        </>
      )}
    </div>
  );
}

export default App;
