// Ruta /tutorial → índice con todas las secciones.
import type { Metadata } from "next";
import Link from "next/link";
import { secciones } from "@/lib/secciones";

export const metadata: Metadata = { title: "Contenido" };

export default function IndiceTutorial() {
  return (
    <>
      <p className="supertitulo">Índice</p>
      <h1 className="titulo-pagina">Contenido del tutorial</h1>
      <p className="entradilla">
        Sigue las secciones en orden. Cada una termina con un enlace a la siguiente, y al final encontrarás una demo
        interactiva para experimentar.
      </p>
      {/* Las tarjetas se generan recorriendo la lista de lib/secciones.ts */}
      <div className="tarjetas">
        {secciones.map((s) => (
          <Link key={s.slug} className="tarjeta" href={`/tutorial/${s.slug}`}>
            <span className="n">{s.numero}</span>
            <b>{s.titulo}</b>
            <span>{s.resumen}</span>
          </Link>
        ))}
        <Link className="tarjeta" href="/demo">
          <span className="n">▶</span>
          <b>Demo interactiva</b>
          <span>Botones, formularios y un mini playground para probar React y Next.js en tiempo real.</span>
        </Link>
      </div>
    </>
  );
}
