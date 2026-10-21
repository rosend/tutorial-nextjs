// Ruta /tutorial/conclusiones → Sección 6 del tutorial.
import type { Metadata } from "next";
import Link from "next/link";
import { Aviso, CabeceraSeccion, NavegacionPasos } from "@/components/Contenido";

export const metadata: Metadata = { title: "6. Conclusiones y ejercicios" };

// Ejercicios propuestos: cada uno indica el nivel y una pista
const ejercicios = [
  {
    nivel: "Básico",
    titulo: "Tu página de presentación",
    texto: "Crea la ruta /sobre-mi con tu nombre, una foto guardada en public/ y una lista de tus pasatiempos.",
    pista: "Carpeta app/sobre-mi/page.tsx e imagen con <img src=\"/foto.jpg\" />.",
  },
  {
    nivel: "Básico",
    titulo: "Menú de navegación",
    texto: "Agrega en app/layout.tsx un menú con enlaces a Inicio, Acerca y Sobre mí usando el componente Link.",
    pista: "import Link from \"next/link\".",
  },
  {
    nivel: "Intermedio",
    titulo: "Lista de tarjetas",
    texto: "Crea un arreglo con 3 productos (nombre y precio) y muéstralos con un componente Tarjeta usando .map().",
    pista: "productos.map((p) => <Tarjeta key={p.nombre} ... />).",
  },
  {
    nivel: "Intermedio",
    titulo: "Contador con límite",
    texto: "Haz un contador que no baje de 0 ni pase de 10 y que cambie de color al llegar al máximo.",
    pista: "Client Component con \"use client\" y useState. Revisa la demo.",
  },
  {
    nivel: "Reto",
    titulo: "Página por producto",
    texto: "Crea app/productos/[id]/page.tsx que muestre el detalle de cada producto según la URL.",
    pista: "Lee el parámetro con: const { id } = await params.",
  },
];

export default function Conclusiones() {
  return (
    <>
      <CabeceraSeccion
        numero="06"
        titulo="Conclusiones y ejercicios"
        entradilla="Repasamos lo aprendido, el alcance de este tutorial y te dejamos ejercicios para seguir practicando."
      />

      <h2 id="resumen">
        <span className="n">6.1</span>Resumen de lo aprendido
      </h2>
      <ul className="checks">
        <li>Qué es Next.js, para qué sirve y sobre qué lenguajes se apoya (JavaScript/TypeScript, JSX, HTML y CSS).</li>
        <li>Cómo instalar Node.js en Windows, verificarlo y crear un proyecto con <code>create-next-app</code>.</li>
        <li>Cómo escribir el primer “Hola Mundo” modificando <code>app/page.tsx</code>.</li>
        <li>Cómo crear una aplicación base con varias páginas, componentes y un menú con <code>Link</code>.</li>
        <li>Cómo funciona el enrutamiento por carpetas y la diferencia entre componentes de servidor y de cliente.</li>
        <li>Cómo visualizar los resultados en desarrollo y cómo compilar el sitio para publicarlo.</li>
      </ul>

      <h2 id="alcance">
        <span className="n">6.2</span>Alcance y objetivos conseguidos
      </h2>
      <p>
        Este es un tutorial de <strong>nivel inicial</strong>. Al terminarlo, el lector es capaz de preparar el entorno, crear
        y ejecutar un proyecto de Next.js y construir un sitio sencillo de varias páginas con componentes reutilizables e
        interactividad básica.
      </p>
      <div className="tabla-envoltorio">
        <table>
          <caption>
            <b>Tabla 1.</b> Temas incluidos y temas para profundizar después.
          </caption>
          <thead>
            <tr>
              <th scope="col">Incluido en este tutorial</th>
              <th scope="col">Para profundizar después</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Instalación y estructura del proyecto</td><td>Conexión a bases de datos</td></tr>
            <tr><td>Páginas, layouts y navegación</td><td>Autenticación de usuarios</td></tr>
            <tr><td>Server y Client Components</td><td>Server Actions y formularios en el servidor</td></tr>
            <tr><td>Rutas dinámicas y datos JSON</td><td>Caché y renderizado avanzado</td></tr>
            <tr><td>Publicación como sitio estático</td><td>Despliegue con servidor (Vercel, Docker)</td></tr>
          </tbody>
        </table>
      </div>
      <Aviso tipo="resultado" titulo="Objetivo cumplido">
        <p>
          El propio sitio que estás leyendo es la aplicación de ejemplo: está construido con Next.js aplicando cada uno de los
          conceptos explicados.
        </p>
      </Aviso>

      <h2 id="ejercicios">
        <span className="n">6.3</span>Ejercicios finales
      </h2>
      <p>Intenta resolverlos en tu proyecto <code>mi-app</code>. Están ordenados de menor a mayor dificultad.</p>
      <div className="tarjetas">
        {ejercicios.map((e, i) => (
          <div key={e.titulo} className="tarjeta">
            <span className="n">
              Ejercicio {i + 1} · {e.nivel}
            </span>
            <b>{e.titulo}</b>
            <span>{e.texto}</span>
            <span>
              <strong>Pista:</strong> <code>{e.pista}</code>
            </span>
          </div>
        ))}
      </div>
      <Aviso tipo="consejo">
        <p>
          Antes de empezar, practica en la <Link href="/demo">demo interactiva</Link> y consulta los{" "}
          <Link href="/recursos">recursos adicionales</Link>.
        </p>
      </Aviso>

      <NavegacionPasos slug="conclusiones" />
    </>
  );
}
