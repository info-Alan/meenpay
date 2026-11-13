import React from 'react';
import Image from 'next/image';
import { FishAngler, FishClown, FishStreamlined } from './FloatingFish';

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-8 sm:py-10 lg:py-12 bg-transparent overflow-hidden">

      {/* Ambient floating illustration fishes for ocean feel */}
      <div className="absolute top-14 left-10 text-teal-600/25 animate-fish-a pointer-events-none hidden sm:block">
        <FishAngler className="w-20 h-15" />
      </div>
      <div className="absolute bottom-14 right-10 text-meen-600/25 animate-fish-b pointer-events-none hidden md:block">
        <FishClown className="w-18 h-10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">



        {/* Large Cinematic Image with Subtle Transition to Digital Marketplace */}
        <div className="relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] bg-gradient-to-br from-[#120A2E] via-ocean-950 to-ocean-900 flex flex-col justify-between p-6 sm:p-10 lg:p-16 text-white border border-meen-900/60 shadow-2xl">

          {/* Background Cinematic Market Photo */}
          <div className="absolute inset-0 -z-0">
            <Image
              src="/images/kerala-auction-morning.jpg"
              alt="Traditional Kerala fish auction market at sunrise"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.35] contrast-[1.1]"
            />
            {/* Ambient Purple & Ocean Tint Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120A2E] via-[#081518]/90 to-transparent" />
          </div>

          {/* Ambient Brand Purple Glow */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-meen-600/20 blur-3xl pointer-events-none" />

          {/* Center Story & Visual Transition Grid */}
          <div className="relative z-10 my-auto py-4 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Story Text */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Preserving harbour culture. Eliminating dockside friction.
              </h3>
              <p className="mt-3 sm:mt-6 text-sm sm:text-base lg:text-lg text-ocean-100/90 leading-relaxed font-normal max-w-xl">
                MeenPay modernizes traditional morning fish auctions with a connected mobile marketplace for boat owners, auctioneers, and buyers.
              </p>
            </div>

            {/* Right Visual: Pair of Actual App Mockups (Auctioneer & Lot Details with full padding) */}
            <div className="lg:col-span-5 flex items-center justify-center relative px-1 sm:px-2 pt-4 lg:pt-0">
              <div className="flex gap-2.5 xs:gap-3.5 sm:gap-6 items-center">

                {/* Auctioneer Screen */}
                <div className="relative w-[122px] xs:w-[135px] sm:w-[160px] lg:w-[180px] rounded-[28px] sm:rounded-[34px] p-1.5 sm:p-2 bg-gradient-to-b from-[#2D2448] via-[#1B1430] to-[#120B24] border border-meen-400/30 shadow-[0_20px_50px_-10px_rgba(90,47,216,0.35)] rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                  <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[546/1024] w-full bg-[#FAFAFE] shadow-inner p-0.5">
                    <Image
                      src="/images/app-auctioneer.jpg"
                      alt="MeenPay Auctioneer Interface"
                      fill
                      sizes="180px"
                      className="object-contain rounded-[20px] sm:rounded-[24px]"
                    />
                  </div>
                </div>

                {/* Lot Details Screen */}
                <div className="relative w-[122px] xs:w-[135px] sm:w-[160px] lg:w-[180px] rounded-[28px] sm:rounded-[34px] p-1.5 sm:p-2 bg-gradient-to-b from-[#2D2448] via-[#1B1430] to-[#120B24] border border-meen-400/30 shadow-[0_20px_50px_-10px_rgba(90,47,216,0.35)] rotate-[3deg] hover:rotate-0 transition-transform duration-500 mt-4 sm:mt-6">
                  <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-[546/1024] w-full bg-[#FAFAFE] shadow-inner p-0.5">
                    <Image
                      src="/images/app-lot-details.jpg"
                      alt="MeenPay Lot Details Interface"
                      fill
                      sizes="180px"
                      className="object-contain rounded-[20px] sm:rounded-[24px]"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
