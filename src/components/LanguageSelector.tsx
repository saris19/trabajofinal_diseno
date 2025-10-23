'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectLanguage = (lang: 'es' | 'en' | 'fr') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector relative">
      <div className="flex items-center">
        <button 
          onClick={toggleDropdown}
          className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
        >
          <span className="text-primary font-medium">{t(`language.name.${language}`)}</span>
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
            <span>⌄</span>
          </div>
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="py-1">
            <button
              onClick={() => selectLanguage('es')}
              className="block w-full text-left px-4 py-2 hover:bg-primary/10"
            >
              {t('language.name.es')}
            </button>
            <button
              onClick={() => selectLanguage('en')}
              className="block w-full text-left px-4 py-2 hover:bg-primary/10"
            >
              {t('language.name.en')}
            </button>
            <button
              onClick={() => selectLanguage('fr')}
              className="block w-full text-left px-4 py-2 hover:bg-primary/10"
            >
              {t('language.name.fr')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}