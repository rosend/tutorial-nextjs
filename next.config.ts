import type { NextConfig } from "next";

/**
 * Configuración de Next.js para este tutorial.
 *
 * - output: "export"  → al ejecutar `npm run build` se genera la carpeta `out/`
 *   con archivos HTML + CSS + JS estáticos, listos para subir a cualquier hosting
 *   (GitHub Pages, Netlify, Vercel…) sin necesitar un servidor Node.js.
 * - trailingSlash     → cada ruta se guarda como `ruta/index.html`, lo que
 *   funciona en cualquier servidor estático.
 * - images.unoptimized → el optimizador de imágenes necesita un servidor; en un
 *   sitio estático se sirven las imágenes tal cual.
 * - basePath          → si el sitio se publica en una subcarpeta (por ejemplo
 *   https://usuario.github.io/tutorial-nextjs) se indica con la variable de
 *   entorno BASE_PATH="/tutorial-nextjs" al compilar. En local queda vacío.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.BASE_PATH || "",
};

export default nextConfig;
