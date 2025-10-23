'use client';
import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Resenas() {
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
      
      <div className="max-w-6xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('reviews.title')}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Reseña 1 */}
          <div className="card">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
                  <circle cx="100" cy="70" r="50" fill="#FFB344" />
                  <rect x="30" y="130" width="140" height="70" fill="#3B82F6" />
                  <circle cx="70" cy="80" r="10" fill="#1E3A8A" />
                  <circle cx="130" cy="80" r="10" fill="#1E3A8A" />
                  <path d="M70 110 Q100 140 130 110" stroke="#1E3A8A" strokeWidth="5" fill="none" />
                </svg>
              </div>
            </div>
            <p className="text-center mb-4">
              &quot;{t('reviews.quote1')}&quot;
            </p>
            <div className="text-center">
              <h3 className="font-semibold">Carlos Rodríguez</h3>
              <p className="text-sm text-gray-600">{t('reviews.role1')}</p>
            </div>
          </div>
          
          {/* Reseña 2 */}
          <div className="card">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
                  <circle cx="100" cy="70" r="50" fill="#A78BFA" />
                  <rect x="30" y="130" width="140" height="70" fill="#10B981" />
                  <circle cx="70" cy="80" r="10" fill="#064E3B" />
                  <circle cx="130" cy="80" r="10" fill="#064E3B" />
                  <path d="M70 110 Q100 140 130 110" stroke="#064E3B" strokeWidth="5" fill="none" />
                </svg>
              </div>
            </div>
            <p className="text-center mb-4">
              &quot;{t('reviews.quote2')}&quot;
            </p>
            <div className="text-center">
              <h3 className="font-semibold">Ana Martínez</h3>
              <p className="text-sm text-gray-600">{t('reviews.role2')}</p>
            </div>
          </div>
          
          {/* Reseña 3 */}
          <div className="card">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
                  <circle cx="100" cy="70" r="50" fill="#FBBF24" />
                  <rect x="30" y="130" width="140" height="70" fill="#EF4444" />
                  <circle cx="70" cy="80" r="10" fill="#7F1D1D" />
                  <circle cx="130" cy="80" r="10" fill="#7F1D1D" />
                  <path d="M70 110 Q100 140 130 110" stroke="#7F1D1D" strokeWidth="5" fill="none" />
                </svg>
              </div>
            </div>
            <p className="text-center mb-4">
              &quot;{t('reviews.quote3')}&quot;
            </p>
            <div className="text-center">
              <h3 className="font-semibold">Miguel López</h3>
              <p className="text-sm text-gray-600">{t('reviews.role3')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}