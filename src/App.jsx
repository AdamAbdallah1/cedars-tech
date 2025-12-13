import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offer from './components/Offer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'

function App() {
  
  return (
    <div className='min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="relative h-full w-full bg-slate-950"></div>      </div>
      <div className='container mx-auto px-8 '>
        <SplashCursor />
        <Navbar />
        <Hero />
        <Offer />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
