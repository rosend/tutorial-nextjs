"use client";
// "use client" indica que este componente se ejecuta también en el navegador.
// Lo necesitamos porque usa estado (menú abierto, tema) y eventos de clic.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Enlaces del menú principal. `href` es la ruta que genera cada carpeta de app/.
const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/tutorial", texto: "Tutorial" },
  { href: "/demo", texto: "Demo interactiva" },
  { href: "/recursos", texto: "Recursos" },
];

export default function Encabezado() {
  // usePathname devuelve la ruta actual, por ejemplo "/tutorial/instalacion"
  const ruta = (usePathname() || "/").replace(/\/$/, "") || "/";
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Marca como activo "Tutorial" también cuando estamos en una de sus subpáginas
  const estaActivo = (href: string) => (href === "/" ? ruta === "/" : ruta.startsWith(href));

  // Alterna entre tema claro y oscuro guardando la preferencia en el navegador
  function cambiarTema() {
    const raiz = document.documentElement;
    const actual = raiz.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const nuevo = actual === "dark" ? "light" : "dark";
    raiz.dataset.theme = nuevo;
    try {
      localStorage.setItem("tema", nuevo);
    } catch {
      /* si el navegador bloquea localStorage, el tema solo dura esta visita */
    }
  }

  return (
    <header className="topbar">
      <Link className="marca" href="/" aria-label="Inicio del tutorial de Next.js">
        <span className="logo" aria-hidden="true">N</span>
        <span>
          Next<b>.js</b>
        </span>
      </Link>

      <nav aria-label="Menú principal">
        <ul id="menu-principal" className={`menu-principal${menuAbierto ? " abierto" : ""}`}>
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link href={e.href} aria-current={estaActivo(e.href) ? "page" : undefined} onClick={() => setMenuAbierto(false)}>
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="acciones">
        <button type="button" className="boton-icono" onClick={cambiarTema} aria-label="Cambiar entre tema claro y oscuro">
          <svg className="icono" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" />
          </svg>
        </button>
        <button
          type="button"
          className="boton-icono solo-movil"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
        >
          <svg className="icono" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
