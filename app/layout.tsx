// Layout raíz: envuelve TODAS las páginas del sitio.
// Lo que pongas aquí (encabezado, pie, fuentes, estilos) aparece en cada ruta.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Encabezado from "@/components/Encabezado";
import "./globals.css";

// next/font descarga las fuentes al compilar y las sirve desde el propio sitio
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Metadatos por defecto: título de la pestaña y descripción para buscadores.
// "%s" se reemplaza por el título que defina cada página.
export const metadata: Metadata = {
  title: { default: "Tutorial de Next.js", template: "%s · Tutorial de Next.js" },
  description:
    "Tutorial para principiantes: qué es Next.js, cómo instalarlo en Windows, tu primer Hola Mundo y ejemplos interactivos.",
};

// Pequeño script que aplica el tema guardado antes de pintar la página (evita parpadeos)
const scriptTema = `try{var t=localStorage.getItem('tema');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: el script de tema cambia <html> antes de que React cargue
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body>
        {/* Enlace para usuarios de teclado o lector de pantalla */}
        <a className="saltar" href="#contenido">
          Saltar al contenido
        </a>
        <Encabezado />
        <div id="contenido">{children}</div>
        <footer className="pie">
          <div className="pie-interior">
            <span>
              <b>Next</b>.js · Tutorial de instalación y primeros pasos
            </span>
            <span>
              Hecho con Next.js 16 ·{" "}
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                Documentación oficial
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
