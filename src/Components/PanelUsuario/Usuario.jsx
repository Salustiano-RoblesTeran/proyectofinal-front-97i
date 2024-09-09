import React from "react";

const Usuario = ({ usuario, onAceptar, onRechazar, onSolicitar }) => {
  console.log(usuario); // Verifica que el objeto usuario contenga todas las propiedades necesarias

  return (
    <tr>
      <td>{usuario.nombre}</td>
      <td>{usuario.apellido}</td>
      <td>{usuario.email}</td>
      <td>{usuario.dni}</td>
      <td>{usuario.tel}</td>
      <td>{usuario.Fecha}</td>
      <td>{usuario.Horario}</td>
      {onAceptar && onRechazar && onSolicitar && (
        <td>
          <button
            onClick={() => onRechazar(usuario.id)}
            className="btn btn-danger btn-sm"
          >
            Rechazar
          </button>
          <button
            onClick={() => onSolicitar(usuario.id)}
            className="btn btn-primary btn-sm"
          >
            Solicitar
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
