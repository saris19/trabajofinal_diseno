'use client';
import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Proyectos() {
  const { t } = useLanguage();
  const [img1, setImg1] = useState('/project1.png');
  const [img2, setImg2] = useState('/project2.png');
  const [img3, setImg3] = useState('/project3.png');

  useEffect(() => {
    const check = async (pngPath: string, setter: (v: string) => void) => {
      try {
        const res = await fetch(pngPath, { method: 'HEAD' });
        if (res.ok) setter(pngPath);
      } catch {
        // ignore
      }
    };
    check('/project1.png', setImg1);
    check('/project2.png', setImg2);
    check('/project3.png', setImg3);
  }, []);
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
      
      <div className="max-w-6xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('projects.title')}
        </h1>
        
        <div className="grid md:grid-cols-3 auto-rows-fr gap-8">
          {/* Proyecto 1 */}
          <div className="card flex flex-col h-full">
            <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
              <Image src={img1} alt="Proyecto 1" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" priority />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('projects.card.title1')}</h3>
            <p className="text-sm mb-4 flex-grow">
              {t('projects.card.desc1')}
            </p>
            <a 
              href="https://trabajo-maps.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn text-sm w-full flex justify-center"
            >
              <ExternalLink size={16} className="mr-2" />
              Demo
            </a>
          </div>
          
          {/* Proyecto 2 */}
          <div className="card flex flex-col h-full">
            <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
              <Image src={img2} alt="Proyecto 2" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('projects.card.title2')}</h3>
            <p className="text-sm mb-4 flex-grow">
              {t('projects.card.desc2')}
            </p>
            <a 
              href="https://pasaporte-two.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn text-sm w-full flex justify-center"
            >
              <ExternalLink size={16} className="mr-2" />
              Demo
            </a>
          </div>
          
          {/* Proyecto 3 */}
          <div className="card flex flex-col h-full">
            <div className="h-48 rounded-lg mb-4 overflow-hidden relative">
              <Image src={img3} alt="Proyecto 3" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('projects.card.title3')}</h3>
            <p className="text-sm mb-4 flex-grow">
              {t('projects.card.desc3')}
            </p>
            <a 
              href="https://trabajoexample-git-975724-saray-lucia-noguera-cueltans-projects.vercel.app/es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn text-sm w-full flex justify-center"
            >
              <Github size={16} className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}