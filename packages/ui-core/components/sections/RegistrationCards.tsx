'use client';

import React from 'react';
import { useConference } from '../ThemeProvider';

export const RegistrationCards: React.FC = () => {
  const { config } = useConference();

  if (!config.registrationTiers || config.registrationTiers.length === 0) return null;

  return (
    <section id="pricing" className="py-24 bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span 
            className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-white/10"
            style={{ color: 'var(--accent-color)', backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            Join The Conference
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Registration Packages
          </h2>
          <p className="text-slate-400 text-base">
            Choose your delegate tier to confirm your attendance and secure your CME/CNE credits.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {config.registrationTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between backdrop-blur-md shadow-xl ${
                tier.isPopular 
                  ? 'border-[var(--primary-color)] ring-2 ring-[var(--primary-color)] scale-105 z-10' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {tier.isPopular && (
                <div 
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[36px]">{tier.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-xs text-slate-400">/ delegate</span>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span style={{ color: 'var(--accent-color)' }} className="font-bold text-sm">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  className="w-full py-3.5 rounded-full text-sm font-bold text-white transition-all shadow-lg hover:brightness-110"
                  style={{ backgroundColor: tier.isPopular ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)' }}
                >
                  {tier.ctaText || 'Select Pass'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
