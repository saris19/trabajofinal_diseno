import LanguageSelector from '@/components/LanguageSelector';
import Link from 'next/link';
import Image from 'next/image';

export default function SobreMi() {
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
          Hola, mi nombre es <span className="text-primary">Saray Noguera</span>
        </h1>
        
        <div className="grid md:grid-cols-[300px_1fr] gap-8 card p-6 md:p-8">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-secondary">
              {/* Placeholder para la imagen de perfil */}
              <div className="w-full h-full flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg mb-6">
              Soy estudiante universitaria de Ingeniería de software. Me interesa mucho el desarrollo de proyectos tecnológicos, la programación y aprender nuevas herramientas digitales.
            </p>
            <p className="text-lg mb-6">
              En mi tiempo libre disfruto de la música, la lectura, los viajes y compartir con mis amigos y familia.
            </p>
            <button className="btn">
              Conocerme un poco más
            </button>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-2xl font-semibold text-primary mb-4">Mis Habilidades</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Backend</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>API REST</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Frontend</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-2xl font-semibold text-primary mb-4">Información Personal</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Gustos</h3>
                <p>Desarrollo web, inteligencia artificial, diseño UX/UI, tecnologías emergentes</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Pasatiempos</h3>
                <p>Leer libros de ciencia ficción, escuchar música, viajar, fotografía</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Metas</h3>
                <p>Convertirme en desarrolladora full-stack, contribuir a proyectos open source, aprender nuevas tecnologías</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}