'use client';

import React from 'react';
import { FishRound, FishStreamlined, OceanBubbles } from './FloatingFish';

export default function OnboardingPricingSection() {
  return (
    <section id="onboarding" className="relative py-8 sm:py-10 lg:py-12 bg-transparent overflow-hidden">
      
      {/* Ambient floating illustration fishes for ocean atmosphere */}
      <div className="absolute top-12 left-10 text-teal-600/25 animate-fish-b pointer-events-none hidden sm:block">
        <FishRound className="w-18 h-14" />
      </div>
      <div className="absolute bottom-12 right-12 text-meen-600/25 animate-fish-a pointer-events-none hidden md:block">
        <FishStreamlined className="w-22 h-11" />
      </div>
      <OceanBubbles className="absolute top-24 right-1/4 text-teal-400/25 hidden lg:flex" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
            Clear Onboarding. Free for Buyers.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
            No hidden deductions or surprises. Simple one-time onboarding for sellers and auctioneers, completely free for buyers.
          </p>
        </div>

        {/* 3 Role Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">

          {/* CARD 1: BUYERS (Free to Use) */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-teal-50/70 via-white to-white border border-teal-300/60 shadow-[0_20px_45px_-12px_rgba(20,184,166,0.18)] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div>
              {/* Title & Fee */}
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Buyers
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-teal-700 tracking-tight">
                  Free to Use
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                Completely free to use for fish buyers, merchants, and retailers. Download, register, and bid on live harbour catches without platform charges.
              </p>

              {/* Key Highlights */}
              <div className="mt-8 space-y-3.5 pt-6 border-t border-teal-100">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free mobile app access & registration</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Participate in live harbour auctions</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time lot photos, species & weighment</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Zero commission or subscription fees</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: SELLERS / BOAT OWNERS (One-Time Onboarding Fee) */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div>
              {/* Title & Fee */}
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Boat Owners
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Onboarding Fee
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                Simple one-time onboarding fee to register and verify your fishing vessel, setup digital lot creation, and access transparent harbour auctions.
              </p>

              {/* Key Highlights */}
              <div className="mt-8 space-y-3.5 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-meen-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Harbour vessel verification & boat profile</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-meen-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct daily fish catch lot listing</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-meen-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Live auction tracking from sea or dock</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-meen-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete settlement & record transparency</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: AUCTIONEERS (One-Time Onboarding Fee) */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div>
              {/* Title & Fee */}
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Auctioneers
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Onboarding Fee
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                Professional one-time onboarding to activate digital auctioneer tools, manage live harbour lots, and coordinate buyers and boat owners seamlessly.
              </p>

              {/* Key Highlights */}
              <div className="mt-8 space-y-3.5 pt-6 border-t border-slate-100">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-meen-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Digital auction console & lot management</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-meen-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Instant bid logging & price escalation</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-meen-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Live buyer verification & hammer awards</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-meen-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated daily harbour audit summary</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
