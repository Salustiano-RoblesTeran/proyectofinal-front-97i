import React from "react";
const Usuario = ({ usuario, onAceptar, onRechazar }) => {
  return (
    <tr>
      <td>{usuario.nombre}</td>
      <td>{usuario.apellido}</td>
      <td>{usuario.email}</td>
      <td>{usuario.dni}</td>
      <td>{usuario.tel}</td>
      {onAceptar && onRechazar && (
        <td>
          <button
            onClick={() => onRechazar(usuario.id)}
            className="btn btn-danger btn-sm"
          >
            Rechazar
          </button>
          <button
            onClick={() => onAceptar(usuario.id)}
            className="btn btn-success btn-sm"
          >
            Aceptar
          </button>
        </td>
      )}
    </tr>
  );
};

export default Usuario;
