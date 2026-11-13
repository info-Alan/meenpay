import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-3 sm:top-5 z-50 w-full px-4 sm:px-6 transition-all duration-300">
      <div className="mx-auto max-w-5xl">

        {/* Floating Modern Navbar Card */}
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-[0_10px_35px_-10px_rgba(90,47,216,0.12),0_4px_14px_-4px_rgba(0,0,0,0.04)] transition-all">

          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 pl-1 sm:pl-2">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-symbol.png"
                  alt="MeenPay"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-meen-600 transition-colors">
                MeenPay
              </span>
            </a>
          </div>

          {/* Right: Contact Button (Desktop / Tablet only; in mobile view only the logo is shown) */}
          <div className="hidden sm:flex items-center pr-1">
            <a
              href="#connect"
              className="inline-flex items-center justify-center bg-meen-600 hover:bg-meen-500 px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all shadow-sm shadow-meen-600/25 active:scale-[0.98] rounded-full"
            >
              Contact
            </a>
          </div>

        </div>

      </div>
    </header>
  );
}
