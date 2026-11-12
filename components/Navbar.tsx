'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs sm:text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-meen-600 transition-colors">
              About
            </a>
            <a href="#values" className="hover:text-meen-600 transition-colors">
              What We Offer
            </a>
            <a href="#problem" className="hover:text-meen-600 transition-colors">
              Our Purpose
            </a>
            <a href="#connect" className="hover:text-meen-600 transition-colors">
              Connect
            </a>
          </nav>

          {/* Right: CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 pr-1">
            <div className="hidden md:flex items-center">
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-meen-600 hover:bg-meen-500 px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all shadow-sm shadow-meen-600/25 active:scale-[0.98] rounded-full"
              >
                Explore MeenPay
              </a>
            </div>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-meen-600 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 border border-slate-200/90 bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-5 space-y-3.5 text-sm font-medium text-slate-700 shadow-xl">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-meen-600 transition-colors"
            >
              About
            </a>
            <a
              href="#values"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-meen-600 transition-colors"
            >
              What We Offer
            </a>
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-meen-600 transition-colors"
            >
              Our Purpose
            </a>
            <a
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-meen-600 transition-colors"
            >
              Connect
            </a>
            <div className="pt-2 border-t border-slate-100">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center bg-meen-600 hover:bg-meen-500 py-2.5 text-xs font-semibold text-white rounded-xl shadow-sm"
              >
                Explore MeenPay
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
