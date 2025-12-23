import './App.css';
import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgressBar from './components/ProgressBar';
import Loader from './components/Loader';

// Lazy-load below-the-fold components
const Offer = React.lazy(() => import('./components/Offer'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));
const CookieBar = React.lazy(() => import('./components/CookieBar'));
const NotificationBar = React.lazy(() => import('./components/NotificationBar'));
const Feedback = React.lazy(() => import('./components/Feedback'));
const LiquidEther = React.lazy(() => import('./components/LiquidEther'));

function App() {
  const [loading, setLoading] = useState(true);
  const [showLiquidEther, setShowLiquidEther] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Lazy-load LiquidEther after Hero is rendered
      const heroTimer = setTimeout(() => setShowLiquidEther(true), 500);
      return () => clearTimeout(heroTimer);
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {loading && <Loader />}

      {!loading && (
        <Suspense fallback={<Loader />}>
          <ProgressBar />

          {showLiquidEther && (
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
          )}

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
        </Suspense>
      )}
    </div>
  );
}

export default App;
