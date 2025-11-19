'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Home, User, FolderClosed, MessageSquare, Phone } from 'lucide-react';

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
              <Home size={16} />
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
              <User size={16} />
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
              <FolderClosed size={16} />
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
              <MessageSquare size={16} />
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
              <Phone size={16} />
              <span>{t('nav.contact')}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}