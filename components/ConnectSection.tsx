import React from 'react';
import Image from 'next/image';
import { FishStreamlined, FishAngler } from './FloatingFish';

export default function ConnectSection() {
  const contactEmail = 'contact@meenpay.com';

  return (
    <section id="connect" className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 bg-[#0F0926] text-white border-t border-meen-900/60 overflow-hidden">
      {/* Ambient Purple Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-meen-600/15 blur-3xl pointer-events-none" />

      {/* Floating deep-sea ambient fishes */}
      <div className="absolute top-14 right-16 text-meen-300/25 animate-fish-a pointer-events-none hidden sm:block">
        <FishStreamlined className="w-24 h-12" />
      </div>
      <div className="absolute bottom-24 left-10 text-teal-300/25 animate-fish-b pointer-events-none -scale-x-100 hidden md:block">
        <FishAngler className="w-22 h-14" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Main Connect Block */}
        <div className="max-w-3xl pb-20 lg:pb-28 border-b border-white/10">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Let&apos;s Build Better Auctions.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-meen-200 leading-relaxed font-normal max-w-xl">
            Interested in MeenPay? We&apos;d love to hear from you.
          </p>

          {/* Prominent Email Mailto CTA in MeenPay Purple */}
          <div className="mt-10">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-3 bg-meen-600 hover:bg-meen-500 text-white px-8 py-4 text-base font-semibold tracking-tight rounded-xl shadow-xl shadow-meen-600/40 transition-all active:scale-[0.99]"
            >
              <span>contact@meenpay.com</span>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-meen-300/80">

          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <Image
                src="/logo-symbol.png"
                alt="MeenPay Symbol"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
            <span className="font-semibold text-white tracking-tight">MeenPay</span>
            <span>·</span>
            <span>© 2026 MeenPay. All rights reserved.</span>
          </div>

          {/* Minimal Tag */}
          <div className="font-mono text-meen-300">
            Digital Auction Network
          </div>

        </div>

      </div>
    </section>
  );
}
