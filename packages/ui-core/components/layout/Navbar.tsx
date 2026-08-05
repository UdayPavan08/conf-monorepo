'use client';

import React, { useState } from 'react';
import { useConference } from '../ThemeProvider';

export const Navbar: React.FC = () => {
  const { config } = useConference();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 bg-[var(--bg-color)] border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Title */}
          <div className="flex items-center gap-3">
            {config.theme.logoUrl ? (
              <img src={config.theme.logoUrl} alt={config.shortName} className="h-10 w-auto" />
            ) : (
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                {config.shortName.charAt(0)}
              </div>
            )}
            <span className="font-bold text-xl tracking-tight text-white">
              {config.shortName}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
            <a href="#pricing" className="hover:text-white transition-colors">Register</a>
            <a href="#venue" className="hover:text-white transition-colors">Venue</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-md hover:brightness-110 transition-all duration-200 transform hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[var(--bg-color)] px-4 pt-4 pb-6 space-y-3">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">About</a>
          <a href="#speakers" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">Speakers</a>
          <a href="#schedule" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">Schedule</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">Register</a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full mt-4 px-5 py-3 rounded-full text-base font-semibold text-white shadow-md"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};
