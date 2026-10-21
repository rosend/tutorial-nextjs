// Route Handler: genera el archivo /api/secciones.json al compilar.
// Es un ejemplo de cómo OTRAS aplicaciones pueden consumir datos de este sitio
// (por ejemplo con fetch desde otra página web o una app móvil).
import { secciones } from "@/lib/secciones";

// En un sitio estático (output: "export") hay que indicar que la respuesta es fija
export const dynamic = "force-static";

export function GET() {
  return Response.json({
    sitio: "Tutorial de Next.js",
    total: secciones.length,
    secciones: secciones.map((s) => ({ ...s, url: `/tutorial/${s.slug}/` })),
  });
}
