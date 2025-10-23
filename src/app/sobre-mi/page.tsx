'use client';
import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
// Removed unused Image import
import { useLanguage } from '@/context/LanguageContext';

export default function SobreMi() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Logo */}
      <Link href="/" className="absolute top-4 left-4">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
          <span className="text-primary font-bold text-xl">SN</span>
        </div>
      </Link>
      
      {/* Language Selector */}
      <LanguageSelector />
      
      <div className="max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('about.title')}
        </h1>
        
        <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 card p-6 md:p-8">
          <div className="flex justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-secondary">
              {/* Placeholder para la imagen de perfil */}
              <div className="w-full h-full flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-base md:text-lg mb-6">{t('about.intro1')}</p>
            <p className="text-base md:text-lg mb-6">{t('about.intro2')}</p>
            <button className="btn">{t('about.btn.more')}</button>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="card">
            <h2 className="text-2xl font-semibold text-primary mb-4">{t('about.skills.title')}</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h3 className="text-xl font-medium mb-2">{t('about.skills.backend')}</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>API REST</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">{t('about.skills.frontend')}</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-2xl font-semibold text-primary mb-4">{t('about.info.title')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">{t('about.info.likes')}</h3>
                <p>{t('about.info.likes.text')}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">{t('about.info.hobbies')}</h3>
                <p>{t('about.info.hobbies.text')}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">{t('about.info.goals')}</h3>
                <p>{t('about.info.goals.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}