// Archivo especial: se muestra cuando una ruta no existe (error 404).
import Link from "next/link";

export default function NoEncontrado() {
  return (
    <main className="contenedor contenedor-estrecho">
      <p className="supertitulo">Error 404</p>
      <h1 className="titulo-pagina">Página no encontrada</h1>
      <p className="entradilla">La dirección que buscas no existe o fue movida.</p>
      <Link className="btn-demo lleno" href="/">
        Volver al inicio
      </Link>
    </main>
  );
}
