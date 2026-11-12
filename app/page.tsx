import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ValuesSection from '@/components/ValuesSection';
import ProblemSection from '@/components/ProblemSection';
import ConnectSection from '@/components/ConnectSection';
import FloatingFishBackground from '@/components/FloatingFish';
import SailingPathScroll from '@/components/SailingPathScroll';

export default function Home() {
  return (
    <>
      <SailingPathScroll />
      <main className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-x-clip">
        <FloatingFishBackground />
        <Navbar />
        <Hero />
        <AboutSection />
        <ValuesSection />
        <ProblemSection />
        <ConnectSection />
      </main>
    </>
  );
}
