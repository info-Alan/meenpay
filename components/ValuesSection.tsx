import React from 'react';
import Image from 'next/image';
import { FishAngel, FishClown, FishPuffer } from './FloatingFish';

const values = [
  {
    number: '01',
    title: 'Transparency',
    description: 'Clear and straightforward auction experiences.',
    image: '/images/kerala-boats-nets.jpg',
    imageAlt: 'Kerala fishermen on colourful traditional boats mending nets',
  },
  {
    number: '02',
    title: 'Trust',
    description: 'Connecting buyers and sellers with confidence.',
    image: '/images/kerala-fisherman-boat.jpg',
    imageAlt: 'Kerala boat owner standing at the bow of fishing vessel on sea',
  },
  {
    number: '03',
    title: 'Simplicity',
    description: 'Making fish auctions easier through technology.',
    image: '/images/kerala-trawlers-harbour.jpg',
    imageAlt: 'Row of Kerala coastal trawlers anchored in calm harbour water',
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="relative py-24 lg:py-36 bg-transparent border-t border-ivory-200/80 overflow-hidden">

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
        <div className="max-w-2xl mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-900 leading-[1.08]">
            Built on Trust. Driven by Simplicity.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-ivory-600 leading-relaxed font-normal">
            A better auction experience for everyone in the fish market.
          </p>
        </div>

        {/* Three Editorial Visual Blocks (No Generic Icon Cards, No Unwanted Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {values.map((v) => (
            <div key={v.title} className="group flex flex-col justify-between">

              {/* Image Block */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-ivory-200 shadow-md">
                <Image
                  src={v.image}
                  alt={v.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />


              </div>

              {/* Text Info Below Image */}
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-ivory-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-base text-ivory-600 leading-relaxed font-normal">
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
