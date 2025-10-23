'use client';

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    'language.name.es': 'ESPAÑOL',
    'language.name.en': 'INGLÉS',
    'language.name.fr': 'FRANCÉS',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.reviews': 'Reseñas',
    'nav.contact': 'Contacto',
    'home.title': 'Hola, soy Saray Noguera',
    'home.subtitle': 'Ingeniera de Software',
    'cta.contact': 'Contáctame',
    'cta.projects': 'Ver mis Proyectos',
    'home.connect': 'Conecta conmigo',
    // About page
    'about.title': 'Hola, mi nombre es Saray Noguera',
    'about.intro1': 'Soy estudiante universitaria de Ingeniería de software. Me interesa mucho el desarrollo de proyectos tecnológicos, la programación y aprender nuevas herramientas digitales.',
    'about.intro2': 'En mi tiempo libre disfruto de la música, la lectura, los viajes y compartir con mis amigos y familia.',
    'about.btn.more': 'Conocerme un poco más',
    'about.skills.title': 'Mis Habilidades',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.info.title': 'Información Personal',
    'about.info.likes': 'Gustos',
    'about.info.likes.text': 'Desarrollo web, inteligencia artificial, diseño UX/UI, tecnologías emergentes',
    'about.info.hobbies': 'Pasatiempos',
    'about.info.hobbies.text': 'Leer libros de ciencia ficción, escuchar música, viajar, fotografía',
    'about.info.goals': 'Metas',
    'about.info.goals.text': 'Convertirme en desarrolladora full-stack, contribuir a proyectos open source, aprender nuevas tecnologías',
    // Projects page
    'projects.title': 'Mis Proyectos',
    'projects.card.title1': 'Proyecto 1',
    'projects.card.title2': 'Proyecto 2',
    'projects.card.title3': 'Proyecto 3',
    'projects.card.desc': 'Aquí una descripción breve sobre mi proyecto junto a sus tecnologías usadas',
    'projects.view_web': 'Ver en la web',
    // Reviews page
    'reviews.title': 'MIS RESEÑAS',
    'reviews.quote1': 'Saray es una desarrolladora excepcional. Su capacidad para resolver problemas y su atención al detalle hacen que sea un placer trabajar con ella.',
    'reviews.quote2': 'Colaborar con Saray fue una experiencia increíble. Su conocimiento técnico y su capacidad para comunicar ideas complejas de manera sencilla son impresionantes.',
    'reviews.quote3': 'Saray entregó un proyecto excepcional que superó todas nuestras expectativas. Su enfoque metódico y su creatividad hacen que sea una desarrolladora de primer nivel.',
    'reviews.role1': 'CEO, TechSolutions',
    'reviews.role2': 'Directora de Proyectos, InnovateTech',
    'reviews.role3': 'CTO, DigitalWave',
    // Contact page
    'contact.title': 'Hablemos de tu próximo proyecto?',
    'contact.subtitle': 'contáctame',
    'contact.email.label': 'CORREO',
    'contact.email.value': 'saraynoguera21@gmail.com',
    'contact.availability.label': 'DISPONIBILIDAD',
    'contact.availability.value': 'Respondo en 24 - 48 horas',
    'contact.form.title': 'Envíame un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.message': 'Mensaje',
    'contact.form.placeholder.name': 'Tu nombre',
    'contact.form.placeholder.email': 'Tu correo electrónico',
    'contact.form.placeholder.message': 'Cuéntame sobre tu proyecto...',
    'contact.form.submit': 'Interactúa conmigo, desde ya!',
    // Header & Theme & Social
    'header.animate_bg': 'Animar fondo',
    'theme.toggle.to_dark': 'Activar modo oscuro',
    'theme.toggle.to_light': 'Activar modo claro',
    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.instagram': 'Instagram',
  },
  en: {
    'language.name.es': 'SPANISH',
    'language.name.en': 'ENGLISH',
    'language.name.fr': 'FRENCH',
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'home.title': "Hello, I'm Saray Noguera",
    'home.subtitle': 'Software Engineer',
    'cta.contact': 'Contact me',
    'cta.projects': 'View my Projects',
    'home.connect': 'Connect with me',
    // About page
    'about.title': "Hello, my name is Saray Noguera",
    'about.intro1': 'I am a university student of Software Engineering. I am very interested in technology project development, programming, and learning new digital tools.',
    'about.intro2': 'In my free time I enjoy music, reading, traveling, and spending time with my friends and family.',
    'about.btn.more': 'Get to know me a bit more',
    'about.skills.title': 'My Skills',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.info.title': 'Personal Information',
    'about.info.likes': 'Likes',
    'about.info.likes.text': 'Web development, artificial intelligence, UX/UI design, emerging technologies',
    'about.info.hobbies': 'Hobbies',
    'about.info.hobbies.text': 'Reading sci-fi books, listening to music, traveling, photography',
    'about.info.goals': 'Goals',
    'about.info.goals.text': 'Become a full‑stack developer, contribute to open source projects, learn new technologies',
    // Projects page
    'projects.title': 'My Projects',
    'projects.card.title1': 'Project 1',
    'projects.card.title2': 'Project 2',
    'projects.card.title3': 'Project 3',
    'projects.card.desc': 'A brief description of my project along with the technologies used',
    'projects.view_web': 'View on the web',
    // Reviews page
    'reviews.title': 'MY REVIEWS',
    'reviews.quote1': 'Saray is an exceptional developer. Her problem-solving ability and attention to detail make it a pleasure to work with her.',
    'reviews.quote2': 'Collaborating with Saray was an incredible experience. Her technical knowledge and ability to communicate complex ideas in a simple way are impressive.',
    'reviews.quote3': 'Saray delivered an exceptional project that exceeded all our expectations. Her methodical approach and creativity make her a top-tier developer.',
    'reviews.role1': 'CEO, TechSolutions',
    'reviews.role2': 'Project Director, InnovateTech',
    'reviews.role3': 'CTO, DigitalWave',
    // Contact page
    'contact.title': 'Shall we talk about your next project?',
    'contact.subtitle': 'contact me',
    'contact.email.label': 'EMAIL',
    'contact.email.value': 'saraynoguera21@gmail.com',
    'contact.availability.label': 'AVAILABILITY',
    'contact.availability.value': 'I reply within 24 – 48 hours',
    'contact.form.title': 'Send me a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'Your email',
    'contact.form.placeholder.message': 'Tell me about your project...',
    'contact.form.submit': 'Get in touch with me, right away!',
    // Header & Theme & Social
    'header.animate_bg': 'Animate background',
    'theme.toggle.to_dark': 'Enable dark mode',
    'theme.toggle.to_light': 'Enable light mode',
    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.instagram': 'Instagram',
  },
  fr: {
    'language.name.es': 'ESPAGNOL',
    'language.name.en': 'ANGLAIS',
    'language.name.fr': 'FRANÇAIS',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.reviews': 'Avis',
    'nav.contact': 'Contact',
    'home.title': 'Bonjour, je suis Saray Noguera',
    'home.subtitle': 'Ingénieure Logiciel',
    'cta.contact': 'Contactez-moi',
    'cta.projects': 'Voir mes Projets',
    'home.connect': 'Connectez avec moi',
    // About page
    'about.title': "Bonjour, je m'appelle Saray Noguera",
    'about.intro1': "Je suis étudiante en ingénierie logicielle. Je m'intéresse beaucoup au développement de projets technologiques, à la programmation et à l'apprentissage de nouveaux outils numériques.",
    'about.intro2': 'Pendant mon temps libre, je profite de la musique, de la lecture, des voyages et de passer du temps avec mes amis et ma famille.',
    'about.btn.more': 'En savoir un peu plus sur moi',
    'about.skills.title': 'Mes Compétences',
    'about.skills.backend': 'Backend',
    'about.skills.frontend': 'Frontend',
    'about.info.title': 'Informations Personnelles',
    'about.info.likes': 'Goûts',
    'about.info.likes.text': 'Développement web, intelligence artificielle, design UX/UI, technologies émergentes',
    'about.info.hobbies': 'Passe-temps',
    'about.info.hobbies.text': 'Lire des livres de science-fiction, écouter de la musique, voyager, photographie',
    'about.info.goals': 'Objectifs',
    'about.info.goals.text': "Devenir développeuse full‑stack, contribuer à des projets open source, apprendre de nouvelles technologies",
    // Projects page
    'projects.title': 'Mes Projets',
    'projects.card.title1': 'Projet 1',
    'projects.card.title2': 'Projet 2',
    'projects.card.title3': 'Projet 3',
    'projects.card.desc': 'Brève description de mon projet avec les technologies utilisées',
    'projects.view_web': 'Voir sur le web',
    // Reviews page
    'reviews.title': 'MES AVIS',
    'reviews.quote1': "Saray est une développeuse exceptionnelle. Sa capacité à résoudre les problèmes et son attention aux détails rendent la collaboration très agréable.",
    'reviews.quote2': "Collaborer avec Saray a été une expérience incroyable. Ses connaissances techniques et sa capacité à communiquer des idées complexes de manière simple sont impressionnantes.",
    'reviews.quote3': "Saray a livré un projet exceptionnel qui a dépassé toutes nos attentes. Son approche méthodique et sa créativité font d'elle une développeuse de premier plan.",
    'reviews.role1': 'PDG, TechSolutions',
    'reviews.role2': 'Directrice de Projets, InnovateTech',
    'reviews.role3': 'CTO, DigitalWave',
    // Contact page
    'contact.title': 'On parle de ton prochain projet ?',
    'contact.subtitle': 'contactez-moi',
    'contact.email.label': 'EMAIL',
    'contact.email.value': 'saraynoguera21@gmail.com',
    'contact.availability.label': 'DISPONIBILITÉ',
    'contact.availability.value': 'Je réponds sous 24 – 48 heures',
    'contact.form.title': 'Envoyez-moi un message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Votre nom',
    'contact.form.placeholder.email': 'Votre e-mail',
    'contact.form.placeholder.message': 'Parlez-moi de votre projet...',
    'contact.form.submit': 'Contactez-moi dès maintenant !',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const saved = (localStorage.getItem('language') as Language | null) || 'es';
    setLanguageState(saved);
    try {
      document.documentElement.setAttribute('lang', saved);
    } catch {}
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    try {
      document.documentElement.setAttribute('lang', lang);
    } catch {}
  };

  const t = useMemo(() => {
    return (key: string) => {
      const dict = TRANSLATIONS[language] || TRANSLATIONS.es;
      return dict[key] ?? key;
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  }
  return ctx;
}