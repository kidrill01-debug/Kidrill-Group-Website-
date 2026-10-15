import React, { createContext, useContext, useState, useEffect } from 'react';
import { LogoStyle, WordmarkFont } from '../types';

interface BrandContextType {
  logoStyle: LogoStyle;
  setLogoStyle: (style: LogoStyle) => void;
  wordmarkFont: WordmarkFont;
  setWordmarkFont: (font: WordmarkFont) => void;
  isLogoStudioOpen: boolean;
  setIsLogoStudioOpen: (open: boolean) => void;
  openLogoStudio: () => void;
  closeLogoStudio: () => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

const STORAGE_KEY_LOGO = 'kidrill_brand_logo_style_v2';
const STORAGE_KEY_FONT = 'kidrill_brand_wordmark_font';

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logoStyle, setLogoStyleState] = useState<LogoStyle>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_LOGO) as LogoStyle;
      if (saved && ['prismatic-k', 'orbital-compass', 'sovereign-crest', 'minimal-ribbon', 'classic'].includes(saved)) {
        return saved;
      }
    }
    return 'prismatic-k'; // Modern Prismatic Nexus K as default
  });

  const [wordmarkFont, setWordmarkFontState] = useState<WordmarkFont>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_FONT) as WordmarkFont;
      if (saved && ['display', 'editorial', 'modern'].includes(saved)) {
        return saved;
      }
    }
    return 'display';
  });

  const [isLogoStudioOpen, setIsLogoStudioOpen] = useState(false);

  const setLogoStyle = (style: LogoStyle) => {
    setLogoStyleState(style);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_LOGO, style);
    }
  };

  const setWordmarkFont = (font: WordmarkFont) => {
    setWordmarkFontState(font);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_FONT, font);
    }
  };

  const openLogoStudio = () => setIsLogoStudioOpen(true);
  const closeLogoStudio = () => setIsLogoStudioOpen(false);

  return (
    <BrandContext.Provider
      value={{
        logoStyle,
        setLogoStyle,
        wordmarkFont,
        setWordmarkFont,
        isLogoStudioOpen,
        setIsLogoStudioOpen,
        openLogoStudio,
        closeLogoStudio,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = (): BrandContextType => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
