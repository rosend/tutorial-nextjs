// Ruta /tutorial/primeros-pasos → Sección 3 del tutorial.
import type { Metadata } from "next";
import Link from "next/link";
import BloqueCodigo from "@/components/BloqueCodigo";
import { Aviso, CabeceraSeccion, Figura, NavegacionPasos } from "@/components/Contenido";
import img16 from "@/assets/capturas/16-page-tsx-ubicacion.webp";
import img17 from "@/assets/capturas/17-page-tsx-codigo.webp";
import img18 from "@/assets/capturas/18-servidor-hola.webp";
import img19 from "@/assets/capturas/19-hola-mundo-navegador.webp";

export const metadata: Metadata = { title: "3. Primeros pasos" };

// Código del ejemplo. Se guarda en una constante para mostrarlo y poder copiarlo.
const holaMundo = `// app/page.tsx
// Cada archivo page.tsx exporta un componente de React.
// Lo que devuelve (JSX) es lo que se ve en la página.
export default function Home() {
  return (
    <main>
      <h1>Hola Mundo</h1>
      <p>Mi primera aplicación con Next.js.</p>
    </main>
  );
}`;

export default function PrimerosPasos() {
  return (
    <>
      <CabeceraSeccion
        numero="03"
        titulo="Primeros pasos"
        entradilla="Con el proyecto creado y funcionando, es momento de escribir nuestro propio código: un clásico “Hola Mundo”."
      />

      <h2 id="hola-mundo">
        <span className="n">3.1</span>¿Cómo realizar una primera aproximación (“Hola Mundo”)?
      </h2>
      <p>Vamos a modificar la página inicial para mostrar nuestro propio mensaje.</p>
      <ol className="pasos">
        <li>
          En VS Code, dentro de <code>mi-app</code>, abre el archivo <strong>app → page.tsx</strong>. Ya tiene código de
          ejemplo; lo vamos a reemplazar.
          <Figura src={img16} numero={16} texto="Ubicación del archivo app/page.tsx." />
        </li>
        <li>
          Borra todo el contenido de <code>page.tsx</code> y escribe o copia lo siguiente:
          <BloqueCodigo etiqueta="app/page.tsx" codigo={holaMundo} />
          <Figura src={img17} numero={17} texto="El código del componente Home en el editor." />
        </li>
        <li>
          Guarda el archivo con <kbd>Ctrl</kbd> + <kbd>S</kbd>.
        </li>
        <li>
          Si el servidor está detenido, inícialo de nuevo dentro de la carpeta <code>mi-app</code>:
          <BloqueCodigo terminal codigo="npm run dev" />
          <Figura src={img18} numero={18} texto="Servidor de desarrollo iniciado." />
        </li>
        <li>
          Abre <a href="http://localhost:3000">http://localhost:3000</a> en el navegador. Si el servidor ya estaba encendido,
          la página se actualiza sola al guardar (esto se llama <strong>Fast Refresh</strong>).
        </li>
      </ol>
      <Aviso tipo="resultado">
        <p>
          Verás el mensaje <strong>Hola Mundo</strong> y debajo «Mi primera aplicación con Next.js».
        </p>
      </Aviso>
      <Figura src={img19} numero={19} texto="Resultado final en el navegador." />

      <h2 id="que-paso">
        <span className="n">3.2</span>¿Qué acaba de pasar?
      </h2>
      <ul className="checks">
        <li>
          <code>export default function Home()</code> define un <strong>componente</strong> de React. Next.js usa el que se
          exporta por defecto en <code>page.tsx</code> como contenido de la página.
        </li>
        <li>
          Lo que va dentro de <code>return ( … )</code> es <strong>JSX</strong>: parece HTML, pero está dentro de JavaScript.
        </li>
        <li>
          Como el archivo está en <code>app/page.tsx</code>, su ruta es <code>/</code>, la página principal.
        </li>
      </ul>
      <Aviso tipo="consejo">
        <p>
          ¿Quieres probarlo sin instalar nada? En la <Link href="/demo">demo interactiva</Link> puedes cambiar un texto y ver
          el resultado al instante.
        </p>
      </Aviso>

      <NavegacionPasos slug="primeros-pasos" />
    </>
  );
}
