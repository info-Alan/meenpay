'use client';

import React from 'react';
import Image from 'next/image';
import { FishAngel, FishClown, FishPuffer } from './FloatingFish';

const values = [
  {
    title: 'Transparency',
    description: 'Clear and straightforward auction experiences.',
    image: '/images/kerala-boats-nets.jpg',
    imageAlt: 'Kerala fishermen on colourful traditional boats mending nets',
  },
  {
    title: 'Trust',
    description: 'Connecting buyers and sellers with confidence.',
    image: '/images/kerala-fisherman-boat.jpg',
    imageAlt: 'Kerala boat owner standing at the bow of fishing vessel on sea',
  },
  {
    title: 'Simplicity',
    description: 'Making fish auctions easier through technology.',
    image: '/images/kerala-trawlers-harbour.jpg',
    imageAlt: 'Row of Kerala coastal trawlers anchored in calm harbour water',
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="relative py-8 sm:py-10 lg:py-12 bg-transparent overflow-hidden">

      {/* Ambient floating illustration fishes for ocean feel */}
      <div className="absolute top-12 right-12 text-teal-600/25 animate-fish-a pointer-events-none hidden sm:block">
        <FishAngel className="w-20 h-20" />
      </div>
      <div className="absolute bottom-14 left-8 text-meen-600/25 animate-fish-b pointer-events-none hidden md:block">
        <FishClown className="w-20 h-11" />
      </div>
      <div className="absolute top-1/2 left-1/3 text-ocean-500/20 animate-fish-c pointer-events-none hidden lg:block">
        <FishPuffer className="w-16 h-12" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

        {/* Section Heading & Subheading */}
        <div className="max-w-2xl mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
            Built on Trust. Driven by Simplicity.
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
            A better auction experience for everyone in the fish market.
          </p>
        </div>

        {/* Three Editorial Visual Cards (Text placed INSIDE the image overlay) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10">
          {values.map((v) => (
            <div
              key={v.title}
              className="group relative rounded-3xl overflow-hidden aspect-[16/11] sm:aspect-[4/3] lg:aspect-[4/5] bg-slate-900 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background Photo */}
              <Image
                src={v.image}
                alt={v.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Cinematic Ocean Vignette & Dark Gradient for Crisp Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 bg-meen-950/20 mix-blend-multiply pointer-events-none" />

              {/* Text Info Overlay INSIDE the Image at the Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8 z-10 text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                  {v.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal">
                  {v.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
