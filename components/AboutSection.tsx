import React from 'react';
import Image from 'next/image';
import { FishClown, FishRound } from './FloatingFish';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-36 bg-transparent border-t border-slate-100/80 overflow-hidden">
      
      {/* Ambient floating fish */}
      <div className="absolute top-16 right-12 text-teal-600/25 animate-fish-b pointer-events-none hidden sm:block">
        <FishClown className="w-20 h-12" />
      </div>
      <div className="absolute bottom-12 left-10 text-meen-700/[0.07] animate-fish-a pointer-events-none hidden lg:block">
        <FishRound className="w-14 h-10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Section Heading & Subheading */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-900 leading-[1.08]">
            An Auction. Reimagined.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-ivory-600 leading-relaxed font-normal">
            Bringing fish auctions into a simpler, smarter digital experience.
          </p>
        </div>

        {/* Large Split-Screen Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Traditional Kerala Fish Market Environment */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-ivory-200">
            <Image
              src="/images/kerala-dock-crates.jpg"
              alt="Traditional Kerala fishing harbour dock with boats and crates"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs uppercase tracking-widest text-ivory-300 font-mono">Traditional Market</span>
              <p className="text-xl sm:text-2xl font-semibold mt-1">Fish auction on the morning dock.</p>
            </div>
          </div>

          {/* Right: Modern Digital Experience featuring Real Seller App UI */}
          <div className="lg:col-span-6 relative rounded-3xl bg-gradient-to-br from-[#120A2E] via-ocean-950 to-ocean-900 p-8 sm:p-12 lg:p-14 text-white overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] flex flex-col justify-between border border-meen-900/60 shadow-2xl">
            
            {/* Ambient Purple Glow */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-meen-600/20 blur-3xl pointer-events-none" />

            {/* Top Minimal Label */}
            <div className="z-10">
              <span className="text-xs uppercase tracking-widest text-meen-300 font-mono">MeenPay Platform</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white leading-tight">
                Simpler, smarter digital auctions.
              </h3>
            </div>

            {/* Central Visual: Real Seller Mobile Interface with Full Padding */}
            <div className="my-auto py-4 px-2 sm:px-4 flex items-center justify-center z-10">
              <div className="relative w-full max-w-[245px] sm:max-w-[270px] rounded-[42px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2D2448] via-[#1B1430] to-[#120B24] border border-meen-400/30 shadow-[0_25px_60px_-15px_rgba(90,47,216,0.35)]">
                <div className="relative rounded-[32px] overflow-hidden aspect-[546/1024] w-full bg-[#FAFAFE] shadow-inner p-1">
                  <Image
                    src="/images/app-seller.jpg"
                    alt="MeenPay Seller Interface — Add Fish Lot"
                    fill
                    sizes="(max-width: 640px) 245px, 270px"
                    className="object-contain rounded-[26px]"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
