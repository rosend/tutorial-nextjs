"use client";
// Menú lateral del tutorial. Es de cliente porque resalta la sección actual con usePathname().

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { secciones } from "@/lib/secciones";

export default function MenuLateral() {
  const ruta = (usePathname() || "").replace(/\/$/, "");

  // En celulares el menú es una fila con scroll horizontal:
  // al cambiar de página desplazamos la fila para que se vea la sección activa.
  // (solo se mueve la fila en horizontal; la página no se desplaza)
  useEffect(() => {
    const activo = document.querySelector<HTMLElement>('.lateral a[aria-current="page"]');
    const fila = activo?.closest("ol");
    if (activo && fila && fila.scrollWidth > fila.clientWidth) {
      fila.scrollLeft = activo.offsetLeft - fila.offsetLeft - 16;
    }
  }, [ruta]);

  return (
    <aside className="lateral">
      <nav aria-label="Secciones del tutorial">
        <p className="lateral-titulo">Contenido</p>
        <ol>
          {secciones.map((s) => {
            const href = `/tutorial/${s.slug}`;
            return (
              <li key={s.slug}>
                <Link href={href} aria-current={ruta === href ? "page" : undefined}>
                  <span className="n">{s.numero}</span>
                  {s.titulo}
                </Link>
              </li>
            );
          })}
        </ol>
        <ol className="lateral-extra">
          <li>
            <Link href="/demo">
              <span className="n">▶</span>Demo interactiva
            </Link>
          </li>
          <li>
            <Link href="/recursos">
              <span className="n">↗</span>Recursos adicionales
            </Link>
          </li>
        </ol>
      </nav>
    </aside>
  );
}
