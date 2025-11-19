'use client';

import Link from 'next/link';

import SocialLinks from '@/components/SocialLinks';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const [animatePurpleBlob, setAnimatePurpleBlob] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    
    const handleBlobAnimation = () => {
      setAnimatePurpleBlob(true);
      setTimeout(() => setAnimatePurpleBlob(false), 2000);
    };
    
    window.addEventListener('animateBlob', handleBlobAnimation);
    
    
    return () => {
      window.removeEventListener('animateBlob', handleBlobAnimation);
    };
  }, []);
  
  return (
    <main className="min-h-screen p-4 md:p-8">
      
      
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        
        <div className="absolute inset-0 -z-10">
          
          <div className={`absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${animatePurpleBlob ? 'animate-spiral' : 'animate-blob'}`}></div>
          
          
          {animatePurpleBlob && (
            <>
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-ripple"></div>
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-ripple animation-delay-200"></div>
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-ripple animation-delay-400"></div>
            </>
          )}
          
          
          {animatePurpleBlob && (
            <>
              <div className="absolute top-10 left-20 w-2 h-2 bg-white dark:bg-gray-300 rounded-full animate-particle-1"></div>
              <div className="absolute top-30 left-40 w-3 h-3 bg-white dark:bg-gray-300 rounded-full animate-particle-2"></div>
              <div className="absolute top-50 left-10 w-1 h-1 bg-white dark:bg-gray-300 rounded-full animate-particle-3"></div>
              <div className="absolute top-20 left-60 w-2 h-2 bg-white dark:bg-gray-300 rounded-full animate-particle-4"></div>
              <div className="absolute top-40 left-30 w-1 h-1 bg-white dark:bg-gray-300 rounded-full animate-particle-5"></div>
            </>
          )}
          
          
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-yellow-300/20 dark:bg-yellow-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          {t('home.title')}
          <br />
          <span className="text-primary animate-text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-300% animate-gradient">{t('home.subtitle')}</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
          <Link href="/contacto" className="btn group transition-all duration-300 transform hover:scale-105">
            {t('cta.contact')}
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <Link href="/proyectos" className="btn group transition-all duration-300 transform hover:scale-105">
            {t('cta.projects')}
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="mt-6 animate-fade-in">
          <h2 className="text-xl font-medium mb-4">{t('home.connect')}</h2>
          <SocialLinks />
        </div>
      </section>
      
      
    </main>
  );
}
