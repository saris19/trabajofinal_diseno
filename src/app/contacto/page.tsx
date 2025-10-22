import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

export default function Contacto() {
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
          Hablemos de tu próximo proyecto?
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-primary">
          contáctame
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase">CORREO</h3>
                <p className="text-sm">saraynoguera@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase">DISPONIBILIDAD</h3>
                <p className="text-sm">Respondo en 24 - 48 horas</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mt-8">
          <h3 className="text-xl font-semibold mb-4">Envíame un mensaje</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn w-full justify-center">
              Interactúa conmigo, desde ya!
            </button>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}