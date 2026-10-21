// Ruta /tutorial/justificacion → Sección 1 del tutorial.
import type { Metadata } from "next";
import { Aviso, CabeceraSeccion, NavegacionPasos } from "@/components/Contenido";

export const metadata: Metadata = { title: "1. Justificación del framework" };

export default function Justificacion() {
  return (
    <>
      <CabeceraSeccion
        numero="01"
        titulo="Justificación del framework"
        entradilla="Antes de instalar nada, conviene entender qué es Next.js, para qué se usa y qué conocimientos necesitas."
      />

      <h2 id="para-que-sirve">
        <span className="n">1.1</span>¿Para qué sirve?
      </h2>
      <p>
        <strong>Next.js</strong> es un <em>framework</em> de código abierto, creado por la empresa Vercel, para construir
        aplicaciones web con <strong>React</strong>. React se encarga de crear la interfaz (botones, formularios, listas),
        y Next.js agrega todo lo que una aplicación real necesita alrededor:
      </p>
      <ul className="checks">
        <li>
          <strong>Rutas por carpetas:</strong> cada carpeta dentro de <code>app/</code> se convierte en una página, sin
          configurar un enrutador.
        </li>
        <li>
          <strong>Renderizado en el servidor y estático:</strong> las páginas se pueden generar como HTML antes de llegar
          al navegador, por lo que cargan rápido y los buscadores las leen mejor (SEO).
        </li>
        <li>
          <strong>Optimización automática:</strong> divide el código por página, optimiza fuentes e imágenes y precarga los
          enlaces.
        </li>
        <li>
          <strong>Entorno de desarrollo listo:</strong> servidor local con recarga instantánea al guardar, TypeScript y ESLint
          integrados.
        </li>
      </ul>

      <h2 id="aplicaciones">
        <span className="n">1.2</span>¿Qué aplicaciones tiene?
      </h2>
      <p>Next.js sirve tanto para sitios sencillos como para aplicaciones grandes. Algunos usos comunes:</p>
      <div className="tabla-envoltorio">
        <table>
          <caption>
            <b>Tabla 1.</b> Tipos de proyectos que se construyen con Next.js.
          </caption>
          <thead>
            <tr>
              <th scope="col">Tipo de proyecto</th>
              <th scope="col">Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sitios informativos y corporativos</td>
              <td>Página de una empresa, portafolio personal, landing page.</td>
            </tr>
            <tr>
              <td>Blogs y documentación</td>
              <td>Artículos, manuales y tutoriales como este sitio.</td>
            </tr>
            <tr>
              <td>Tiendas en línea</td>
              <td>Catálogo de productos con carrito de compras.</td>
            </tr>
            <tr>
              <td>Paneles y aplicaciones web</td>
              <td>Dashboards administrativos, sistemas escolares, aplicaciones con inicio de sesión.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="lenguajes">
        <span className="n">1.3</span>¿Sobre qué lenguajes se apoya?
      </h2>
      <ul className="checks">
        <li>
          <strong>JavaScript o TypeScript:</strong> el lenguaje de programación principal. TypeScript es JavaScript con tipos,
          y es la opción recomendada por defecto (archivos <code>.ts</code> y <code>.tsx</code>).
        </li>
        <li>
          <strong>JSX:</strong> sintaxis de React que permite escribir etiquetas parecidas a HTML dentro de JavaScript, por
          ejemplo <code>{"<h1>Hola</h1>"}</code>.
        </li>
        <li>
          <strong>HTML y CSS:</strong> la estructura y los estilos. Next.js admite CSS normal, CSS Modules y herramientas como
          Tailwind CSS.
        </li>
        <li>
          <strong>Node.js:</strong> no es un lenguaje, sino el entorno que ejecuta JavaScript fuera del navegador. Next.js lo
          usa para el servidor de desarrollo y para compilar el proyecto.
        </li>
      </ul>

      <h2 id="prerrequisitos">
        <span className="n">1.4</span>¿Qué prerrequisitos necesita?
      </h2>
      <div className="tabla-envoltorio">
        <table>
          <caption>
            <b>Tabla 2.</b> Prerrequisitos para seguir este tutorial.
          </caption>
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Requisito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conocimientos</td>
              <td>Nociones básicas de HTML, CSS y JavaScript. Saber qué es un componente de React ayuda, pero no es obligatorio.</td>
            </tr>
            <tr>
              <td>Software</td>
              <td>Node.js 20.9 o superior (incluye npm) y un editor de código, por ejemplo Visual Studio Code.</td>
            </tr>
            <tr>
              <td>Sistema operativo</td>
              <td>Windows, macOS o Linux. Este tutorial muestra los pasos en Windows.</td>
            </tr>
            <tr>
              <td>Otros</td>
              <td>Conexión a internet para descargar paquetes y un navegador moderno.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Aviso tipo="nota">
        <p>
          Este sitio es un ejemplo real: está hecho con Next.js 16 usando exactamente las técnicas que se explican en el
          tutorial.
        </p>
      </Aviso>

      <NavegacionPasos slug="justificacion" />
    </>
  );
}
