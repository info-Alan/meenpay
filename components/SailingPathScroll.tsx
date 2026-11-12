'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function SailingPathScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentProgress = 0;

    const getTravelDistance = () => {
      const h = trackRef.current ? trackRef.current.clientHeight : (window.innerHeight - 130);
      return Math.max(h - 70, 100);
    };

    const updateShipTransform = (p: number) => {
      if (shipRef.current) {
        const travel = getTravelDistance();
        const shipY = p * travel;
        const swayAngle = Math.sin(p * Math.PI * 4) * 9;
        const swayX = Math.sin(p * Math.PI * 4) * 6;
        shipRef.current.style.transform = `translate3d(calc(-50% + ${swayX}px), ${shipY}px, 0) rotate(${swayAngle}deg)`;
      }
    };

    const handleScroll = () => {
      const windowScroll = window.scrollY || window.pageYOffset || 0;
      const docScroll = document.documentElement ? document.documentElement.scrollTop : 0;
      const bodyScroll = document.body ? document.body.scrollTop : 0;
      const currentScroll = Math.max(windowScroll, docScroll, bodyScroll);

      const docHeight = Math.max(
        document.documentElement ? document.documentElement.scrollHeight : 0,
        document.body ? document.body.scrollHeight : 0,
        document.documentElement ? document.documentElement.offsetHeight : 0,
        document.body ? document.body.offsetHeight : 0
      );
      const winHeight = window.innerHeight || (document.documentElement ? document.documentElement.clientHeight : 800);
      const scrollable = docHeight - winHeight;

      if (scrollable > 0) {
        const p = Math.min(Math.max(currentScroll / scrollable, 0), 1);
        currentProgress = p;
        // Direct instant DOM translation (0-latency hardware movement)
        updateShipTransform(p);
        // React state update for stage iconography (net, crates, flag)
        setScrollProgress(p);
      }
    };

    // Run initial positioning
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // 4 Story stages:
  // 1. Sailing out (0 - 0.25)
  // 2. Net deployed with fish (0.25 - 0.55)
  // 3. Crates on deck (0.55 - 0.8)
  // 4. "AUCTION ON" flag raised (0.8 - 1.0)
  const stage = scrollProgress < 0.25 ? 0 : scrollProgress < 0.55 ? 1 : scrollProgress < 0.8 ? 2 : 3;

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="fixed left-2 sm:left-6 lg:left-8 top-20 bottom-12 h-[calc(100vh-8rem)] w-10 sm:w-12 pointer-events-none select-none z-30"
    >
      {/* 1. SAILING PATH FROM TOP TO BOTTOM (Nautical dashed chart line) */}
      <svg
        viewBox="0 0 40 1000"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Curving dashed sailing track */}
        <path
          d="M 20 0 Q 30 125, 20 250 T 20 500 T 20 750 T 20 1000"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.4"
          strokeDasharray="4,4"
        />

        {/* Milestone waypoints along the route */}
        <circle cx="20" cy="10" r="3" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="20" cy="333" r="3" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="20" cy="666" r="3" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="20" cy="990" r="3" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
      </svg>

      {/* 2. THE SHIP (Top view, small & narrow monochrome outline illustration) */}
      <div
        ref={shipRef}
        className="absolute top-0 left-1/2 will-change-transform"
        style={{
          transform: 'translate3d(-50%, 0px, 0) rotate(0deg)',
        }}
      >
        <div className="w-9 h-18 sm:w-11 sm:h-22 relative">
          <svg
            viewBox="0 0 60 90"
            fill="none"
            className="w-full h-full drop-shadow-xs"
          >
            {/* Stern Wake Ripples (Trailing behind as the boat moves downward) */}
            <path
              d="M 26 12 L 26 2 M 34 12 L 34 2"
              stroke="#94A3B8"
              strokeWidth="0.8"
              strokeDasharray="2,2"
              opacity="0.6"
            />
            <path
              d="M 22 14 C 18 8, 12 4, 6 2"
              stroke="#CBD5E1"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <path
              d="M 38 14 C 42 8, 48 4, 54 2"
              stroke="#CBD5E1"
              strokeWidth="0.8"
              opacity="0.5"
            />

            {/* STAGE 1 (About): NET DEPLOYED TO THE SIDE (Monochrome outlines) */}
            {stage === 1 && (
              <g className="transition-opacity duration-300">
                {/* Arched Net Outlines sweeping into the water */}
                <path
                  d="M 42 36 C 54 36, 58 48, 52 56 C 46 52, 42 46, 38 42"
                  fill="#FFFFFF"
                  fillOpacity="0.7"
                  stroke="#0F172A"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
                {/* Net Mesh grid lines */}
                <line x1="42" y1="42" x2="54" y2="48" stroke="#64748B" strokeWidth="0.6" strokeDasharray="1.5,1.5" />
                <line x1="40" y1="48" x2="52" y2="42" stroke="#64748B" strokeWidth="0.6" strokeDasharray="1.5,1.5" />
                {/* Small outline fishes caught in net (Top View) */}
                <g transform="translate(46, 42) scale(0.6)">
                  <path d="M 0 0 C 3 -2, 8 -2, 11 0 C 8 2, 3 2, 0 0 Z" stroke="#0F172A" strokeWidth="1" fill="#FFFFFF" />
                  <path d="M 0 0 L -3 -2 L -3 2 Z" stroke="#0F172A" strokeWidth="0.8" />
                </g>
                <g transform="translate(48, 50) scale(0.5) rotate(20)">
                  <path d="M 0 0 C 3 -2, 8 -2, 11 0 C 8 2, 3 2, 0 0 Z" stroke="#0F172A" strokeWidth="1" fill="#FFFFFF" />
                  <path d="M 0 0 L -3 -2 L -3 2 Z" stroke="#0F172A" strokeWidth="0.8" />
                </g>
              </g>
            )}

            {/* MAIN SHIP HULL (Top View / Bird's-eye perspective pointing downwards) */}
            {/* Outer Hull Outline */}
            <path
              d="M 30 14 C 20 18, 16 35, 17 52 C 18 64, 25 72, 30 78 C 35 72, 42 64, 43 52 C 44 35, 40 18, 30 14 Z"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />

            {/* Inner Gunwale Rim Outline */}
            <path
              d="M 30 17 C 22 20, 19 35, 20 50 C 21 61, 26 68, 30 73 C 34 68, 39 61, 40 50 C 41 35, 38 20, 30 17 Z"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="0.8"
              opacity="0.6"
            />

            {/* Wooden Deck Cross Ribs / Benches */}
            <line x1="21" y1="28" x2="39" y2="28" stroke="#0F172A" strokeWidth="1" opacity="0.8" />
            <line x1="18" y1="40" x2="42" y2="40" stroke="#0F172A" strokeWidth="1" opacity="0.8" />
            <line x1="20" y1="52" x2="40" y2="52" stroke="#0F172A" strokeWidth="1" opacity="0.8" />

            {/* Center Keel / Planking Line */}
            <line x1="30" y1="18" x2="30" y2="72" stroke="#94A3B8" strokeWidth="0.6" strokeDasharray="3,2" opacity="0.5" />

            {/* STAGE 0 (Hero): SAILING (Mast step circle & bow wake) */}
            {stage === 0 && (
              <g className="transition-opacity duration-300">
                {/* Center mast step circle */}
                <circle cx="30" cy="34" r="2.2" stroke="#0F172A" strokeWidth="1.2" fill="#FFFFFF" />
                <circle cx="30" cy="34" r="0.8" fill="#0F172A" />
              </g>
            )}

            {/* STAGE 2 (Values/Problem): CONTAINERS / CRATES ON DECK */}
            {stage === 2 && (
              <g className="transition-opacity duration-300">
                {/* 2 Outline Crates neatly arranged on deck */}
                <rect
                  x="24"
                  y="31"
                  width="12"
                  height="7"
                  rx="1"
                  fill="#FFFFFF"
                  stroke="#0F172A"
                  strokeWidth="1.2"
                />
                <line x1="26" y1="34.5" x2="34" y2="34.5" stroke="#0F172A" strokeWidth="0.6" opacity="0.6" />
                
                <rect
                  x="25"
                  y="43"
                  width="10"
                  height="7"
                  rx="1"
                  fill="#FFFFFF"
                  stroke="#0F172A"
                  strokeWidth="1.2"
                />
                <line x1="27" y1="46.5" x2="33" y2="46.5" stroke="#0F172A" strokeWidth="0.6" opacity="0.6" />

                {/* Fish tail outline peeking out of crate */}
                <path
                  d="M 35 32 C 38 30, 41 31, 42 34 C 40 34, 38 34, 36 35 Z"
                  fill="#FFFFFF"
                  stroke="#0F172A"
                  strokeWidth="0.8"
                />
              </g>
            )}

            {/* STAGE 3 (Connect): "AUCTION ON" FLAG HOISTED */}
            {stage === 3 && (
              <g className="transition-opacity duration-300">
                {/* Mast pole */}
                <circle cx="30" cy="22" r="2" stroke="#0F172A" strokeWidth="1.2" fill="#FFFFFF" />
                
                {/* Narrow Outline Pennant Flag extending to the left */}
                <g transform="translate(2, 6)">
                  {/* Flag outline */}
                  <path
                    d="M 28 8 L 0 8 L 4 14 L 0 20 L 28 20 Z"
                    fill="#FFFFFF"
                    stroke="#0F172A"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  {/* Monochrome Outline Text inside flag */}
                  <text
                    x="6"
                    y="13"
                    fill="#0F172A"
                    fontSize="4.8"
                    fontWeight="800"
                    fontFamily="monospace"
                    letterSpacing="0.3"
                  >
                    AUCTION
                  </text>
                  <text
                    x="11"
                    y="18.5"
                    fill="#0F172A"
                    fontSize="4.8"
                    fontWeight="800"
                    fontFamily="monospace"
                    letterSpacing="0.3"
                  >
                    ON
                  </text>
                </g>
              </g>
            )}

            {/* Bow Wake Waves (Pushed aside by pointed bow moving downward) */}
            <path
              d="M 28 72 C 22 78, 14 84, 8 88"
              stroke="#64748B"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M 32 72 C 38 78, 46 84, 52 88"
              stroke="#64748B"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
