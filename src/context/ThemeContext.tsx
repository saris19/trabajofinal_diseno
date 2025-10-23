'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Función para aplicar el tema al DOM
  const applyTheme = (newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      const body = document.body;
      
      if (newTheme === 'dark') {
        root.classList.add('dark');
        body.classList.add('dark-mode');
      } else {
        root.classList.remove('dark');
        body.classList.remove('dark-mode');
      }
    }
  };

  useEffect(() => {
    // Marcar como montado para evitar problemas de hidratación
    setMounted(true);
    
    // Recuperar el tema guardado en localStorage al cargar
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Detectar preferencia del sistema
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const prefersDark = mediaQuery.matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      
      setTheme(systemTheme);
      applyTheme(systemTheme);
      localStorage.setItem('theme', systemTheme);
      
      // Escuchar cambios en las preferencias del sistema
      const handleChange = (e: MediaQueryListEvent) => {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        // Solo cambiar si no hay tema guardado explícitamente
        if (!localStorage.getItem('theme')) {
          setTheme(newSystemTheme);
          applyTheme(newSystemTheme);
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
}