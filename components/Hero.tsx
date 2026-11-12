import React from 'react';
import Image from 'next/image';
import { FishStreamlined, FishAngel, FishRound, FishClown, OceanBubbles } from './FloatingFish';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 bg-white text-slate-900 overflow-hidden">

      {/* === OCEAN SURFACE ATMOSPHERE === */}
      {/* Primary ocean light — soft teal-cyan radial from center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-teal-100/50 via-cyan-50/40 to-transparent blur-3xl pointer-events-none animate-ocean-glow" />
      {/* Secondary warm light — morning sunlight hitting the water */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-gradient-to-br from-amber-50/30 via-transparent to-transparent blur-3xl pointer-events-none" />
      {/* Brand purple accent glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[300px] rounded-full bg-gradient-to-t from-meen-100/30 via-purple-50/20 to-transparent blur-3xl pointer-events-none" />
      
      {/* Bottom gradient fade — transitions to the shallow water (About section) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F4FBFA] pointer-events-none z-[1]" />

      {/* Delicate floating ambient fishes (ocean effect on white canvas) */}
      <div className="absolute top-10 right-14 text-teal-600/25 animate-fish-a pointer-events-none hidden sm:block">
        <FishStreamlined className="w-24 h-12" />
      </div>
      <div className="absolute top-36 left-8 text-meen-600/20 animate-fish-b pointer-events-none -scale-x-100 hidden lg:block">
        <FishAngel className="w-18 h-18" />
      </div>
      <div className="absolute bottom-12 right-1/4 text-ocean-600/20 animate-fish-c pointer-events-none hidden md:block">
        <FishRound className="w-16 h-12" />
      </div>
      <div className="absolute top-1/3 left-1/4 text-teal-600/20 animate-fish-a pointer-events-none hidden lg:block">
        <FishClown className="w-16 h-9" />
      </div>

      <OceanBubbles className="absolute top-20 right-1/3 text-teal-500/30 hidden md:flex" />

      {/* MASSIVE BACKGROUND TYPOGRAPHY (Behind the subject, like FASHION TREND) */}
      <div className="absolute top-6 sm:top-10 lg:top-12 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
        <span className="font-extrabold uppercase tracking-tight text-[17vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-200/90 via-slate-100/70 to-transparent">
          MEENPAY
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* 3-Column Editorial Grid: Left (Info & CTA), Center (Mockup Overlapping Text), Right (Live Lot & Roles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end min-h-[580px] lg:min-h-[660px] pt-6 lg:pt-12">

          {/* LEFT COLUMN: Headline, Subtitle, CTA, Store Badges, Trust Block */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-7 pb-4">

            <div>


              <h1 className="text-3xl sm:text-5xl lg:text-[3.15rem] font-bold tracking-tight text-slate-900 leading-[1.08]">
                The Future of Fish Auctions.
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-sm">
                A smarter way to connect fish sellers and buyers through one simple mobile platform.
              </p>

              {/* Primary CTA Button */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 bg-meen-600 hover:bg-meen-500 text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-meen-600/25 transition-all active:scale-[0.98]"
                >
                  <span>Explore MeenPay</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Coming Soon Store Badges */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                {/* App Store */}
                <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900 text-white shadow-sm hover:bg-black transition-colors">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.63 1.34-.56.64-1.05 1.7-0.92 2.73 1.01.08 2.01-.5 2.63-1.22z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[8px] uppercase tracking-wider text-slate-400 font-mono">Coming soon on</div>
                    <div className="text-[11px] font-semibold text-white tracking-tight mt-0.5">App Store</div>
                  </div>
                </div>

                {/* Google Play */}
                <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900 text-white shadow-sm hover:bg-black transition-colors">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.86.53-1.4 1.2-1.4.29 0 .58.11.83.31l10.97 8.5-10.97 8.5c-.25.2-.54.31-.83.31-.67 0-1.2-.54-1.2-1.22zm13.11-7.39L5.34 4.5l10.77 8.61zm0 1.78l-10.77 8.61 10.77-8.61zm1.26-.99l3.5-2.71c.64-.5.64-1.3 0-1.79l-3.5-2.71-1.37 1.06 1.37 6.15z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[8px] uppercase tracking-wider text-slate-400 font-mono">Coming soon on</div>
                    <div className="text-[11px] font-semibold text-white tracking-tight mt-0.5">Google Play</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Trust / Rating Badge */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative border border-slate-200 flex-shrink-0 shadow-sm">
                  <Image
                    src="/images/kerala-fisherman-boat.jpg"
                    alt="Kerala boat owner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>

                  <div className="flex items-center gap-1.5 mt-0.5 text-amber-500 text-xs">

                    <span className="text-[11px] text-slate-500 font-mono">Kerala Coastal Harbours</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CENTERPIECE: Flagship Freestanding Phone Mockup Overlapping the Giant MEENPAY Text */}
          <div className="lg:col-span-4 flex items-end justify-center relative z-20 pb-0">

            {/* Phone Bezel Container with exact 546/1024 aspect ratio & protective padding */}
            <div className="relative w-full max-w-[290px] sm:max-w-[320px] rounded-[48px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2E274A] via-[#1B1430] to-[#120B24] border border-meen-400/30 shadow-[0_30px_70px_-15px_rgba(90,47,216,0.25),0_15px_30px_-10px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-[1.01]">

              {/* Screen Wrapper with exact aspect ratio (546/1024) and inner padding */}
              <div className="relative rounded-[36px] overflow-hidden aspect-[546/1024] w-full bg-[#FAFAFE] shadow-inner p-1">
                <Image
                  src="/images/app-buyer.jpg"
                  alt="MeenPay Buyer Live Auction Interface"
                  fill
                  sizes="(max-width: 640px) 290px, 320px"
                  className="object-contain rounded-[28px]"
                  priority
                />
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Floating Live Lot Card & Harbour Categories */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-7 pb-4 lg:pl-6">

            {/* Top Spacer on desktop */}
            <div className="hidden lg:block" />

            {/* Floating Live Lot Card (Matches "Coat in camel and silk" Card) */}
            <div className="rounded-2xl bg-white/95 border border-slate-200/90 p-4 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.08)] backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase font-mono tracking-wider text-teal-700">Active Auction Lot</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">Tuna · 250 kg</div>

              </div>
              <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0 border border-slate-200 shadow-sm">
                <Image
                  src="/images/kerala-auction-morning.jpg"
                  alt="Kerala fresh catch"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Right Categories / Roles (Matches "Top Categories: Fashion, Suits...") */}
            <div className="pt-4 border-t border-slate-200/80">

              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:border-meen-500 hover:text-meen-600 shadow-sm transition-colors">
                  Boat Owners
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:border-meen-500 hover:text-meen-600 shadow-sm transition-colors">
                  Auctioneers
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:border-meen-500 hover:text-meen-600 shadow-sm transition-colors">
                  Buyers
                </span>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
