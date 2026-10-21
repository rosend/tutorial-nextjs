// Ruta /tutorial/utilizacion → Sección 4 del tutorial.
import type { Metadata } from "next";
import Link from "next/link";
import BloqueCodigo from "@/components/BloqueCodigo";
import { Aviso, CabeceraSeccion, NavegacionPasos, Paso } from "@/components/Contenido";

export const metadata: Metadata = { title: "4. Utilización del framework" };

// ---- Ejemplos de código que se muestran en esta página ----
const codigoAcerca = `// app/acerca/page.tsx
// Al crear la carpeta "acerca" con un page.tsx dentro,
// Next.js crea automáticamente la ruta /acerca
export default function Acerca() {
  return (
    <main>
      <h1>Acerca de este proyecto</h1>
      <p>Aplicación de práctica creada con Next.js.</p>
    </main>
  );
}`;

const codigoTarjeta = `// components/Tarjeta.tsx
// Un componente reutilizable: recibe datos por "props"
type Props = {
  titulo: string;
  texto: string;
};

export default function Tarjeta({ titulo, texto }: Props) {
  return (
    <article style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </article>
  );
}`;

const codigoUsarTarjeta = `// app/page.tsx
import Tarjeta from "@/components/Tarjeta"; // "@/" apunta a la raíz del proyecto

export default function Home() {
  return (
    <main>
      <h1>Hola Mundo</h1>
      {/* Usamos el mismo componente varias veces con datos distintos */}
      <Tarjeta titulo="Rápido" texto="Las páginas se generan como HTML." />
      <Tarjeta titulo="Sencillo" texto="Cada carpeta es una ruta." />
    </main>
  );
}`;

const codigoLayout = `// app/layout.tsx
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Este menú aparece en TODAS las páginas */}
        <nav>
          <Link href="/">Inicio</Link> | <Link href="/acerca">Acerca</Link>
        </nav>
        {children /* aquí se inserta el contenido de cada page.tsx */}
      </body>
    </html>
  );
}`;

export default function Utilizacion() {
  return (
    <>
      <CabeceraSeccion
        numero="04"
        titulo="Utilización del framework"
        entradilla="Partimos del “Hola Mundo” para construir una aplicación base con varias páginas, un componente reutilizable y un menú de navegación."
      />

      <h2 id="aplicacion-base">
        <span className="n">4.1</span>¿Cómo empezar a crear una aplicación base?
      </h2>
      <p>
        Una aplicación base en Next.js se forma con tres piezas: <strong>páginas</strong> (cada una en su carpeta),{" "}
        <strong>componentes</strong> reutilizables y un <strong>layout</strong> que comparte elementos como el menú.
      </p>

      <Paso n={1} id="crear-pagina">
        Crear una segunda página
      </Paso>
      <p>
        Dentro de <code>app/</code> crea la carpeta <code>acerca</code> y dentro de ella un archivo <code>page.tsx</code>:
      </p>
      <BloqueCodigo etiqueta="app/acerca/page.tsx" codigo={codigoAcerca} />
      <Aviso tipo="resultado">
        <p>
          Guarda y visita <code>http://localhost:3000/acerca</code>. No hubo que registrar la ruta en ningún lado: la carpeta
          es la ruta.
        </p>
      </Aviso>

      <Paso n={2} id="crear-componente">
        Crear un componente reutilizable
      </Paso>
      <p>
        En la raíz del proyecto crea la carpeta <code>components</code> y el archivo <code>Tarjeta.tsx</code>. Un componente
        es una función que recibe datos (<em>props</em>) y devuelve JSX.
      </p>
      <BloqueCodigo etiqueta="components/Tarjeta.tsx" codigo={codigoTarjeta} />
      <p>Ahora úsalo en la página principal:</p>
      <BloqueCodigo etiqueta="app/page.tsx" codigo={codigoUsarTarjeta} />

      <Paso n={3} id="agregar-menu">
        Agregar un menú con navegación
      </Paso>
      <p>
        Abre <code>app/layout.tsx</code> y agrega un menú con el componente <code>Link</code>. <code>Link</code> cambia de
        página sin recargar todo el sitio, por lo que la navegación es instantánea.
      </p>
      <BloqueCodigo etiqueta="app/layout.tsx" codigo={codigoLayout} />
      <Aviso tipo="nota">
        <p>
          Este mismo sitio usa esa técnica: el menú superior está en <code>app/layout.tsx</code> y el menú lateral en{" "}
          <code>app/tutorial/layout.tsx</code>, que solo se aplica a las páginas del tutorial.
        </p>
      </Aviso>

      <h2 id="visualizar">
        <span className="n">4.2</span>¿Cómo visualizar los resultados de la ejecución?
      </h2>
      <div className="tabla-envoltorio">
        <table>
          <caption>
            <b>Tabla 1.</b> Comandos para ejecutar y visualizar la aplicación.
          </caption>
          <thead>
            <tr>
              <th scope="col">Comando</th>
              <th scope="col">Para qué sirve</th>
              <th scope="col">Dónde se ve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="ruta">npm run dev</code></td>
              <td>Modo desarrollo: recarga automática al guardar (Fast Refresh).</td>
              <td><code>http://localhost:3000</code></td>
            </tr>
            <tr>
              <td><code className="ruta">npm run build</code></td>
              <td>Compila la versión optimizada para publicar.</td>
              <td>Resumen de rutas en la terminal</td>
            </tr>
            <tr>
              <td><code className="ruta">npm run start</code></td>
              <td>Ejecuta la versión compilada con un servidor Node.js.</td>
              <td><code>http://localhost:3000</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="checks">
        <li>
          <strong>En el navegador:</strong> el resultado de cada página. Si hay un error en el código, Next.js muestra una
          ventana superpuesta indicando el archivo y la línea.
        </li>
        <li>
          <strong>En la terminal:</strong> los mensajes del servidor y los <code>console.log</code> de los Server Components.
        </li>
        <li>
          <strong>En las herramientas del navegador</strong> (<kbd>F12</kbd> → Consola): los <code>console.log</code> de los
          componentes de cliente.
        </li>
      </ul>
      <Aviso tipo="consejo">
        <p>
          Al ejecutar <code>npm run build</code>, la terminal muestra una lista de rutas. El símbolo <strong>○</strong> indica
          que la página se generó como HTML estático. Prueba los ejemplos en vivo en la <Link href="/demo">demo interactiva</Link>.
        </p>
      </Aviso>

      <NavegacionPasos slug="utilizacion" />
    </>
  );
}
