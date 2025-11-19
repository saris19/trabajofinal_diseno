'use client';
import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';

export default function Resenas() {
  const { t } = useLanguage();
  const [avatar1, setAvatar1] = useState('/review1.png');
  const [avatar2, setAvatar2] = useState('/review2.png');
  const [avatar3, setAvatar3] = useState('/review3.png');
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
          {t('reviews.title')}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 md:gap-8">
          {/* Reseña 1 */}
          <div className="card h-full">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-blue-100 overflow-hidden relative">
                <Image
                  src={avatar1}
                  alt="Foto de Juan Diego Burbano"
                  fill
                  sizes="96px"
                  className="object-cover"
                  onError={() => setAvatar1('/profile.png')}
                  priority
                />
              </div>
            </div>
            <p className="text-center mb-4">
              &quot;{t('reviews.quote1')}&quot;
            </p>
            <div className="text-center">
              <h3 className="font-semibold">Juan Diego Burbano</h3>
              <p className="text-sm text-gray-600">{t('reviews.role1')}</p>
            </div>
          </div>
          
          {/* Reseña 2 */}
          <div className="card h-full">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-green-100 overflow-hidden relative">
                <Image
                  src={avatar2}
                  alt="Foto de Tatiana Timana"
                  fill
                  sizes="96px"
                  className="object-cover"
                  onError={() => setAvatar2('/profile.png')}
                />
              </div>
            </div>
            <p className="text-center mb-4">
              &quot;{t('reviews.quote2')}&quot;
            </p>
            <div className="text-center">
              <h3 className="font-semibold">Tatiana Timana</h3>
              <p className="text-sm text-gray-600">{t('reviews.role2')}</p>
            </div>
          </div>
          
          {/* Reseña 3 */}
          <div className="card h-full">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-red-100 overflow-hidden relative">
                <Image
                  src={avatar3}
                  alt="Foto de Luis Cajigas"
                  fill
                  sizes="96px"
                  className="object-cover"
                  onError={() => setAvatar3('/profile.png')}
                />
              </div>
            </div>
            <p className="text-center mb-4">
              &quot;{t('reviews.quote3')}&quot;
            </p>
            <div className="text-center">
              <h3 className="font-semibold">Luis Cajigas</h3>
              <p className="text-sm text-gray-600">{t('reviews.role3')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}