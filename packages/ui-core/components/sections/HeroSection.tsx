'use client';

import React from 'react';
import { useConference } from '../ThemeProvider';

export const HeroSection: React.FC = () => {
  const { config } = useConference();

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:pb-40">
      {/* Dynamic Background Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ backgroundColor: 'var(--primary-color)' }}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: 'var(--accent-color)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {/* Date & Location Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-slate-300 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-color)' }} />
          <span>{config.dates}</span>
          <span className="text-slate-500">•</span>
          <span>{config.location}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          {config.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
          {config.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center sm:justify-start">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white shadow-xl hover:brightness-110 transition-all duration-200 transform hover:-translate-y-1 text-center"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            Register for Conference
          </a>
          <a
            href="#speakers"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-slate-200 border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm text-center"
          >
            View Keynote Speakers
          </a>
        </div>

        {/* Venue Information Badge */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-sm text-slate-400">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">Official Venue</span>
            <span className="text-white font-semibold">{config.venue}</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">Expected Attendees</span>
            <span className="text-white font-semibold">1,200+ Healthcare Leaders</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">Certification</span>
            <span className="text-white font-semibold">CME & CNE Accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
};
