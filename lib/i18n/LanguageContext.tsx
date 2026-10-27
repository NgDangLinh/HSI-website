'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Dictionary, DICTIONARY } from './dictionaries';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'vi';
  try {
    const savedLang = localStorage.getItem('hsi_lang') as Language | null;
    if (savedLang === 'vi' || savedLang === 'en') {
      return savedLang;
    }

    const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]*)/);
    if (match && (match[1] === 'vi' || match[1] === 'en')) {
      return match[1] as Language;
    }
  } catch {
    // Ignore storage errors in restricted contexts
  }
  return 'vi';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      document.documentElement.lang = language;
    } catch {
      // Ignore DOM errors
    }
  }, [language]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('hsi_lang', newLang);
      document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = newLang;
    } catch {
      // Ignore storage errors
    }
  };

  const dict = DICTIONARY[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
