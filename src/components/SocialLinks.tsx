'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function SocialLinks() {
  const { t } = useLanguage();
  return (
    <div className="social-links">
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Github size={24} />
      </Link>
      <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin size={24} />
      </Link>
      <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram size={24} />
      </Link>
    </div>
  );
}