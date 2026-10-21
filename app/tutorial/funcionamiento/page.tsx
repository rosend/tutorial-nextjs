// Ruta /tutorial/funcionamiento → Sección 5 del tutorial.
import type { Metadata } from "next";
import BloqueCodigo from "@/components/BloqueCodigo";
import { Aviso, CabeceraSeccion, NavegacionPasos } from "@/components/Contenido";

export const metadata: Metadata = { title: "5. Funcionamiento del framework" };

const arbol = `mi-app/
├── app/
│   ├── layout.tsx        → estructura común (menú, pie)
│   ├── page.tsx          → ruta  /
│   ├── globals.css       → estilos para todo el sitio
│   ├── acerca/
│   │   └── page.tsx      → ruta  /acerca
│   └── blog/
│       ├── page.tsx      → ruta  /blog
│       └── [slug]/
│           └── page.tsx  → ruta  /blog/cualquier-texto
├── components/           → componentes reutilizables
├── public/
│   └── logo.png          → se sirve en  /logo.png
└── package.json`;

const codigoCliente = `"use client"; // ← esta línea convierte el archivo en Client Component

import { useState } from "react";

export default function Contador() {
  // useState guarda un valor que puede cambiar con la interacción del usuario
  const [clics, setClics] = useState(0);

  return (
    <button onClick={() => setClics(clics + 1)}>
      Me has hecho clic {clics} veces
    </button>
  );
}`;

const codigoReferencias = `// 1) Importar un componente propio (ruta relativa o alias "@/")
import Contador from "@/components/Contador";

// 2) Importar una imagen: Next.js calcula su tamaño y su ruta final
import foto from "@/assets/foto.webp";
import Image from "next/image";

// 3) Archivos de public/ se usan por URL, sin importar
<img src="/logo.png" alt="Logo" />

// 4) Enlazar a otra página del sitio
import Link from "next/link";
<Link href="/acerca">Acerca</Link>`;

const codigoFetch = `// Desde CUALQUIER otra aplicación web (HTML + JavaScript):
fetch("https://tu-sitio.com/api/secciones.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos.total);          // 6
    console.log(datos.secciones[0]);   // { slug: "justificacion", ... }
  });`;

export default function Funcionamiento() {
  return (
    <>
      <CabeceraSeccion
        numero="05"
        titulo="Funcionamiento del framework"
        entradilla="Next.js se basa en una idea simple: la estructura de carpetas y archivos define cómo se comporta la aplicación."
      />

      <h2 id="actua-sobre">
        <span className="n">5.1</span>¿Actúa sobre páginas, ficheros, secciones…?
      </h2>
      <p>
        Actúa sobre <strong>ficheros y carpetas</strong>. Dentro de <code>app/</code>, cada carpeta es un segmento de la URL
        y ciertos nombres de archivo tienen un significado especial:
      </p>
      <div className="tabla-envoltorio">
        <table>
          <caption>
            <b>Tabla 1.</b> Archivos especiales del App Router.
          </caption>
          <thead>
            <tr>
              <th scope="col">Archivo</th>
              <th scope="col">Qué hace</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code className="ruta">page.tsx</code></td><td>El contenido de una página. Sin este archivo la carpeta no es una ruta visible.</td></tr>
            <tr><td><code className="ruta">layout.tsx</code></td><td>Envoltorio compartido (menú, pie) para la carpeta y sus subcarpetas.</td></tr>
            <tr><td><code className="ruta">not-found.tsx</code></td><td>Página que se muestra cuando la ruta no existe (error 404).</td></tr>
            <tr><td><code className="ruta">loading.tsx</code></td><td>Indicador de carga mientras la página prepara sus datos.</td></tr>
            <tr><td><code className="ruta">route.ts</code></td><td>Responde datos (por ejemplo JSON) en lugar de una página.</td></tr>
            <tr><td><code className="ruta">[carpeta]</code></td><td>Segmento dinámico: un mismo archivo sirve para muchas URL.</td></tr>
          </tbody>
        </table>
      </div>
      <BloqueCodigo etiqueta="Estructura de ejemplo" codigo={arbol} />

      <h3>Componentes de servidor y de cliente</h3>
      <p>
        Por defecto, los componentes son <strong>Server Components</strong>: se convierten en HTML antes de llegar al
        navegador y no envían JavaScript. Cuando un componente necesita interacción (clics, formularios, estado), se marca
        con <code>&quot;use client&quot;</code> y pasa a ser un <strong>Client Component</strong>.
      </p>
      <BloqueCodigo etiqueta="components/Contador.tsx" codigo={codigoCliente} />
      <Aviso tipo="nota">
        <p>
          Regla práctica: usa Server Components para mostrar contenido y Client Components solo para las partes interactivas.
          En este sitio, todas las páginas del tutorial son de servidor y solo los botones (copiar, tema, demo) son de cliente.
        </p>
      </Aviso>

      <h2 id="editar">
        <span className="n">5.2</span>¿Cómo se editan o modifican los ficheros?
      </h2>
      <ol className="pasos">
        <li>Abre el archivo en VS Code (por ejemplo <code>app/page.tsx</code>).</li>
        <li>Cambia el texto, el JSX o los estilos.</li>
        <li>
          Guarda con <kbd>Ctrl</kbd> + <kbd>S</kbd>. Con <code>npm run dev</code> activo, el navegador se actualiza solo
          (Fast Refresh) y conserva el estado de los componentes cuando es posible.
        </li>
      </ol>
      <p>Para los estilos hay dos opciones sencillas:</p>
      <ul className="checks">
        <li>
          <strong>CSS global</strong> (<code>app/globals.css</code>): se importa una vez en <code>layout.tsx</code> y aplica a
          todo el sitio. Es lo que usa este tutorial.
        </li>
        <li>
          <strong>CSS Modules</strong> (<code>pagina.module.css</code>): estilos que solo afectan al componente que los
          importa, para evitar conflictos de nombres.
        </li>
      </ul>

      <h2 id="referenciar">
        <span className="n">5.3</span>¿Cómo se referencian los ficheros creados desde otras aplicaciones?
      </h2>
      <h3>Dentro del mismo proyecto</h3>
      <BloqueCodigo etiqueta="Formas de referenciar archivos" codigo={codigoReferencias} />
      <h3>Desde otras aplicaciones</h3>
      <p>
        Una vez publicado, cualquier página del sitio tiene una URL pública que se puede enlazar o insertar. Además, Next.js
        puede generar <strong>datos</strong> que otras aplicaciones consumen. Este sitio incluye un ejemplo en{" "}
        <a href="../../api/secciones.json" target="_blank" rel="noopener noreferrer">
          <code>/api/secciones.json</code>
        </a>
        , generado por <code>app/api/secciones.json/route.ts</code>:
      </p>
      <BloqueCodigo etiqueta="otra-app.js" codigo={codigoFetch} />
      <Aviso tipo="consejo">
        <p>
          También puedes publicar componentes como un paquete de npm para reutilizarlos en otros proyectos de React, aunque
          eso queda fuera del alcance de este tutorial inicial.
        </p>
      </Aviso>

      <NavegacionPasos slug="funcionamiento" />
    </>
  );
}
