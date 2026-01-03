import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Location from '../components/Location';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;