import React from 'react';

// Handcrafted SVG line-art fish illustrations based directly on the user's reference sheet

// 1. Sleek Streamlined Fish (Tuna / Mackerel)
export function FishStreamlined({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 25 C22 10, 58 8, 82 25 C58 42, 22 40, 6 25 Z" />
      <path d="M82 25 L96 12 C91 20, 91 30, 96 38 Z" />
      <path d="M42 12 Q52 6 62 13" />
      <path d="M32 25 Q40 30 34 35" />
      <circle cx="18" cy="22" r="2.5" strokeWidth="1.5" />
      <circle cx="18" cy="22" r="1.2" fill="currentColor" />
      <path d="M26 18 Q30 25 26 32" />
      <path d="M46 16 Q50 25 46 34" opacity="0.7" />
      <path d="M58 18 Q62 25 58 32" opacity="0.7" />
    </svg>
  );
}

// 2. Crescent Tall Angelfish (From row 1 of reference)
export function FishAngel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M40 24 C48 8, 62 2, 60 26" />
      <path d="M40 66 C48 82, 62 88, 60 64" />
      <path d="M12 45 C28 22, 58 18, 72 45 C58 72, 28 68, 12 45 Z" />
      <path d="M72 45 L86 32 C83 40, 83 50, 86 58 Z" />
      <circle cx="24" cy="42" r="2.5" strokeWidth="1.5" />
      <circle cx="24.5" cy="42" r="1.2" fill="currentColor" />
      <path d="M36 28 Q44 45 36 62" />
      <path d="M48 26 Q56 45 48 64" />
      <path d="M58 30 Q64 45 58 60" opacity="0.7" />
    </svg>
  );
}

// 3. Cute Puffer Fish with spots and large eye (From row 2 of reference)
export function FishPuffer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="40" cy="35" r="26" />
      <circle cx="24" cy="30" r="4.5" strokeWidth="1.5" />
      <circle cx="25" cy="30" r="2.2" fill="currentColor" />
      <path d="M12 38 Q15 40 13 43" />
      <path d="M66 35 L78 24 C75 31, 75 39, 78 46 Z" />
      <path d="M44 34 Q50 38 45 44" />
      <circle cx="36" cy="22" r="1.5" fill="currentColor" />
      <circle cx="48" cy="24" r="1.5" fill="currentColor" />
      <circle cx="56" cy="30" r="1.5" fill="currentColor" />
      <circle cx="42" cy="46" r="1.5" fill="currentColor" />
      <circle cx="52" cy="42" r="1.5" fill="currentColor" />
      <circle cx="34" cy="40" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 4. Striped Clownfish / Reef Fish (From row 1 of reference)
export function FishClown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 55" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 28 C20 12, 60 10, 80 28 C60 46, 20 44, 10 28 Z" />
      <circle cx="20" cy="24" r="2.5" strokeWidth="1.5" />
      <circle cx="20" cy="24" r="1.2" fill="currentColor" />
      <path d="M34 16 Q38 28 34 40" strokeWidth="2" />
      <path d="M52 14 Q56 28 52 42" strokeWidth="2" />
      <path d="M70 19 Q73 28 70 37" strokeWidth="2" />
      <path d="M80 28 Q92 18 94 28 Q92 38 80 28 Z" />
      <path d="M42 28 Q48 34 42 38" />
      <path d="M44 14 Q52 8 60 14" />
      <path d="M46 42 Q52 48 58 42" />
    </svg>
  );
}

export const FishTropical = FishClown;

// 5. Playful Deep-Sea Angler Fish with Light Bulb Antenna (From bottom right of reference)
export function FishAngler({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 65" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M35 18 C30 8, 22 8, 24 16" />
      <circle cx="24" cy="16" r="3" fill="currentColor" />
      <path d="M12 36 C18 20, 56 18, 72 36 C56 56, 22 56, 12 36 Z" />
      <path d="M14 42 Q26 48 30 38" />
      <circle cx="28" cy="28" r="3.5" strokeWidth="1.5" />
      <circle cx="29" cy="28" r="1.8" fill="currentColor" />
      <path d="M72 36 Q86 28 84 36 Q86 44 72 36 Z" />
      <path d="M48 38 Q56 42 50 48" />
      <path d="M54 22 Q60 18 64 24" />
    </svg>
  );
}

// 6. Round Pearl Spot (Karimeen) / Bream (From bottom row of reference)
export function FishRound({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 85 65" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="38" cy="32" rx="28" ry="22" />
      <path d="M66 32 L78 20 C74 27, 74 37, 78 44 Z" />
      <path d="M30 10 Q40 5 46 10" />
      <path d="M32 54 Q40 59 46 54" />
      <circle cx="22" cy="27" r="3.2" strokeWidth="1.5" />
      <circle cx="22" cy="27" r="1.5" fill="currentColor" />
      <path d="M10 35 Q14 36 12 39" />
      <path d="M38 28 Q44 32 38 38" />
      <circle cx="48" cy="24" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="54" cy="32" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="46" cy="38" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// Soft Rising Ocean Bubbles
export function OceanBubbles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none flex flex-col items-center gap-2 ${className}`}>
      <div className="w-3 h-3 rounded-full border border-current opacity-30 animate-bubble" />
      <div className="w-2 h-2 rounded-full border border-current opacity-40 animate-bubble [animation-delay:2s]" />
      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-30 animate-bubble [animation-delay:4s]" />
    </div>
  );
}

// Full-Page Ambient Ocean Layer with gracefully floating illustration fishes
export default function FloatingFishBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* 1. HERO SECTION OCEAN LAYER */}
      {/* Upper Right: Swimming clownfish */}
      <div className="absolute top-[5%] right-[8%] text-ocean-400/25 animate-fish-a transform scale-110">
        <FishClown className="w-20 h-11" />
      </div>

      {/* Upper Left: Elegant tall angelfish */}
      <div className="absolute top-[12%] left-[4%] text-meen-400/25 animate-fish-b transform scale-100 -scale-x-100">
        <FishAngel className="w-18 h-18" />
      </div>

      {/* Mid Hero: Cute spotted puffer fish */}
      <div className="absolute top-[22%] right-[32%] text-teal-300/20 animate-fish-c transform scale-90">
        <FishPuffer className="w-16 h-13" />
      </div>

      {/* Hero Bubbles */}
      <OceanBubbles className="absolute top-[18%] right-[14%] text-teal-300/30" />
      <OceanBubbles className="absolute top-[28%] left-[12%] text-meen-300/30" />

      {/* 2. ABOUT SECTION OCEAN LAYER */}
      {/* Playful angler fish */}
      <div className="absolute top-[38%] left-[7%] text-ocean-600/25 animate-fish-a transform scale-100">
        <FishAngler className="w-20 h-14" />
      </div>

      {/* Streamlined tuna drifting */}
      <div className="absolute top-[45%] right-[6%] text-meen-600/25 animate-fish-b transform scale-105 -scale-x-100">
        <FishStreamlined className="w-22 h-11" />
      </div>

      {/* School of 2 tiny clownfish */}
      <div className="absolute top-[48%] left-[42%] text-ocean-500/20 animate-fish-c transform scale-75">
        <FishClown className="w-16 h-9" />
      </div>
      <div className="absolute top-[49.5%] left-[45%] text-ocean-500/20 animate-fish-a transform scale-60">
        <FishClown className="w-14 h-8" />
      </div>

      {/* 3. VALUES SECTION OCEAN LAYER */}
      {/* Round pearl spot (Karimeen) */}
      <div className="absolute top-[62%] right-[12%] text-ocean-600/25 animate-fish-c transform scale-100 -scale-x-100">
        <FishRound className="w-18 h-14" />
      </div>

      {/* Tall angelfish swimming up */}
      <div className="absolute top-[70%] left-[5%] text-meen-600/25 animate-fish-a transform scale-95">
        <FishAngel className="w-18 h-18" />
      </div>

      {/* Spotted puffer floating */}
      <div className="absolute top-[78%] right-[22%] text-teal-600/20 animate-fish-b transform scale-85">
        <FishPuffer className="w-15 h-12" />
      </div>

      {/* 4. PURPOSE & CONNECT DEEP SEA LAYER */}
      {/* Angler fish in deep dark water */}
      <div className="absolute top-[88%] left-[10%] text-teal-300/25 animate-fish-c transform scale-110">
        <FishAngler className="w-22 h-16" />
      </div>

      {/* School of 2 streamlined fish */}
      <div className="absolute top-[93%] right-[15%] text-meen-300/25 animate-fish-a transform scale-90 -scale-x-100">
        <FishStreamlined className="w-20 h-10" />
      </div>
      <div className="absolute top-[94.5%] right-[19%] text-meen-300/20 animate-fish-b transform scale-70 -scale-x-100">
        <FishStreamlined className="w-16 h-8" />
      </div>

      <OceanBubbles className="absolute top-[90%] left-[28%] text-teal-300/25" />

      {/* ============ GIANT OCEAN SILHOUETTES ============ */}
      {/* These massive, ultra-low-opacity silhouettes create the oceanic atmosphere */}

      {/* HERO ZONE — Giant Marlin cruising the surface */}
      <div className="absolute top-[6%] left-[-5%] text-teal-400/[0.04] animate-giant-float pointer-events-none">
        <GiantMarlin className="w-[420px] h-[105px]" />
      </div>

      {/* ABOUT ZONE — School of fish gathering near the dock */}
      <div className="absolute top-[32%] right-[-2%] text-teal-500/[0.05] animate-giant-float-reverse pointer-events-none">
        <GiantSchool className="w-[480px] h-[110px]" />
      </div>

      {/* VALUES ZONE — Second marlin swimming opposite direction */}
      <div className="absolute top-[55%] left-[5%] text-ocean-400/[0.04] animate-giant-float pointer-events-none -scale-x-100">
        <GiantMarlin className="w-[380px] h-[95px]" />
      </div>

      {/* PROBLEM ZONE — Majestic whale in the deep */}
      <div className="absolute top-[72%] right-[0%] text-meen-300/[0.06] animate-giant-float-reverse pointer-events-none">
        <GiantWhale className="w-[450px] h-[160px]" />
      </div>

      {/* CONNECT ZONE — School ascending from the abyss */}
      <div className="absolute top-[88%] left-[8%] text-meen-200/[0.05] animate-giant-float pointer-events-none">
        <GiantSchool className="w-[400px] h-[90px]" />
      </div>

      {/* Scattered ambient bubbles throughout the ocean column */}
      <OceanBubbles className="absolute top-[35%] right-[8%] text-teal-400/20" />
      <OceanBubbles className="absolute top-[58%] left-[18%] text-ocean-400/20" />
      <OceanBubbles className="absolute top-[75%] right-[25%] text-meen-300/20" />

    </div>
  );
}


// ========================================================================
//  GIANT OCEAN SILHOUETTES — Atmospheric background illustrations
// ========================================================================

// Giant Marlin / Swordfish — sleek predator, surface & mid-depth layers
export function GiantMarlin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 100" fill="currentColor" className={className}>
      {/* Bill / Sword */}
      <path d="M0 48 L55 46 Q58 48 55 50 L0 52 Z" opacity="0.6" />
      {/* Fusiform body */}
      <path d="M55 48 C85 28, 170 14, 270 32 C315 40, 345 47, 355 50 C345 53, 315 60, 270 68 C170 86, 85 72, 55 52 Z" />
      {/* Dorsal fin — tall crescent */}
      <path d="M155 20 C175 2, 215 4, 235 26 C220 18, 195 16, 175 20" opacity="0.7" />
      {/* Caudal tail — forked crescent */}
      <path d="M350 48 L392 22 C382 38, 380 48, 380 50 C380 52, 382 62, 392 78 L350 52 Z" opacity="0.85" />
      {/* Pectoral fin */}
      <path d="M115 60 C135 82, 162 86, 172 72" opacity="0.45" />
      {/* Anal fin */}
      <path d="M280 68 C290 80, 305 82, 312 72" opacity="0.4" />
      {/* Lateral line detail */}
      <path d="M75 49 C150 42, 260 44, 340 49" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
      {/* Eye highlight */}
      <circle cx="72" cy="44" r="4.5" opacity="0.25" />
      <circle cx="73" cy="43" r="2" opacity="0" />
    </svg>
  );
}

// Giant Humpback Whale — majestic deep-ocean silhouette
export function GiantWhale({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 460 160" fill="currentColor" className={className}>
      {/* Massive body */}
      <path d="M32 78 C52 30, 145 8, 255 18 C345 26, 395 48, 415 78 C425 95, 418 115, 402 125 C348 155, 175 162, 88 142 C50 132, 26 108, 32 78 Z" />
      {/* Tail flukes — wide horizontal */}
      <path d="M408 88 L452 42 C442 65, 440 95, 440 100 C440 105, 442 115, 452 128 L408 98 Z" opacity="0.8" />
      {/* Pectoral fin — long, graceful */}
      <path d="M145 128 C165 158, 198 162, 212 142 C195 148, 170 145, 155 135" opacity="0.5" />
      {/* Eye */}
      <circle cx="62" cy="72" r="5" opacity="0.15" />
      {/* Mouth line */}
      <path d="M35 85 C52 98, 82 105, 112 98" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.12" />
      {/* Throat pleats */}
      <path d="M60 95 C80 108, 110 118, 140 115" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.1" />
      <path d="M65 100 C85 115, 120 125, 150 120" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.08" />
      {/* Dorsal bump */}
      <path d="M340 35 C348 28, 358 28, 365 34" opacity="0.6" />
    </svg>
  );
}

// Giant School of Fish — sweeping arc formation (the gathering)
export function GiantSchool({ className = "" }: { className?: string }) {
  const fish = [
    { x: 55, y: 52, s: 0.7 }, { x: 95, y: 38, s: 0.85 }, { x: 140, y: 28, s: 1 },
    { x: 190, y: 22, s: 1.1 }, { x: 245, y: 20, s: 1.2 }, { x: 300, y: 22, s: 1.1 },
    { x: 350, y: 28, s: 1 }, { x: 395, y: 38, s: 0.85 }, { x: 435, y: 52, s: 0.7 },
    { x: 110, y: 65, s: 0.6 }, { x: 165, y: 55, s: 0.75 }, { x: 225, y: 48, s: 0.85 },
    { x: 285, y: 50, s: 0.8 }, { x: 340, y: 58, s: 0.7 }, { x: 390, y: 68, s: 0.55 },
    { x: 190, y: 78, s: 0.5 }, { x: 245, y: 74, s: 0.55 }, { x: 300, y: 76, s: 0.5 },
  ];
  return (
    <svg viewBox="0 0 500 100" fill="currentColor" className={className}>
      {fish.map((f, i) => (
        <g key={i} transform={`translate(${f.x}, ${f.y}) scale(${f.s})`}>
          <path d="M0 0 C5 -3.5, 16 -4.5, 24 0 C16 4.5, 5 3.5, 0 0 Z" />
          <path d="M24 0 L32 -4.5 C30 -1, 30 1, 32 4.5 Z" opacity="0.7" />
          <circle cx="6" cy="-1" r="1" opacity="0.3" />
        </g>
      ))}
    </svg>
  );
}
