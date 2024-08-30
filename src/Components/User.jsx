import React from "react";

const User = ({ paciente, onAceptar, onRechazar }) => {
  return (
    <tr>
      <td>{paciente.nombre}</td>
      <td>{paciente.apellido}</td>
      <td>{paciente.email}</td>
      <td>{paciente.dni}</td>
      <td>{paciente.tel}</td>
      <td>{paciente.consulta}</td>
      <td>{paciente.turno}</td>
      {onAceptar && onRechazar && (
        <td>
          <button
            onClick={() => onRechazar(paciente.id)}
            className="btn btn-danger btn-sm"
          >
            Rechazar
          </button>
          <button
            onClick={() => onAceptar(paciente.id)}
            className="btn btn-success btn-sm"
          >
            Aceptar
          </button>
        </td>
      )}
    </tr>
  );
};

export default User;
