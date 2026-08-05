'use client';

import React, { useState } from 'react';
import { useConference } from '../ThemeProvider';

export const ScheduleTimeline: React.FC = () => {
  const { config } = useConference();
  const [activeDay, setActiveDay] = useState(1);

  if (!config.schedule || config.schedule.length === 0) return null;

  const currentDaySchedule = config.schedule.find((s) => s.day === activeDay) || config.schedule[0];

  return (
    <section id="schedule" className="py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span 
            className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-white/10"
            style={{ color: 'var(--accent-color)', backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            Program Agenda
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Schedule Timeline
          </h2>
          <p className="text-slate-400 text-base">
            Explore keynotes, symposia, panel sessions, and networking events.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {config.schedule.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeDay === day.day
                  ? 'text-white shadow-lg scale-105'
                  : 'text-slate-400 bg-slate-900 border border-white/10 hover:text-white'
              }`}
              style={{
                backgroundColor: activeDay === day.day ? 'var(--primary-color)' : undefined,
              }}
            >
              Day {day.day} — {day.date}
            </button>
          ))}
        </div>

        {/* Timeline Sessions List */}
        <div className="space-y-4">
          {currentDaySchedule.sessions.map((session) => (
            <div
              key={session.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-white/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md shadow-md"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-white/10 text-slate-300">
                    {session.time}
                  </span>
                  {session.category && (
                    <span 
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-md"
                      style={{ 
                        color: 'var(--accent-color)', 
                        backgroundColor: 'rgba(255,255,255,0.05)'
                      }}
                    >
                      {session.category}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white pt-1">
                  {session.title}
                </h3>
                {session.speakerName && (
                  <p className="text-xs font-medium text-slate-400">
                    Presented by <span className="text-slate-200 font-semibold">{session.speakerName}</span>
                  </p>
                )}
              </div>

              {session.location && (
                <div className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 border border-white/5 shrink-0">
                  📍 {session.location}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
