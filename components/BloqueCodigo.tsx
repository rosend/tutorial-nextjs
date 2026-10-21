"use client";
// Componente de cliente: necesita el portapapeles del navegador para el botón "Copiar".

import { useState } from "react";

type Props = {
  codigo: string; // texto que se muestra y se copia
  etiqueta?: string; // nombre del archivo o "Terminal"
  terminal?: boolean; // true = estilo de comandos de consola
};

export default function BloqueCodigo({ codigo, etiqueta = "Terminal · CMD", terminal = false }: Props) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(codigo);
      setCopiado(true);
      // Después de 1.6 segundos el botón vuelve a decir "Copiar"
      setTimeout(() => setCopiado(false), 1600);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <div className={`codigo${terminal ? " terminal" : ""}`}>
      <div className="codigo-cabecera">
        <span className="puntos" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="codigo-etiqueta">{etiqueta}</span>
        <button type="button" className={`copiar${copiado ? " listo" : ""}`} onClick={copiar} aria-label={`Copiar código: ${etiqueta}`}>
          {copiado ? "¡Copiado!" : "Copiar"}
        </button>
        {/* aria-live avisa a los lectores de pantalla cuando se copió */}
        <span className="sr-only" aria-live="polite">
          {copiado ? "Código copiado al portapapeles" : ""}
        </span>
      </div>
      <pre tabIndex={0} aria-label={`Código: ${etiqueta}`}>
        <code>{codigo}</code>
      </pre>
    </div>
  );
}
