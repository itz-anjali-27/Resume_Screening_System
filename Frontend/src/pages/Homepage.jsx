import React from 'react';
import HeroSection from '../Components/home/HeroSection';  
import FeaturesSection from '../Components/home/FeaturesSection';
import Navbar from '../Components/home/Navbar';
import Footer from '../Components/home/Footer';
import { useState } from 'react';



export default function HomePage({ setPage }) {
  const [page, setLocalPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0f1a]">

      <Navbar page={page} setPage={setLocalPage} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 font-orbitron">
            <span className="text-[#4f8ef7]">Welcome to ScreenAI</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Your intelligent recruitment and career platform
          </p>
        </div>

        <HeroSection setPage={setLocalPage} />
        <FeaturesSection />
         <Footer />

      </div>
    </div>
  );
}