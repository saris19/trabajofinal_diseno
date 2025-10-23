'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function NavMenu() {
  const pathname = usePathname();
  const { t } = useLanguage();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg">
        <ul className="flex items-center gap-4">
          <li>
            <Link 
              href="/" 
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                isActive('/') ? 'bg-primary text-white' : 'hover:bg-primary/10'
              }`}
              aria-label={t('nav.home')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>{t('nav.home')}</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/sobre-mi" 
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                isActive('/sobre-mi') ? 'bg-primary text-white' : 'hover:bg-primary/10'
              }`}
              aria-label={t('nav.about')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
              <span>{t('nav.about')}</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/proyectos" 
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                isActive('/proyectos') ? 'bg-primary text-white' : 'hover:bg-primary/10'
              }`}
              aria-label={t('nav.projects')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>{t('nav.projects')}</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/resenas" 
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                isActive('/resenas') ? 'bg-primary text-white' : 'hover:bg-primary/10'
              }`}
              aria-label={t('nav.reviews')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>{t('nav.reviews')}</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/contacto" 
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all text-sm ${
                isActive('/contacto') ? 'bg-primary text-white' : 'hover:bg-primary/10'
              }`}
              aria-label={t('nav.contact')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{t('nav.contact')}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}