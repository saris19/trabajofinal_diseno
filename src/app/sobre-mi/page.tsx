'use client';
import { useState } from 'react';
import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
import Modal from '@/components/Modal';
import { useLanguage } from '@/context/LanguageContext';

export default function SobreMi() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn group transition-all duration-300 transform hover:scale-105"
            >
              {t('about.btn.more')}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </button>
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

      {/* Modal con información personal detallada */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={t('about.info.title')}
      >
        <div className="space-y-6">
          {/* Gustos */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">{t('about.info.likes')}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{t('about.info.likes.text')}</p>
          </div>

          {/* Pasatiempos */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m-4-8V9a2 2 0 0 1 2-2h4m-4 8h10a2 2 0 0 0 2-2v-3c0-1.1-.9-2-2-2H9m0 8V9a2 2 0 0 1 2-2h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{t('about.info.hobbies')}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{t('about.info.hobbies.text')}</p>
          </div>

          {/* Objetivos */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">{t('about.info.goals')}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{t('about.info.goals.text')}</p>
          </div>

          {/* Habilidades técnicas destacadas */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300">{t('about.skills.title')}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">{t('about.skills.frontend')}</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">{t('about.skills.backend')}</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'API REST'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
}