'use client';

import { useState } from 'react';

type Language = 'ESPAÑOL' | 'INGLES' | 'FRANCES';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('ESPAÑOL');

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <div className="flex items-center">
        <button 
          onClick={toggleDropdown}
          className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
        >
          <span className="text-primary font-medium">{selectedLanguage}</span>
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
            <span>⌄</span>
          </div>
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
          <div className="py-1">
            <button
              onClick={() => selectLanguage('ESPAÑOL')}
              className="block w-full text-left px-4 py-2 hover:bg-primary/10"
            >
              ESPAÑOL
            </button>
            <button
              onClick={() => selectLanguage('INGLES')}
              className="block w-full text-left px-4 py-2 hover:bg-primary/10"
            >
              INGLES
            </button>
            <button
              onClick={() => selectLanguage('FRANCES')}
              className="block w-full text-left px-4 py-2 hover:bg-primary/10"
            >
              FRANCES
            </button>
          </div>
        </div>
      )}
    </div>
  );
}