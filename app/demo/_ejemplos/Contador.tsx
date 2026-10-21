"use client"; // Necesario: este componente responde a clics del usuario

import { useState } from "react";

// Ejemplo 1: un contador con botones.
// Muestra cómo React guarda un valor (estado) y vuelve a dibujar la pantalla cuando cambia.
export default function Contador() {
  // useState(0) crea la variable "cuenta" con valor inicial 0
  // y la función "setCuenta" para cambiarla.
  const [cuenta, setCuenta] = useState(0);

  const MAXIMO = 10;
  const llegoAlMaximo = cuenta >= MAXIMO;

  return (
    <div>
      {/* aria-live hace que el lector de pantalla anuncie el nuevo número */}
      <p className="numero-grande" aria-live="polite">
        {cuenta}
      </p>

      <div className="fila">
        {/* Math.max evita que el contador baje de 0 */}
        <button className="btn-demo" onClick={() => setCuenta(Math.max(0, cuenta - 1))}>
          − Restar
        </button>
        <button className="btn-demo lleno" onClick={() => setCuenta(cuenta + 1)} disabled={llegoAlMaximo}>
          + Sumar
        </button>
        <button className="btn-demo" onClick={() => setCuenta(0)}>
          Reiniciar
        </button>
      </div>

      {/* Renderizado condicional: este texto solo aparece al llegar al máximo */}
      {llegoAlMaximo && <p style={{ marginTop: 14 }}>¡Llegaste al máximo de {MAXIMO}!</p>}
    </div>
  );
}
