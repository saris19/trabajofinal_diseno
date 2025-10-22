'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateBlob, setAnimateBlob] = useState(false);
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout - Centrado */}
        <div className="hidden md:flex items-center justify-between gap-x-6">
          {/* Logo */}
          <button 
            onClick={triggerBlobAnimation} 
            className="flex items-center focus:outline-none"
            aria-label="Animar fondo"
          >
            <div className={`w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center ${animateBlob ? 'animate-spin-slow' : 'animate-pulse hover:animate-none'} transition-all`}>
              <span className="text-primary font-bold text-lg">SN</span>
            </div>
          </button>

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
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre-mi" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/sobre-mi') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>Sobre mí</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/proyectos" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/proyectos') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>Proyectos</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/resenas" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/resenas') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>Reseñas</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                    isActive('/contacto') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle y Language Selector */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center z-50">
          {/* Logo y Theme Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={triggerBlobAnimation} 
              className="flex items-center focus:outline-none"
              aria-label="Animar fondo"
            >
              <div className={`w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center ${animateBlob ? 'animate-spin-slow' : 'animate-pulse hover:animate-none'} transition-all`}>
                <span className="text-primary font-bold text-lg">SN</span>
              </div>
            </button>
            <ThemeToggle />
          </div>

          {/* Menu Button (Mobile) */}
          <button 
            onClick={toggleMenu}
            className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md flex items-center justify-center"
            aria-label="Menú"
            aria-expanded={isMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-primary"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-xl mt-1 py-4 px-4 z-50">
          <nav>
            <ul className="flex flex-col gap-3">
              <li>
                <Link 
                  href="/" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive('/') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre-mi" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive('/sobre-mi') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 1 0-16 0" />
                  </svg>
                  <span>Sobre mí</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/proyectos" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive('/proyectos') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Proyectos</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/resenas" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive('/resenas') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Reseñas</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive('/contacto') ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Contacto</span>
                </Link>
              </li>
              <li className="mt-6 mb-2">
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-1">Personalización</div>
                  <div className="flex items-center justify-center gap-4">
                    <ThemeToggle />
                    <LanguageSelector />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}