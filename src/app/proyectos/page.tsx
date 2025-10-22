import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';

export default function Proyectos() {
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
          Mis <span className="text-primary">Proyectos</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="card flex flex-col">
            <div className="h-48 bg-secondary rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
            <p className="text-sm mb-4 flex-grow">
              Aquí una descripción breve sobre mi proyecto junto a sus tecnologías usadas
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn text-sm w-full flex justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              </svg>
              Ver en la web
            </a>
          </div>
          
          {/* Proyecto 2 */}
          <div className="card flex flex-col">
            <div className="h-48 bg-secondary rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Proyecto 2</h3>
            <p className="text-sm mb-4 flex-grow">
              Aquí una descripción breve sobre mi proyecto junto a sus tecnologías usadas
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn text-sm w-full flex justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              </svg>
              Ver en la web
            </a>
          </div>
          
          {/* Proyecto 3 */}
          <div className="card flex flex-col">
            <div className="h-48 bg-secondary rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Proyecto 3</h3>
            <p className="text-sm mb-4 flex-grow">
              Aquí una descripción breve sobre mi proyecto junto a sus tecnologías usadas
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn text-sm w-full flex justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              </svg>
              Ver en la web
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}