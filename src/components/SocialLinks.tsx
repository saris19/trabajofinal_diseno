'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function SocialLinks() {
  const { t } = useLanguage();
  return (
    <div className="social-links">
      <Link href="https://github.com/saris19" target="_blank" aria-label={t('social.github')}>
        <Github size={24} />
      </Link>
      <Link href="https://linkedin.com" target="_blank" aria-label={t('social.linkedin')}>
        <Linkedin size={24} />
      </Link>
      <Link href="https://www.instagram.com/_saranoguera_?igsh=MWxvemo3dHVpcXFuaw%3D%3D&utm_source=qr" target="_blank" aria-label={t('social.instagram')}>
        <Instagram size={24} />
      </Link>
    </div>
  );
}