// Ruta /recursos → enlaces para profundizar.
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Recursos adicionales" };

// Cada grupo es una lista de enlaces. Para agregar uno nuevo basta con sumarlo al arreglo.
const grupos = [
  {
    titulo: "Documentación oficial",
    enlaces: [
      { texto: "Documentación de Next.js", url: "https://nextjs.org/docs" },
      { texto: "Curso gratuito Next.js Learn", url: "https://nextjs.org/learn" },
      { texto: "Ejemplos oficiales en GitHub", url: "https://github.com/vercel/next.js/tree/canary/examples" },
      { texto: "Documentación de React", url: "https://react.dev/learn" },
      { texto: "Sitio oficial de Node.js", url: "https://nodejs.org/" },
      { texto: "Documentación de TypeScript", url: "https://www.typescriptlang.org/docs/" },
    ],
  },
  {
    titulo: "Foros y comunidad",
    enlaces: [
      { texto: "GitHub Discussions de Next.js", url: "https://github.com/vercel/next.js/discussions" },
      { texto: "Preguntas sobre Next.js en Stack Overflow", url: "https://stackoverflow.com/questions/tagged/next.js" },
      { texto: "MDN Web Docs (HTML, CSS y JavaScript)", url: "https://developer.mozilla.org/es/" },
    ],
  },
  {
    titulo: "Videos de referencia",
    enlaces: [
      { texto: "Video de referencia 1 (YouTube)", url: "https://youtu.be/4tT9x948VlE?si=YohXplVISv_Acr2y" },
      { texto: "Video de referencia 2 (YouTube)", url: "https://youtu.be/fI-HIGmhbnQ?si=yZwqyyvKUI8zP9aW" },
      { texto: "Video de referencia 3 (YouTube)", url: "https://youtu.be/D6Rys-k4bJU?si=I3lS6IkXpkgK4xI4" },
    ],
  },
];

export default function Recursos() {
  let contador = 0; // numeración continua entre grupos
  return (
    <main className="contenedor contenedor-estrecho">
      <p className="supertitulo">Recursos</p>
      <h1 className="titulo-pagina">Recursos adicionales</h1>
      <p className="entradilla">
        Documentación oficial, foros y videos para quienes quieran profundizar más allá de este tutorial.
      </p>

      {grupos.map((g, gi) => (
        <section key={g.titulo} aria-labelledby={`grupo-${gi}`}>
          <h2 id={`grupo-${gi}`}>{g.titulo}</h2>
          <div className="referencias">
            {g.enlaces.map((e) => {
              contador++;
              return (
                <a key={e.url} className="referencia" href={e.url} target="_blank" rel="noopener noreferrer">
                  <span className="n">{String(contador).padStart(2, "0")}</span>
                  <span>
                    <b>{e.texto}</b>
                    <small>{e.url}</small>
                  </span>
                  <span className="flecha" aria-hidden="true">
                    ↗
                  </span>
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </a>
              );
            })}
          </div>
        </section>
      ))}

      <h2>Bibliografía</h2>
      <ul className="checks">
        <li>Vercel. (2026). <em>Next.js Documentation</em>. https://nextjs.org/docs</li>
        <li>Meta Open Source. (2026). <em>React Documentation</em>. https://react.dev</li>
        <li>OpenJS Foundation. (2026). <em>Node.js</em>. https://nodejs.org</li>
        <li>Mozilla. (2026). <em>MDN Web Docs</em>. https://developer.mozilla.org</li>
      </ul>
    </main>
  );
}
