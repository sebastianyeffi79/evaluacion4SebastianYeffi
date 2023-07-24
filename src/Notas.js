import React from "react";
import "./style.css"

function Notas(props) {
  const { titulo, nota, importante } = props;

  const notasImportantes = `notas${importante ? " notas-importantes" : ""}`; // Agregar clase si es importante

  return (
    <li className={notasImportantes}>
      <h2>{titulo}</h2>
      <p>{nota}</p>
    </li>
  );
}

export default Notas;