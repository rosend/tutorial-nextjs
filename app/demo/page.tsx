// Ruta /demo → ejemplos interactivos.
// Esta página es un Server Component: lee el código fuente de cada ejemplo al compilar
// y lo muestra junto al ejemplo funcionando, así el código mostrado siempre es el real.
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import BloqueCodigo from "@/components/BloqueCodigo";
import { Aviso } from "@/components/Contenido";
import Contador from "./_ejemplos/Contador";
import DisenadorBoton from "./_ejemplos/DisenadorBoton";
import FormularioPerfil from "./_ejemplos/FormularioPerfil";

export const metadata: Metadata = { title: "Demo interactiva" };

// Lee un archivo de la carpeta _ejemplos (el "_" hace que Next.js no la trate como ruta)
function fuente(archivo: string) {
  return readFileSync(path.join(process.cwd(), "app", "demo", "_ejemplos", archivo), "utf8");
}

const nombres = ["ana", "luis", "maria"];

export default function Demo() {
  return (
    <main className="contenedor">
      <p className="supertitulo">Interactividad</p>
      <h1 className="titulo-pagina">Demo interactiva</h1>
      <p className="entradilla">
        Prueba los ejemplos directamente en la página. A la derecha de cada uno está su código completo y comentado: puedes
        copiarlo y pegarlo en tu proyecto <code>mi-app</code>.
      </p>
      <Aviso tipo="nota">
        <p>
          Los tres ejemplos son <strong>Client Components</strong> (empiezan con <code>&quot;use client&quot;</code>) porque
          reaccionan a lo que hace el usuario. La página que los contiene es un Server Component.
        </p>
      </Aviso>

      {/* ---------- Ejemplo 1 ---------- */}
      <h2 id="contador">
        <span className="n">01</span>Contador con botones
      </h2>
      <p>
        Usa <code>useState</code> para guardar un número. Cada clic cambia el estado y React vuelve a dibujar el componente.
      </p>
      <div className="demo">
        <div className="demo-vista">
          <Contador />
        </div>
        <BloqueCodigo etiqueta="app/demo/_ejemplos/Contador.tsx" codigo={fuente("Contador.tsx")} />
      </div>

      {/* ---------- Ejemplo 2 ---------- */}
      <h2 id="formulario">
        <span className="n">02</span>Formulario con vista previa en vivo
      </h2>
      <p>Escribe en los campos: la tarjeta se actualiza al instante porque lee los mismos valores del estado.</p>
      <div className="demo">
        <div className="demo-vista">
          <FormularioPerfil />
        </div>
        <BloqueCodigo etiqueta="app/demo/_ejemplos/FormularioPerfil.tsx" codigo={fuente("FormularioPerfil.tsx")} />
      </div>

      {/* ---------- Ejemplo 3 ---------- */}
      <h2 id="playground">
        <span className="n">03</span>Playground: diseña un botón
      </h2>
      <p>
        Cambia las opciones y observa cómo cambian en tiempo real el botón y el código JSX que lo genera. Copia el código y
        pégalo en un archivo <code>MiBoton.tsx</code> de tu proyecto.
      </p>
      <DisenadorBoton />
      <details style={{ marginTop: 12 }}>
        <summary style={{ cursor: "pointer", fontWeight: 600 }}>Ver el código fuente de este playground</summary>
        <BloqueCodigo etiqueta="app/demo/_ejemplos/DisenadorBoton.tsx" codigo={fuente("DisenadorBoton.tsx")} />
      </details>

      {/* ---------- Ejemplo 4 ---------- */}
      <h2 id="ruta-dinamica">
        <span className="n">04</span>Ruta dinámica
      </h2>
      <p>
        Un solo archivo, <code>app/demo/saludo/[nombre]/page.tsx</code>, genera una página distinta para cada nombre de la URL.
        Elige uno:
      </p>
      <div className="fila" style={{ marginBottom: 20 }}>
        {nombres.map((n) => (
          <Link key={n} className="btn-demo" href={`/demo/saludo/${n}`}>
            /demo/saludo/{n}
          </Link>
        ))}
      </div>
      <BloqueCodigo
        etiqueta="app/demo/saludo/[nombre]/page.tsx"
        codigo={readFileSync(path.join(process.cwd(), "app", "demo", "saludo", "[nombre]", "page.tsx"), "utf8")}
      />

      <Aviso tipo="consejo" titulo="Experimenta">
        <p>
          Copia cualquiera de estos ejemplos en tu proyecto, cambia textos o colores y guarda: verás el cambio al instante con{" "}
          <code>npm run dev</code>. Encontrarás más ideas en los{" "}
          <Link href="/tutorial/conclusiones#ejercicios">ejercicios finales</Link>.
        </p>
      </Aviso>
    </main>
  );
}
