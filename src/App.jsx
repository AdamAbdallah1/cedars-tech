import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgressBar from './components/ProgressBar';
import Loader from './components/Loader';
import Offer from './components/Offer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy only non-critical
const LiveChat = React.lazy(() => import('./components/LiveChat'));
const CookieBar = React.lazy(() => import('./components/CookieBar'));
const NotificationBar = React.lazy(() => import('./components/NotificationBar'));

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-neutral-300 antialiased selection:bg-purple-500/30 selection:text-white">
      
      <ProgressBar />

      {/* Background */}
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#050505] to-black" />

      {/* Main content (NO suspense needed) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Navbar />
        <Hero />
        <Offer />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Lazy loaded UI extras */}
      <Suspense fallback={null}>
        <CookieBar />
        <NotificationBar />
        <LiveChat />
      </Suspense>

    </div>
  );
}

export default App;