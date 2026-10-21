// Ruta "/" → portada del sitio.
import Link from "next/link";
import { secciones } from "@/lib/secciones";

export default function Inicio() {
  return (
    <main>
      <section className="hero" aria-labelledby="titulo-portada">
        <div className="hero-interior">
          <div>
            <p className="supertitulo">Guía para principiantes</p>
            <h1 id="titulo-portada" className="marca-grande">
              Next<span>.js</span>
            </h1>
            <p className="hero-sub">Tutorial de instalación y primeros pasos</p>
            <p className="hero-desc">
              Aprende qué es Next.js, prepara tu entorno en Windows con Node.js y crea tu primera aplicación paso a paso.
              Este mismo sitio está construido con Next.js.
            </p>
            <div className="hero-botones">
              <Link className="btn primario" href="/tutorial/justificacion">
                Empezar el tutorial →
              </Link>
              <Link className="btn secundario" href="/demo">
                Probar la demo
              </Link>
            </div>
            <ul className="chips" aria-label="Tecnologías del tutorial">
              <li>Windows</li>
              <li>Node.js 24</li>
              <li>Next.js 16</li>
              <li>React 19</li>
              <li>VS Code</li>
            </ul>
          </div>

          {/* Terminal decorativa: aria-hidden porque es solo ilustrativa */}
          <div className="terminal-hero" aria-hidden="true">
            <div className="codigo-cabecera">
              <span className="puntos">
                <i />
                <i />
                <i />
              </span>
              <span className="codigo-etiqueta">mi-app — cmd</span>
            </div>
            <pre>
              <span className="pr">&gt; </span>node -v{"\n"}
              <span className="sal">v24.22.0</span>
              {"\n"}
              <span className="pr">&gt; </span>npx create-next-app@latest mi-app{"\n"}
              <span className="pr">&gt; </span>cd mi-app{"\n"}
              <span className="pr">&gt; </span>npm run dev{"\n"}
              <span className="sal">{"   ▲ Next.js 16.4.1"}</span>
              {"\n"}
              <span className="sal">{"   - Local:   http://localhost:3000"}</span>
              {"\n"}
              <span className="ok">{" ✓ Ready"}</span>
              <span className="cursor" />
            </pre>
          </div>
        </div>
      </section>

      <div className="contenedor">
        <h2 style={{ marginTop: 0 }}>Lo que aprenderás</h2>
        <div className="tarjetas">
          {secciones.map((s) => (
            <Link key={s.slug} className="tarjeta" href={`/tutorial/${s.slug}`}>
              <span className="n">{s.numero}</span>
              <b>{s.titulo}</b>
              <span>{s.resumen}</span>
            </Link>
          ))}
        </div>

        <h2>Aprende haciendo</h2>
        <div className="tarjetas">
          <Link className="tarjeta" href="/demo">
            <span className="n">▶ Demo</span>
            <b>Ejemplos interactivos</b>
            <span>Contador con botones, formulario con vista previa y un mini playground para diseñar un botón.</span>
          </Link>
          <Link className="tarjeta" href="/demo/saludo/ana">
            <span className="n">/demo/saludo/[nombre]</span>
            <b>Rutas dinámicas</b>
            <span>Una misma página que cambia según la URL.</span>
          </Link>
          <Link className="tarjeta" href="/recursos">
            <span className="n">↗ Recursos</span>
            <b>Documentación y comunidad</b>
            <span>Enlaces oficiales, foros, cursos y videos para seguir aprendiendo.</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
