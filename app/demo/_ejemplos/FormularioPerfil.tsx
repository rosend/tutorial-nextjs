"use client"; // Componente interactivo: lee lo que el usuario escribe

import { useState } from "react";

// Ejemplo 2: formulario con vista previa en tiempo real.
// Cada vez que escribes, el estado cambia y la tarjeta de abajo se actualiza al instante.
export default function FormularioPerfil() {
  const [nombre, setNombre] = useState("Ana");
  const [carrera, setCarrera] = useState("Ingeniería en Sistemas");
  const [color, setColor] = useState("#0070f3");

  // Valor calculado: la inicial del nombre para el avatar
  const inicial = nombre.trim().charAt(0).toUpperCase() || "?";

  return (
    <div>
      {/* Cada <label> envuelve su campo: así el lector de pantalla sabe qué se pide */}
      <label className="campo">
        Nombre
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label className="campo">
        Carrera
        <input type="text" value={carrera} onChange={(e) => setCarrera(e.target.value)} />
      </label>
      <label className="campo">
        Color del avatar
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>

      {/* Vista previa: usa los mismos valores del estado */}
      <div className="tarjeta-perfil" aria-live="polite">
        <div className="avatar" style={{ background: color }} aria-hidden="true">
          {inicial}
        </div>
        <strong>{nombre || "Sin nombre"}</strong>
        <p style={{ margin: 0 }}>{carrera || "Sin carrera"}</p>
      </div>
    </div>
  );
}
