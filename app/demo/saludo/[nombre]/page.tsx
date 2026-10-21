// Ruta dinámica: /demo/saludo/ana, /demo/saludo/luis, /demo/saludo/maria
// La carpeta [nombre] entre corchetes indica que esa parte de la URL es variable.
import Link from "next/link";

// Como el sitio es estático, hay que decirle a Next.js qué páginas generar al compilar
export function generateStaticParams() {
  return [{ nombre: "ana" }, { nombre: "luis" }, { nombre: "maria" }];
}

// Cualquier otro nombre que no esté en la lista mostrará la página 404
export const dynamicParams = false;

// Next.js entrega los parámetros de la URL en "params" (es una promesa, por eso usamos await)
export default async function Saludo({ params }: PageProps<"/demo/saludo/[nombre]">) {
  const { nombre } = await params;

  // Pasamos la primera letra a mayúscula: "ana" → "Ana"
  const nombreBonito = nombre.charAt(0).toUpperCase() + nombre.slice(1);

  return (
    <main className="contenedor contenedor-estrecho">
      <p className="supertitulo">Ruta dinámica</p>
      <h1 className="titulo-pagina">¡Hola, {nombreBonito}! 👋</h1>
      <p className="entradilla">
        Esta página se generó a partir de la URL <code>/demo/saludo/{nombre}</code>. El valor <code>{nombre}</code> llegó en{" "}
        <code>params</code>.
      </p>
      <Link className="btn-demo" href="/demo#ruta-dinamica">
        ← Volver a la demo
      </Link>
    </main>
  );
}
