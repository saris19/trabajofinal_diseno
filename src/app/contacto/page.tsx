'use client';
import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { Mail, Clock } from 'lucide-react';

export default function Contacto() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
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
      
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          {t('contact.title')}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-primary">
          {t('contact.subtitle')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch auto-rows-fr">
          <div className="card h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase">{t('contact.email.label')}</h3>
                <p className="text-sm">{t('contact.email.value')}</p>
              </div>
              {/* Correo duplicado eliminado */}
            </div>
          </div>
          
          <div className="card h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase">{t('contact.availability.label')}</h3>
                <p className="text-sm">{t('contact.availability.value')}</p>
              </div>
              {/* Número duplicado eliminado */}
            </div>
          </div>
        </div>
        
        <div className="card mt-8">
          <h3 className="text-xl font-semibold mb-4">{t('contact.form.title')}</h3>
          <form className="space-y-4" onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setSuccess(null);
            setError(null);
            try {
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
              });
              const data = await res.json();
              if (!res.ok) throw new Error(data.error || 'Error al enviar');
              setSuccess('¡Tu mensaje fue enviado! Me pondré en contacto contigo pronto.');
              setName('');
              setEmail('');
              setMessage('');
            } catch (err: any) {
              setError(err.message || 'No se pudo enviar el mensaje.');
            } finally {
              setLoading(false);
            }
          }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">{t('contact.form.name')}</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={t('contact.form.placeholder.name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">{t('contact.form.email')}</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={t('contact.form.placeholder.email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">{t('contact.form.message')}</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={t('contact.form.placeholder.message')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            
            <button type="submit" className="btn w-full justify-center" disabled={loading}>
              {loading ? 'Enviando...' : t('contact.form.submit')}
            </button>
            {success && <p className="text-green-500 mt-2">{success}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}