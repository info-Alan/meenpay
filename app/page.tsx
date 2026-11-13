import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import OceanSloganBanner from '@/components/OceanSloganBanner';
import ValuesSection from '@/components/ValuesSection';
import OnboardingPricingSection from '@/components/OnboardingPricingSection';
import ProblemSection from '@/components/ProblemSection';
import ConnectSection from '@/components/ConnectSection';
import FloatingFishBackground from '@/components/FloatingFish';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-x-clip">
      <FloatingFishBackground />
      <Navbar />
      <Hero />
      <AboutSection />
      <OceanSloganBanner />
      <ValuesSection />
      <OnboardingPricingSection />
      <ProblemSection />
      <ConnectSection />
    </main>
  );
}
