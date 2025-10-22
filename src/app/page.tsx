'use client';

import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
import { useEffect, useState } from 'react';

export default function Home() {
  const [animatePurpleBlob, setAnimatePurpleBlob] = useState(false);
  
  useEffect(() => {
    // Escuchar el evento personalizado desde el Header
    const handleBlobAnimation = () => {
      setAnimatePurpleBlob(true);
      setTimeout(() => setAnimatePurpleBlob(false), 2000);
    };
    
    window.addEventListener('animateBlob', handleBlobAnimation);
    
    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('animateBlob', handleBlobAnimation);
    };
  }, []);
  
  return (
    <main className="min-h-screen p-4 md:p-8">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center relative overflow-hidden">
        {/* Fondo animado */}
        <div className="absolute inset-0 -z-10">
          {/* Espiral morada principal */}
          <div className={`absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${animatePurpleBlob ? 'animate-spiral' : 'animate-blob'}`}></div>
          
          {/* Efecto de ondas cuando se activa */}
          {animatePurpleBlob && (
            <>
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-ripple"></div>
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-ripple animation-delay-200"></div>
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-ripple animation-delay-400"></div>
            </>
          )}
          
          {/* Partículas brillantes cuando se activa */}
          {animatePurpleBlob && (
            <>
              <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full animate-particle-1"></div>
              <div className="absolute top-30 left-40 w-3 h-3 bg-white rounded-full animate-particle-2"></div>
              <div className="absolute top-50 left-10 w-1 h-1 bg-white rounded-full animate-particle-3"></div>
              <div className="absolute top-20 left-60 w-2 h-2 bg-white rounded-full animate-particle-4"></div>
              <div className="absolute top-40 left-30 w-1 h-1 bg-white rounded-full animate-particle-5"></div>
            </>
          )}
          
          {/* Otras burbujas de fondo */}
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-yellow-300/20 dark:bg-yellow-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Hola, soy Saray Noguera
          <br />
          <span className="text-primary animate-text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-300% animate-gradient">Ingeniera de Software</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
          <Link href="/contacto" className="btn group transition-all duration-300 transform hover:scale-105">
            Contáctame
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          
          <Link href="/proyectos" className="btn group transition-all duration-300 transform hover:scale-105">
            Ver mis Proyectos
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      
      {/* Connect with me section */}
      <section className="mt-16 mb-8">
        <h2 className="text-xl font-medium mb-4">Conecta conmigo</h2>
        <SocialLinks />
      </section>
    </main>
  );
}
