'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const [animateBlob, setAnimateBlob] = useState(false);
  const { t } = useLanguage();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  const triggerBlobAnimation = () => {
    setAnimateBlob(true);
    // Reiniciar la animación después de 2 segundos
    setTimeout(() => setAnimateBlob(false), 2000);
    
    // Emitir un evento personalizado para que la página principal pueda escucharlo
    const event = new CustomEvent('animateBlob', { detail: { triggered: true } });
    window.dispatchEvent(event);
  };

  return (
    <header className="sticky top-0 md:fixed md:top-0 left-0 right-0 z-50 px-4 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm border-b border-white/20 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout - Centrado */}
        <div className="hidden md:flex items-center justify-between gap-x-6">
          {/* Logo y Theme Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={triggerBlobAnimation} 
              className="flex items-center focus:outline-none"
              aria-label={t('header.animate_bg')}
            >
              <div className={`w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center ${animateBlob ? 'animate-spin-slow' : 'animate-pulse hover:animate-none'} transition-all`}>
                <span className="text-primary font-bold text-lg">SN</span>
              </div>
            </button>
            <ThemeToggle />
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-2 flex-wrap justify-center">
              <li>
                <Link 
                  href="/" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.home')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre-mi" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/sobre-mi') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.about')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/proyectos" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/proyectos') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.projects')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/resenas" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/resenas') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.reviews')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/contacto') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.contact')}</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Header superior con logo, theme toggle y language selector */}
          <div className="flex justify-between items-center mb-3">
            {/* Logo y Theme Toggle */}
            <div className="flex items-center gap-3">
              <button 
                onClick={triggerBlobAnimation} 
                className="flex items-center focus:outline-none"
                aria-label={t('header.animate_bg')}
              >
                <div className={`w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center ${animateBlob ? 'animate-spin-slow' : 'animate-pulse hover:animate-none'} transition-all`}>
                  <span className="text-primary font-bold text-lg">SN</span>
                </div>
              </button>
              <ThemeToggle />
            </div>

            {/* Language Selector */}
            <div className="flex items-center">
              <LanguageSelector />
            </div>
          </div>

          {/* Navigation siempre visible */}
          <nav className="w-full overflow-x-auto">
            <ul className="flex items-center gap-2 whitespace-nowrap px-1">
              <li>
                <Link 
                  href="/" 
                  className={`flex items-center px-3 py-1.5 rounded-full transition-all text-xs ${
                    isActive('/') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.home')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre-mi" 
                  className={`flex items-center px-3 py-1.5 rounded-full transition-all text-xs ${
                    isActive('/sobre-mi') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.about')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/proyectos" 
                  className={`flex items-center px-3 py-1.5 rounded-full transition-all text-xs ${
                    isActive('/proyectos') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.projects')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/resenas" 
                  className={`flex items-center px-3 py-1.5 rounded-full transition-all text-xs ${
                    isActive('/resenas') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.reviews')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className={`flex items-center px-3 py-1.5 rounded-full transition-all text-xs ${
                    isActive('/contacto') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>{t('nav.contact')}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}