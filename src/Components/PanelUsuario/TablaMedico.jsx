import React from "react";

const TablaMedico = ({ medicos, abrirModal }) => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr className="text-center">
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Especialidad</th>
          <th>Edad</th>
          <th>Acción</th>
          
        </tr>
      </thead>
      <tbody>
        {medicos.map((medico, index) => (
          <tr key={index} className="text-center">
            <td>{medico.name}</td>
            <td>{medico.last_name}</td>
            <td>{medico.tipoEstudio ? medico.tipoEstudio : '-'}</td>
            <td>{medico.edad ? medico.edad : '-'} Años</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => abrirModal(medico)}
              >
                Reservar Turno
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaMedico;
