'use client';

import React, { useState } from 'react';
import { useConference } from '../ThemeProvider';
import { Speaker } from '../../config/conference';

export const SpeakersGrid: React.FC = () => {
  const { config } = useConference();
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  if (!config.speakers || config.speakers.length === 0) return null;

  return (
    <section id="speakers" className="py-24 bg-black/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span 
            className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-white/10"
            style={{ color: 'var(--accent-color)', backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            Renowned Thought Leaders
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Keynote Speakers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hear from world-renowned clinical researchers, surgeons, and healthcare pioneers shaping the future of medicine.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.speakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group relative rounded-3xl p-6 bg-slate-900/60 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer shadow-lg overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Speaker Avatar */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-800">
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span 
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10"
                    >
                      {speaker.institution}
                    </span>
                  </div>
                </div>

                {/* Speaker Details */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent-color)] transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1">
                    {speaker.title}
                  </p>
                </div>

                {/* Speaker Presentation Topic */}
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Keynote Topic
                  </span>
                  <p className="text-sm font-medium text-slate-200 line-clamp-2">
                    "{speaker.topic}"
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold" style={{ color: 'var(--accent-color)' }}>
                <span>View Full Biography & Sessions</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Speaker Bio Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-xl w-full rounded-3xl bg-slate-900 border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10"
            >
              ✕
            </button>
            <div className="flex items-center gap-4">
              <img src={selectedSpeaker.avatar} alt={selectedSpeaker.name} className="w-20 h-20 rounded-2xl object-cover" />
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedSpeaker.name}</h3>
                <p className="text-sm text-slate-400">{selectedSpeaker.title}</p>
                <p className="text-xs text-[var(--accent-color)] font-medium mt-1">{selectedSpeaker.institution}</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Keynote Presentation</h4>
              <p className="text-base font-semibold text-white">"{selectedSpeaker.topic}"</p>
            </div>
            {selectedSpeaker.bio && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Biography</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedSpeaker.bio}</p>
              </div>
            )}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white shadow-md"
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                Close Biography
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
