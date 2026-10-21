/**
 * Lista central de las secciones del tutorial.
 *
 * Se usa en varios lugares (menú lateral, página /tutorial, botones
 * "Anterior / Siguiente" y el archivo JSON público), así que si agregas
 * una sección nueva solo tienes que añadirla aquí y crear su carpeta
 * dentro de app/tutorial/.
 */
export type Seccion = {
  slug: string; // nombre de la carpeta en app/tutorial/<slug>
  numero: string; // número que se muestra en el índice
  titulo: string;
  resumen: string;
};

export const secciones: Seccion[] = [
  {
    slug: "justificacion",
    numero: "01",
    titulo: "Justificación del framework",
    resumen: "Para qué sirve Next.js, qué aplicaciones tiene, sobre qué lenguajes se apoya y qué necesitas saber antes de empezar.",
  },
  {
    slug: "instalacion",
    numero: "02",
    titulo: "Instalación",
    resumen: "Instala Node.js en Windows, crea tu primer proyecto con create-next-app y ejecútalo en tu computadora.",
  },
  {
    slug: "primeros-pasos",
    numero: "03",
    titulo: "Primeros pasos",
    resumen: "Modifica la página inicial y muestra tu propio “Hola Mundo”.",
  },
  {
    slug: "utilizacion",
    numero: "04",
    titulo: "Utilización del framework",
    resumen: "Crea una aplicación base con varias páginas, un componente reutilizable y navegación, y visualiza los resultados.",
  },
  {
    slug: "funcionamiento",
    numero: "05",
    titulo: "Funcionamiento del framework",
    resumen: "Cómo Next.js trabaja con carpetas y archivos, cómo se editan y cómo se referencian desde otras aplicaciones.",
  },
  {
    slug: "conclusiones",
    numero: "06",
    titulo: "Conclusiones y ejercicios",
    resumen: "Resumen de lo aprendido, alcance del tutorial y ejercicios para practicar por tu cuenta.",
  },
];

/** Devuelve la sección anterior y la siguiente a partir del slug actual. */
export function vecinas(slug: string) {
  const i = secciones.findIndex((s) => s.slug === slug);
  return {
    anterior: i > 0 ? secciones[i - 1] : null,
    siguiente: i >= 0 && i < secciones.length - 1 ? secciones[i + 1] : null,
  };
}
