// Componentes pequeños de presentación que se reutilizan en todas las páginas.
// Son Server Components (no llevan "use client"): se convierten en HTML al compilar
// y no envían JavaScript al navegador.

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { vecinas } from "@/lib/secciones";

/* ---------- Recuadro de aviso: nota, importante, consejo o resultado ---------- */
const avisos = {
  nota: "Nota",
  importante: "Importante",
  consejo: "Consejo",
  resultado: "Resultado esperado",
};

export function Aviso({ tipo, titulo, children }: { tipo: keyof typeof avisos; titulo?: string; children: ReactNode }) {
  return (
    <aside className={`aviso ${tipo}`} aria-label={titulo || avisos[tipo]}>
      <div className="aviso-titulo">{titulo || avisos[tipo]}</div>
      {children}
    </aside>
  );
}

/* ---------- Figura con imagen y pie de foto ---------- */
export function Figura({ src, numero, texto, ancho }: { src: StaticImageData; numero: number; texto: string; ancho?: number }) {
  // El ancho máximo evita que capturas pequeñas se estiren y se vean borrosas
  const max = Math.min(ancho || src.width, 760);
  return (
    <figure className="figura">
      <Image src={src} alt={texto} style={{ width: "100%", maxWidth: max, height: "auto" }} />
      <figcaption>
        <b>Figura {numero}.</b> {texto}
      </figcaption>
    </figure>
  );
}

/* ---------- Título de un paso numerado ---------- */
export function Paso({ n, id, children }: { n: number; id: string; children: ReactNode }) {
  return (
    <h3 className="paso" id={id}>
      <span className="etiqueta">PASO {String(n).padStart(2, "0")}</span>
      {children}
    </h3>
  );
}

/* ---------- Cabecera de cada página del tutorial ---------- */
export function CabeceraSeccion({ numero, titulo, entradilla }: { numero: string; titulo: string; entradilla: string }) {
  return (
    <>
      <p className="supertitulo">Sección {numero}</p>
      <h1 className="titulo-pagina">
        <span className="n">{Number(numero)}.</span> {titulo}
      </h1>
      <p className="entradilla">{entradilla}</p>
    </>
  );
}

/* ---------- Botones "Anterior / Siguiente" al final de cada sección ---------- */
export function NavegacionPasos({ slug }: { slug: string }) {
  const { anterior, siguiente } = vecinas(slug);
  return (
    <nav className="navegacion-pasos" aria-label="Navegación entre secciones">
      {anterior ? (
        <Link href={`/tutorial/${anterior.slug}`}>
          <small>← Anterior</small>
          {anterior.titulo}
        </Link>
      ) : (
        <span />
      )}
      {siguiente ? (
        <Link className="siguiente" href={`/tutorial/${siguiente.slug}`}>
          <small>Siguiente →</small>
          {siguiente.titulo}
        </Link>
      ) : (
        <Link className="siguiente" href="/demo">
          <small>Siguiente →</small>
          Demo interactiva
        </Link>
      )}
    </nav>
  );
}
