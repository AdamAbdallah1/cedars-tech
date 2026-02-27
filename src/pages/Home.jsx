import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProgressBar from '../components/ProgressBar';
import Loader from '../components/Loader';

const Offer = React.lazy(() => import('../components/Offer'));
const Projects = React.lazy(() => import('../components/Projects'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));
const ScrollToTop = React.lazy(() => import('../components/ScrollToTop'));
const CookieBar = React.lazy(() => import('../components/CookieBar'));
const NotificationBar = React.lazy(() => import('../components/NotificationBar'));
const Feedback = React.lazy(() => import('../components/Feedback'));

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {loading && <Loader />}

      {!loading && (
        <Suspense fallback={<Loader />}>
          <ProgressBar />

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

export default Home;
