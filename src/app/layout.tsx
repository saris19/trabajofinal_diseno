import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saray Noguera | Ingeniera de Software",
  description: "Portafolio profesional de Saray Noguera, Ingeniera de Software especializada en desarrollo web y aplicaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {/* Script para aplicar el tema antes de la hidratación y evitar parpadeos/fallos en móviles */}
        <Script id="init-theme" strategy="beforeInteractive">
          {`
            (function(){
              try {
                var saved = localStorage.getItem('theme');
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                var isDark = saved ? saved === 'dark' : prefersDark;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  if (document.body) document.body.classList.add('dark-mode');
                } else {
                  document.documentElement.classList.remove('dark');
                  if (document.body) document.body.classList.remove('dark-mode');
                }
              } catch(e) {}
            })();
          `}
        </Script>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <div className="pt-28 md:pt-20">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
