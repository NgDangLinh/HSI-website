'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Dictionary, DICTIONARY } from './dictionaries';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi');

  // Load language preference from localStorage / cookie on client mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('hsi_lang') as Language | null;
      if (savedLang === 'vi' || savedLang === 'en') {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
        return;
      }

      // Check cookie NEXT_LOCALE
      const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]*)/);
      if (match && (match[1] === 'vi' || match[1] === 'en')) {
        const cookieLang = match[1] as Language;
        setLanguageState(cookieLang);
        document.documentElement.lang = cookieLang;
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

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

