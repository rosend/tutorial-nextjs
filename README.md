# Tutorial de Next.js — instalación y primeros pasos

Sitio web educativo construido con **Next.js 16** (App Router). Es a la vez el tutorial y la aplicación de ejemplo: cada concepto que se explica está aplicado en el propio código del sitio.

## Requisitos

- Node.js 20.9 o superior (se usó 24.x)
- npm (se instala con Node.js)

## Comandos

```bash
npm install        # instala las dependencias (solo la primera vez)
npm run dev        # servidor de desarrollo en http://localhost:3000
npm run build      # genera el sitio estático en la carpeta out/
npm run lint       # revisa el código con ESLint
```

Para ver la versión compilada (`out/`) en local hace falta un servidor estático, por ejemplo:

```bash
npx serve out
```

> Abrir `out/index.html` con doble clic no funciona bien, porque las rutas de los archivos empiezan en `/`.

## Estructura

```
app/
├── layout.tsx                 → estructura común: encabezado, pie, fuentes y estilos
├── page.tsx                   → portada  (/)
├── globals.css                → estilos de todo el sitio
├── not-found.tsx              → página 404
├── tutorial/
│   ├── layout.tsx             → agrega el menú lateral a las páginas del tutorial
│   ├── page.tsx               → índice  (/tutorial)
│   ├── justificacion/         → 1. Justificación del framework
│   ├── instalacion/           → 2. Instalación
│   ├── primeros-pasos/        → 3. Primeros pasos (Hola Mundo)
│   ├── utilizacion/           → 4. Utilización del framework
│   ├── funcionamiento/        → 5. Funcionamiento del framework
│   └── conclusiones/          → 6. Conclusiones y ejercicios
├── demo/
│   ├── page.tsx               → demo interactiva  (/demo)
│   ├── _ejemplos/             → componentes de los ejemplos (carpeta privada, no es ruta)
│   └── saludo/[nombre]/       → ejemplo de ruta dinámica
├── recursos/                  → enlaces a documentación, foros y videos
└── api/secciones.json/        → datos en JSON que otras aplicaciones pueden consumir
components/                    → componentes reutilizables (encabezado, bloque de código, avisos…)
lib/secciones.ts               → lista central de secciones del tutorial
assets/capturas/               → capturas de pantalla usadas en el tutorial
```

## Publicación en GitHub Pages

El proyecto se exporta como sitio estático (`output: "export"` en `next.config.ts`) y se publica solo con **GitHub Actions** (`.github/workflows/deploy.yml`):

1. Cada `git push` a la rama `main` lanza el flujo.
2. GitHub instala las dependencias y ejecuta `npm run build` con `BASE_PATH=/<nombre-del-repositorio>`, porque el sitio vive en `https://<usuario>.github.io/<nombre-del-repositorio>/`.
3. La carpeta `out/` se publica en GitHub Pages.

En el repositorio, **Settings → Pages → Source** debe estar en **GitHub Actions**. El avance de cada publicación se ve en la pestaña **Actions**.

Para probar en local cómo quedará con la subcarpeta:

```bash
# Windows (CMD)
set BASE_PATH=/tutorial-nextjs&& npm run build
npx serve out
```
