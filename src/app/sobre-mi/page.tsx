'use client';
import { useState } from 'react';
import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
import Modal from '@/components/Modal';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiReact, SiNextdotjs, SiHtml5, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { Globe, Utensils, Briefcase, Clock, Gamepad } from 'lucide-react'

export default function SobreMi() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoSrc, setPhotoSrc] = useState('/profile.png');
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
        
        <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 card">
          <div className="flex justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-secondary">
              <Image
                src={photoSrc}
                alt="Foto de perfil"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover"
                priority
                onError={() => setPhotoSrc('/profile.svg')}
              />
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
            </button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-6 md:gap-8">
          <div className="card">
            <h2 className="text-2xl font-semibold text-primary mb-4">{t('about.skills.title')}</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h3 className="text-xl font-medium mb-2">{t('about.skills.backend')}</h3>
                <ul className="space-y-2">
                   <li className="flex items-center gap-2">
                     <SiNodedotjs size={18} className="text-green-500" />
                     Node.js
                   </li>
                   <li className="flex items-center gap-2">
                     <SiExpress size={18} className="text-gray-500" />
                     Express
                   </li>
                   <li className="flex items-center gap-2">
                     <SiMongodb size={18} className="text-green-600" />
                     MongoDB
                   </li>
                   <li className="flex items-center gap-2">
                     <SiMysql size={18} className="text-blue-500" />
                     SQL
                   </li>
                   <li className="flex items-center gap-2">
                     <Globe size={18} className="text-orange-500" />
                     API REST
                   </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">{t('about.skills.frontend')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <SiReact size={18} className="text-cyan-500" />
                    React
                  </li>
                  <li className="flex items-center gap-2">
                    <SiNextdotjs size={18} className="text-neutral-900 dark:text-white" />
                    Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <SiHtml5 size={18} className="text-orange-600" />
                    HTML/CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <SiJavascript size={18} className="text-yellow-500" />
                      <SiTypescript size={18} className="text-blue-600" />
                    </div>
                    JavaScript/TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTailwindcss size={18} className="text-teal-500" />
                    Tailwind CSS
                  </li>
                </ul>
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
          {/* Gustos en comida */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Utensils size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">Gustos en comida</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Me encanta la comida italiana (pasta y pizza); disfruto la comida casera y los platos tradicionales colombianos; soy fan de los postres como el chocolate y el cheesecake; y también me gustan opciones saludables como ensaladas, frutas y bowls.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'Italiana (pasta y pizza)',
                'Comida casera',
                'Tradicional colombiana',
                'Postres (chocolate, cheesecake)',
                'Saludable (ensaladas, frutas, bowls)'
              ].map((item) => (
                <span key={item} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-blue-900/20 p-6 rounded-xl">
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

          {/* Qué me gusta hacer en mis tiempos libres */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">Qué me gusta hacer en mis tiempos libres</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Me gusta descansar escuchando música o viendo series. Disfruto salir a caminar, viajar y conocer nuevos lugares. Me gusta aprender cosas nuevas y explorar temas de tecnología. Paso tiempo leyendo o trabajando en proyectos personales.
            </p>
          </div>
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