import React from 'react';
import Image from 'next/image';
import { FishStreamlined, FishAngel, FishRound, FishClown, OceanBubbles } from './FloatingFish';

export default function Hero() {
  return (
    <section className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 lg:pt-8 lg:pb-10 bg-white text-slate-900 overflow-hidden">

      {/* === OCEAN SURFACE ATMOSPHERE === */}
      {/* Primary ocean light — soft teal-cyan radial from center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-teal-100/50 via-cyan-50/40 to-transparent blur-3xl pointer-events-none animate-ocean-glow" />
      {/* Secondary warm light — morning sunlight hitting the water */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-gradient-to-br from-amber-50/30 via-transparent to-transparent blur-3xl pointer-events-none" />
      {/* Brand purple accent glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[300px] rounded-full bg-gradient-to-t from-meen-100/30 via-purple-50/20 to-transparent blur-3xl pointer-events-none" />

      {/* Bottom gradient fade — transitions to the shallow water (About section) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-b from-transparent to-[#F4FBFA] pointer-events-none z-[1]" />

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

      {/* MASSIVE BACKGROUND TYPOGRAPHY (Behind the subject) */}
      <div className="absolute top-6 sm:top-10 lg:top-12 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
        <span className="font-extrabold uppercase tracking-tight text-[17vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-200/90 via-slate-100/70 to-transparent">
          MEENPAY
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* 2-Column Balanced Editorial Grid: Left (Headline, CTA & Trust), Right (Freestanding Phone Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[520px] lg:min-h-[580px] pt-4 lg:pt-8">

          {/* LEFT COLUMN: Headline, Subtitle, CTA, Store Badges, Trust Block */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pb-2">

            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-slate-900 leading-[1.08]">
                The Future of Fish Auctions.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-lg">
                A smarter way to connect fish sellers and buyers through one simple mobile platform.
              </p>

              {/* Coming Soon Store Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {/* App Store */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-sm hover:bg-black transition-colors cursor-pointer">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.63 1.34-.56.64-1.05 1.7-0.92 2.73 1.01.08 2.01-.5 2.63-1.22z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[8px] uppercase tracking-wider text-slate-400 font-mono">Coming soon on</div>
                    <div className="text-[11px] font-semibold text-white tracking-tight mt-0.5">App Store</div>
                  </div>
                </div>

                {/* Google Play */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-sm hover:bg-black transition-colors cursor-pointer">
                  <div className="w-4 h-4 relative flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/images/google-play-icon.png"
                      alt="Google Play"
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain"
                      priority
                    />
                  </div>
                  <div className="text-left leading-none">
                    <div className="text-[8px] uppercase tracking-wider text-slate-400 font-mono">Coming soon on</div>
                    <div className="text-[11px] font-semibold text-white tracking-tight mt-0.5">Google Play</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trust Line */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden relative border border-slate-200 flex-shrink-0 shadow-sm">
                  <Image
                    src="/images/kerala-fisherman-boat.jpg"
                    alt="Kerala boat owner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-mono">Kerala Coastal Harbours</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Flagship Freestanding Phone Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative z-20 pb-0 mt-4 mb-2 lg:my-0">

            {/* Ambient soft glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-meen-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Phone Bezel Container with exact 546/1024 aspect ratio & protective padding */}
            <div className="relative w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[320px] lg:max-w-[340px] rounded-[44px] sm:rounded-[48px] p-2 sm:p-2.5 bg-gradient-to-b from-[#2E274A] via-[#1B1430] to-[#120B24] border border-meen-400/30 shadow-[0_25px_60px_-15px_rgba(90,47,216,0.25),0_12px_24px_-8px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-[1.01]">

              {/* Screen Wrapper with exact aspect ratio (546/1024) and inner padding */}
              <div className="relative rounded-[34px] sm:rounded-[36px] overflow-hidden aspect-[546/1024] w-full bg-[#FAFAFE] shadow-inner p-1">
                <Image
                  src="/images/app-buyer.jpg"
                  alt="MeenPay Buyer Live Auction Interface"
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  className="object-contain rounded-[26px] sm:rounded-[28px]"
                  priority
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
