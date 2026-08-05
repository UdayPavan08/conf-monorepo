'use client';

import React from 'react';
import { useConference } from '../ThemeProvider';

export const Footer: React.FC = () => {
  const { config } = useConference();

  return (
    <footer className="border-t border-white/10 bg-[var(--bg-color)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {config.name}
            </h3>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              {config.tagline}
            </p>
            {config.organizerName && (
              <p className="text-xs text-slate-500">
                Organized by <span className="text-slate-300 font-medium">{config.organizerName}</span>
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-sm">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Event Details</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Conference</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Keynote Speakers</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Program Schedule</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Registration & Fees</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3 text-sm">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Venue & Contact</h4>
            <p className="text-slate-300">
              <span className="font-semibold text-white block">{config.venue}</span>
              {config.location}
            </p>
            <p className="text-slate-400 text-xs mt-2">
              Dates: <span className="text-slate-200">{config.dates}</span>
            </p>
            {config.contactEmail && (
              <p className="text-xs pt-2">
                <a 
                  href={`mailto:${config.contactEmail}`}
                  className="hover:underline"
                  style={{ color: 'var(--accent-color)' }}
                >
                  {config.contactEmail}
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {config.shortName}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
