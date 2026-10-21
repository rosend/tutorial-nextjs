"use client"; // Componente interactivo: mini playground

import { useState } from "react";
import BloqueCodigo from "@/components/BloqueCodigo";

// Ejemplo 3: diseñador de botones.
// Cambias las opciones y se actualizan, en tiempo real, el botón y el código JSX que lo genera.
export default function DisenadorBoton() {
  const [texto, setTexto] = useState("Comprar ahora");
  const [color, setColor] = useState("#0070f3");
  const [redondeo, setRedondeo] = useState(10);
  const [tamano, setTamano] = useState("16");
  const [relleno, setRelleno] = useState(true);
  const [clics, setClics] = useState(0);

  // Objeto de estilos que se aplica al botón de la vista previa
  const estilo = {
    background: relleno ? color : "transparent",
    color: relleno ? "#ffffff" : color,
    border: `2px solid ${color}`,
    borderRadius: redondeo,
    fontSize: Number(tamano),
    padding: "0.7em 1.4em",
    fontWeight: 600,
    cursor: "pointer",
  };

  // El código se arma como texto a partir del mismo estado
  const codigo = `export default function MiBoton() {
  return (
    <button
      style={{
        background: "${estilo.background}",
        color: "${estilo.color}",
        border: "${estilo.border}",
        borderRadius: ${redondeo},
        fontSize: ${tamano},
        padding: "0.7em 1.4em",
      }}
      onClick={() => alert("¡Hola desde Next.js!")}
    >
      ${texto}
    </button>
  );
}`;

  return (
    <div className="demo">
      <div className="demo-vista">
        <label className="campo">
          Texto del botón
          <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
        </label>
        <div className="fila" style={{ gap: 20 }}>
          <label className="campo">
            Color
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          </label>
          <label className="campo">
            Tamaño
            <select value={tamano} onChange={(e) => setTamano(e.target.value)}>
              <option value="14">Pequeño</option>
              <option value="16">Mediano</option>
              <option value="20">Grande</option>
            </select>
          </label>
          <label className="campo" style={{ flexDirection: "row", alignItems: "center" }}>
            <input type="checkbox" checked={relleno} onChange={(e) => setRelleno(e.target.checked)} />
            Relleno
          </label>
        </div>
        <label className="campo">
          Redondeo de esquinas: {redondeo}px
          <input type="range" min={0} max={30} value={redondeo} onChange={(e) => setRedondeo(Number(e.target.value))} />
        </label>

        <p style={{ margin: "6px 0 0", fontSize: 14 }}>Vista previa (haz clic):</p>
        <div className="vista-boton">
          <button style={estilo} onClick={() => setClics(clics + 1)}>
            {texto || "Botón"}
          </button>
        </div>
        <p style={{ margin: "10px 0 0", fontSize: 14 }} aria-live="polite">
          Clics en la vista previa: <strong>{clics}</strong>
        </p>
      </div>

      {/* El mismo BloqueCodigo del tutorial, pero con código que cambia en vivo */}
      <BloqueCodigo etiqueta="MiBoton.tsx (generado en vivo)" codigo={codigo} />
    </div>
  );
}
