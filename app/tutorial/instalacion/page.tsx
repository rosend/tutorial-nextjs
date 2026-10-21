// Ruta /tutorial/instalacion → Sección 2 del tutorial.
import type { Metadata } from "next";
import BloqueCodigo from "@/components/BloqueCodigo";
import { Aviso, CabeceraSeccion, Figura, NavegacionPasos, Paso } from "@/components/Contenido";

// Las imágenes se importan como módulos: Next.js conoce su tamaño y les pone la ruta correcta al compilar
import img01 from "@/assets/capturas/01-nodejs-sitio.webp";
import img02 from "@/assets/capturas/02-nodejs-descarga.webp";
import img03 from "@/assets/capturas/03-instalador-bienvenida.webp";
import img04 from "@/assets/capturas/04-instalador-licencia.webp";
import img05 from "@/assets/capturas/05-instalador-componentes.webp";
import img06 from "@/assets/capturas/06-instalador-herramientas.webp";
import img07 from "@/assets/capturas/07-instalador-fin.webp";
import img08 from "@/assets/capturas/08-vscode-nueva-terminal.webp";
import img09 from "@/assets/capturas/09-versiones-node-npm.webp";
import img10 from "@/assets/capturas/10-carpeta-proyecto.webp";
import img11 from "@/assets/capturas/11-terminal-carpeta.webp";
import img12 from "@/assets/capturas/12-create-next-app.webp";
import img13 from "@/assets/capturas/13-npm-run-dev.webp";
import img14 from "@/assets/capturas/14-pagina-inicial.webp";
import img15 from "@/assets/capturas/15-estructura-archivos.webp";

export const metadata: Metadata = { title: "2. Instalación" };

export default function Instalacion() {
  return (
    <>
      <CabeceraSeccion
        numero="02"
        titulo="Instalación de Next.js"
        entradilla="En esta sección prepararemos el entorno de desarrollo en Windows y crearemos nuestra primera aplicación con Next.js, paso a paso."
      />
      <div className="cuadro-info">
        <div>
          <span className="k">Sitio oficial</span>
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            nextjs.org
          </a>
        </div>
        <div>
          <span className="k">Plataforma del tutorial</span>
          <strong>Windows · Node.js · VS Code</strong>
        </div>
      </div>

      <h2 id="se-precisa">
        <span className="n">2.1</span>¿Se precisa instalación?
      </h2>
      <p>
        Sí. Para desarrollar con Next.js necesitas <strong>Node.js</strong>, que ejecuta JavaScript fuera del navegador, y{" "}
        <strong>npm</strong>, que administra los paquetes del proyecto. npm se instala automáticamente junto con Node.js.
      </p>
      <p>
        Next.js se incorpora a cada proyecto mediante la herramienta <code>create-next-app</code>, que también instala las
        dependencias necesarias.
      </p>
      <Aviso tipo="nota">
        <p>No es necesario instalar Next.js globalmente: cada proyecto incluye su propia copia como dependencia.</p>
      </Aviso>

      <h2 id="pasos">
        <span className="n">2.2</span>¿Qué pasos hay que realizar para la instalación?
      </h2>
      <h3>Requisitos previos</h3>
      <ul className="checks">
        <li>Una computadora con Windows.</li>
        <li>Visual Studio Code instalado.</li>
        <li>Conexión a internet y espacio disponible en el disco.</li>
        <li>Node.js en una versión compatible con Next.js (20.9 o superior).</li>
      </ul>

      {/* ---------------- PASO 1 ---------------- */}
      <Paso n={1} id="paso-1">
        Instalar Node.js
      </Paso>
      <ol className="pasos">
        <li>Abre tu navegador.</li>
        <li>
          Entra al sitio oficial:{" "}
          <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
            https://nodejs.org/
          </a>
          .
          <Figura src={img01} numero={1} texto="Sitio oficial de Node.js." />
        </li>
        <li>
          Busca la versión identificada como <strong>LTS</strong> (soporte a largo plazo) y descarga el instalador para
          Windows, un archivo con extensión <code>.msi</code>.
          <Figura src={img02} numero={2} texto="Página de descarga de Node.js con la versión LTS." />
        </li>
        <li>
          Abre el archivo <code>.msi</code> y sigue las instrucciones del asistente.
          <Figura src={img03} numero={3} texto="Pantalla de bienvenida del instalador." />
        </li>
        <li>
          Acepta los términos de licencia.
          <Figura src={img04} numero={4} texto="Aceptación de los términos de licencia." />
        </li>
        <li>
          Conserva las opciones predeterminadas, incluyendo <strong>npm</strong> y <strong>Add to PATH</strong>. Asegúrate de
          que no aparezcan cruces rojas.
          <Figura src={img05} numero={5} texto="Selección de componentes con las opciones predeterminadas." />
        </li>
        <li>
          En la ventana de herramientas adicionales puedes continuar sin marcar la casilla.
          <Figura src={img06} numero={6} texto="Herramientas opcionales para módulos nativos." />
        </li>
        <li>
          Termina la instalación.
          <Figura src={img07} numero={7} texto="Instalación de Node.js completada." />
        </li>
      </ol>

      {/* ---------------- PASO 2 ---------------- */}
      <Paso n={2} id="paso-2">
        Comprobar la instalación desde Visual Studio Code
      </Paso>
      <ol className="pasos">
        <li>
          Abre <strong>Visual Studio Code</strong> y en el menú superior elige <strong>Terminal → Nuevo terminal</strong>.
          <Figura src={img08} numero={8} texto="Apertura de una nueva terminal en Visual Studio Code." />
          <Aviso tipo="importante">
            <p>
              Si la terminal muestra <strong>PowerShell</strong>, haz clic en la flecha junto al <strong>+</strong> y elige{" "}
              <strong>Command Prompt (CMD)</strong>.
            </p>
          </Aviso>
        </li>
        <li>
          Comprueba Node.js escribiendo este comando y presionando <kbd>Enter</kbd>:
          <BloqueCodigo terminal codigo="node -v" />
        </li>
        <li>
          Comprueba npm:
          <BloqueCodigo terminal codigo="npm -v" />
          <Figura src={img09} numero={9} texto="Versiones de Node.js y npm en la terminal." />
        </li>
      </ol>
      <Aviso tipo="resultado">
        <p>Si ambos comandos muestran un número de versión, la instalación quedó verificada.</p>
      </Aviso>

      {/* ---------------- PASO 3 ---------------- */}
      <Paso n={3} id="paso-3">
        Crear una carpeta para el proyecto
      </Paso>
      <ol className="pasos">
        <li>
          En el Explorador de archivos, entra a <strong>Documentos</strong> y crea una carpeta llamada{" "}
          <code>proyectos-next</code>.
        </li>
        <li>
          En VS Code elige <strong>Archivo → Abrir carpeta</strong> y selecciona <code>proyectos-next</code>.
          <Figura src={img10} numero={10} texto="Selección de la carpeta proyectos-next." />
        </li>
        <li>
          Abre <strong>Terminal → Nuevo terminal (CMD)</strong>. La terminal quedará ubicada dentro de esa carpeta.
          <Figura src={img11} numero={11} texto="Terminal abierta dentro de la carpeta del proyecto." />
        </li>
      </ol>

      {/* ---------------- PASO 4 ---------------- */}
      <Paso n={4} id="paso-4">
        Crear la aplicación de Next.js
      </Paso>
      <p>
        La herramienta oficial <code>create-next-app</code> genera la estructura inicial e instala las dependencias. Ejecuta:
      </p>
      <BloqueCodigo terminal codigo="npx create-next-app@latest mi-app" />
      <p>
        <code>mi-app</code> es el nombre de la carpeta que se va a crear; puedes usar el que quieras. La herramienta hará
        algunas preguntas: elige <strong>Yes, use recommended defaults</strong> y espera a que termine.
      </p>
      <Figura src={img12} numero={12} texto="Ejecución de create-next-app." />
      <Aviso tipo="consejo">
        <p>
          Si no sabes qué responder a una pregunta, no cierres la terminal: copia el texto exacto y búscalo en la
          documentación antes de continuar.
        </p>
      </Aviso>

      {/* ---------------- PASO 5 ---------------- */}
      <Paso n={5} id="paso-5">
        Entrar a la carpeta y ejecutar la aplicación
      </Paso>
      <BloqueCodigo terminal etiqueta="Terminal · CMD" codigo={"cd mi-app\nnpm run dev"} />
      <p>
        <code>npm run dev</code> inicia el <strong>servidor de desarrollo</strong>. Espera el mensaje <strong>Ready</strong>{" "}
        y la dirección local.
      </p>
      <Figura src={img13} numero={13} texto="Servidor de desarrollo en ejecución." />

      {/* ---------------- PASO 6 ---------------- */}
      <Paso n={6} id="paso-6">
        Abrir la aplicación en el navegador
      </Paso>
      <p>
        Visita <a href="http://localhost:3000">http://localhost:3000</a>.
      </p>
      <Aviso tipo="resultado">
        <p>Aparecerá la página inicial de la aplicación creada.</p>
      </Aviso>
      <Figura src={img14} numero={14} texto="Página inicial en http://localhost:3000." />
      <Aviso tipo="consejo">
        <p>
          Para detener el servidor vuelve a la terminal y presiona <kbd>Ctrl</kbd> + <kbd>C</kbd>.
        </p>
      </Aviso>

      {/* ---------------- PASO 7 ---------------- */}
      <Paso n={7} id="paso-7">
        Revisar la estructura de archivos
      </Paso>
      <p>
        Verifica que existan las carpetas <code>app</code>, <code>node_modules</code> y <code>public</code>, y el archivo{" "}
        <code>package.json</code>.
      </p>
      <Figura src={img15} numero={15} texto="Estructura del proyecto mi-app." />

      <h2 id="versiones">
        <span className="n">2.3</span>¿Versiones necesarias?
      </h2>
      <p>
        La documentación oficial pide como mínimo <strong>Node.js 20.9</strong>. Next.js funciona en Windows, macOS y Linux.
      </p>
      <div className="tabla-envoltorio">
        <table>
          <caption>
            <b>Tabla 1.</b> Versiones utilizadas en este tutorial.
          </caption>
          <thead>
            <tr>
              <th scope="col">Herramienta</th>
              <th scope="col">Versión</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sistema operativo</td><td>Windows 10</td></tr>
            <tr><td>Node.js</td><td>24.22.0</td></tr>
            <tr><td>Next.js</td><td>16.4</td></tr>
            <tr><td>npm</td><td>Se verifica con <code>npm -v</code></td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="rutas">
        <span className="n">2.4</span>¿Rutas para tener en cuenta?
      </h2>
      <p>Estas son las carpetas y archivos más importantes de un proyecto recién creado:</p>
      <div className="tabla-envoltorio">
        <table>
          <caption>
            <b>Tabla 2.</b> Rutas y archivos principales.
          </caption>
          <thead>
            <tr>
              <th scope="col">Ruta o archivo</th>
              <th scope="col">Función</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code className="ruta">app/</code></td><td>Contiene las páginas y componentes (App Router).</td></tr>
            <tr><td><code className="ruta">app/page.tsx</code></td><td>Página principal del sitio (ruta <code>/</code>).</td></tr>
            <tr><td><code className="ruta">app/layout.tsx</code></td><td>Estructura compartida por todas las páginas.</td></tr>
            <tr><td><code className="ruta">app/nombre/page.tsx</code></td><td>Crea una página en la ruta <code>/nombre</code>.</td></tr>
            <tr><td><code className="ruta">public/</code></td><td>Archivos estáticos: imágenes, iconos, fuentes.</td></tr>
            <tr><td><code className="ruta">package.json</code></td><td>Información del proyecto, dependencias y comandos.</td></tr>
            <tr><td><code className="ruta">next.config.ts</code></td><td>Configuración de Next.js.</td></tr>
            <tr><td><code className="ruta">.env.local</code></td><td>Variables de entorno locales (privadas).</td></tr>
            <tr><td><code className="ruta">node_modules/</code></td><td>Paquetes instalados. No se edita a mano.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="variables">
        <span className="n">2.5</span>¿Variables de entorno?
      </h2>
      <p>
        Next.js permite definir variables de entorno en archivos <code>.env</code> y <code>.env.local</code> en la raíz del
        proyecto, por ejemplo claves de una API o la dirección de una base de datos.
      </p>
      <BloqueCodigo etiqueta=".env.local" codigo={"# Solo disponible en el servidor\nCLAVE_API=mi-clave-secreta\n\n# Visible también en el navegador (prefijo NEXT_PUBLIC_)\nNEXT_PUBLIC_NOMBRE_SITIO=Tutorial Next.js"} />
      <Aviso tipo="importante">
        <p>
          Las variables con prefijo <code>NEXT_PUBLIC_</code> se envían al navegador: nunca guardes ahí contraseñas o claves
          secretas. No subas <code>.env.local</code> a un repositorio.
        </p>
      </Aviso>
      <p>Para el ejemplo de este tutorial no fue necesario configurar variables de entorno.</p>

      <h2 id="base-de-datos">
        <span className="n">2.6</span>¿Necesita base de datos?
      </h2>
      <p>
        <strong>No.</strong> Next.js no necesita una base de datos para instalarse ni para funcionar. Si tu aplicación necesita
        guardar información (usuarios, productos, pedidos), puedes conectarla a una base de datos como PostgreSQL o MySQL,
        pero es opcional.
      </p>

      <NavegacionPasos slug="instalacion" />
    </>
  );
}
