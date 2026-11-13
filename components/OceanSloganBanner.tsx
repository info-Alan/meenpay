'use client';

import React from 'react';
import Image from 'next/image';
import { FishStreamlined, FishAngler, FishClown, OceanBubbles } from './FloatingFish';

export default function OceanSloganBanner() {
  return (
    <section className="relative w-full bg-[#0F0926] text-white py-12 sm:py-16 lg:py-20 select-none overflow-hidden">

      {/* === AMBIENT OCEAN LIGHTING & GLOW (Like Footer) === */}
      {/* Brand purple glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-meen-600/20 blur-3xl pointer-events-none" />

      {/* Center fluorescent ocean radiant aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] lg:w-[720px] h-[200px] sm:h-[260px] bg-gradient-to-r from-teal-400/25 via-cyan-400/30 to-emerald-400/25 rounded-full blur-3xl pointer-events-none animate-ocean-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[420px] h-[160px] bg-meen-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Floating deep-sea ambient fishes (Like Footer) */}
      <div className="absolute top-8 right-14 text-teal-300/25 animate-fish-a pointer-events-none hidden sm:block">
        <FishStreamlined className="w-22 h-11" />
      </div>
      <div className="absolute bottom-10 left-10 text-meen-300/25 animate-fish-b pointer-events-none -scale-x-100 hidden md:block">
        <FishAngler className="w-20 h-13" />
      </div>
      <div className="absolute top-1/3 left-12 text-cyan-300/20 animate-fish-c pointer-events-none hidden lg:block">
        <FishClown className="w-16 h-10" />
      </div>
      <OceanBubbles className="absolute top-10 left-1/3 text-teal-400/25 hidden md:flex" />

      {/* Main Container - Matches exact max-w-7xl px-6 lg:px-12 margin/padding of other sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* === CORNER FLOATING PHOTOGRAPHS (Small & Bounded within Section Margins) === */}


        {/* === CENTRAL EDITORIAL TYPOGRAPHY BLOCK === */}
        <div className="mx-auto max-w-2xl sm:max-w-3xl px-2 sm:px-6 relative z-10">

          {/* Vertical Framing Guidelines matching reference */}
          <div className="border-x border-white/15 px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 flex flex-col items-center text-center">

            {/* Two-Tone Editorial Slogan Statement */}
            <h2 className="text-xl sm:text-2xl lg:text-[2.2rem] font-normal tracking-tight leading-[1.3] sm:leading-[1.24] text-center max-w-xl sm:max-w-2xl">
              <span className="font-semibold text-white">
                MeenPay IS A DIGITAL FISH AUCTION PLATFORM{' '}
              </span>
              <span className="text-cyan-200/80 font-light">
                ROOTED IN TRANSPARENCY, TRUST AND SEAMLESS COASTAL HARBOUR TRADING.
              </span>
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}
