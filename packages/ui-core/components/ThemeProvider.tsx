'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { ConferenceConfig, ThemeConfig } from '../config/conference';

interface ThemeContextType {
  config: ConferenceConfig;
  theme: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{
  config: ConferenceConfig;
  children: React.ReactNode;
}> = ({ config, children }) => {
  const { theme } = config;

  useEffect(() => {
    const root = document.documentElement;
    if (theme.primaryColor) {
      root.style.setProperty('--primary-color', theme.primaryColor);
    }
    if (theme.secondaryColor) {
      root.style.setProperty('--secondary-color', theme.secondaryColor);
    }
    if (theme.accentColor) {
      root.style.setProperty('--accent-color', theme.accentColor);
    }
    if (theme.backgroundColor) {
      root.style.setProperty('--bg-color', theme.backgroundColor);
    }
    if (theme.textColor) {
      root.style.setProperty('--text-color', theme.textColor);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ config, theme }}>
      <div 
        style={{
          '--primary-color': theme.primaryColor,
          '--secondary-color': theme.secondaryColor,
          '--accent-color': theme.accentColor,
          '--bg-color': theme.backgroundColor || '#090d16',
          '--text-color': theme.textColor || '#f8fafc',
        } as React.CSSProperties}
        className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] font-sans antialiased selection:bg-[var(--primary-color)] selection:text-white"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useConference = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useConference must be used within a ThemeProvider');
  }
  return context;
};
