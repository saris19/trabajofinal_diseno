'use client';

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    'language.name.es': 'ESPAÑOL',
    'language.name.en': 'INGLÉS',
    'language.name.fr': 'FRANCÉS',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.reviews': 'Reseñas',
    'nav.contact': 'Contacto',
    'home.title': 'Hola, soy Saray Noguera',
    'home.subtitle': 'Ingeniera de Software',
    'cta.contact': 'Contáctame',
    'cta.projects': 'Ver mis Proyectos',
    'home.connect': 'Conecta conmigo',
  },
  en: {
    'language.name.es': 'SPANISH',
    'language.name.en': 'ENGLISH',
    'language.name.fr': 'FRENCH',
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'home.title': "Hello, I'm Saray Noguera",
    'home.subtitle': 'Software Engineer',
    'cta.contact': 'Contact me',
    'cta.projects': 'View my Projects',
    'home.connect': 'Connect with me',
  },
  fr: {
    'language.name.es': 'ESPAGNOL',
    'language.name.en': 'ANGLAIS',
    'language.name.fr': 'FRANÇAIS',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.reviews': 'Avis',
    'nav.contact': 'Contact',
    'home.title': 'Bonjour, je suis Saray Noguera',
    'home.subtitle': 'Ingénieure Logiciel',
    'cta.contact': 'Contactez-moi',
    'cta.projects': 'Voir mes Projets',
    'home.connect': 'Connectez avec moi',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const saved = (localStorage.getItem('language') as Language | null) || 'es';
    setLanguageState(saved);
    try {
      document.documentElement.setAttribute('lang', saved);
    } catch {}
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    try {
      document.documentElement.setAttribute('lang', lang);
    } catch {}
  };

  const t = useMemo(() => {
    return (key: string) => {
      const dict = TRANSLATIONS[language] || TRANSLATIONS.es;
      return dict[key] ?? key;
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  }
  return ctx;
}