'use client';

import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const handleToggle = () => {
    toggleTheme();
    // Guardar preferencia del usuario explícitamente al alternar
    if (typeof window !== 'undefined') {
      const newPref = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newPref);
    }
  };

  return (
    <div className="relative flex-shrink-0">
      <button
        id="toggle-theme"
        onClick={handleToggle}
        className="flex items-center justify-center h-9 md:h-10 w-9 md:w-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-sm hover:shadow-md transition-colors border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
        aria-label={theme === 'light' ? t('theme.toggle.to_dark') : t('theme.toggle.to_light')}
      >
        {theme === 'light' ? (
          <Sun size={18} className="text-yellow-500" />
        ) : (
          <Moon size={18} className="text-blue-400" />
        )}
      </button>
    </div>
  );
}