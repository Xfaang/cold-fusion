import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Language } from './i18n';
import { translations } from './i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Helper function to get URL parameters
  const getUrlParam = (param: string): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  // Helper function to detect browser language
  const detectBrowserLanguage = (): Language => {
    const browserLang = navigator.language || navigator.languages?.[0];
    if (browserLang && browserLang.toLowerCase().startsWith('en')) {
      return 'en';
    }
    return 'pl'; // Default to Polish for any other language
  };

  // Helper function to determine initial language based on priority
  const determineInitialLanguage = (): Language => {
    // Priority 1: URL parameter
    const urlLang = getUrlParam('lang');
    if (urlLang === 'en' || urlLang === 'pl') {
      return urlLang as Language;
    }

    // Priority 2: localStorage
    const savedLanguage = localStorage.getItem('coldFusion_language') as Language;
    if (savedLanguage && (savedLanguage === 'pl' || savedLanguage === 'en')) {
      return savedLanguage;
    }

    // Priority 3: Browser language detection
    return detectBrowserLanguage();
  };

  const [language, setLanguageState] = useState<Language>(determineInitialLanguage());

  useEffect(() => {
    // Check for URL parameter and update language if found
    const urlLang = getUrlParam('lang');
    if (urlLang === 'en' || urlLang === 'pl') {
      const langParam = urlLang as Language;
      if (language !== langParam) {
        setLanguageState(langParam);
        // Update localStorage when URL param is used
        localStorage.setItem('coldFusion_language', langParam);
      }
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('coldFusion_language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${language}`);
        return key; // Return the key itself if translation is not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;