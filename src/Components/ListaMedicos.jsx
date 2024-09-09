import React from "react";
/* ayuda rolling */

const ListaMedicos = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Médicos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Especialidad</th>
            <th>Localidad</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico, index) => (
            <tr key={index}>
              <td>{medico.nombre}</td>
              <td>{medico.apellido}</td>
              <td>{medico.especialidad}</td>
              <td>{medico.localidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaMedicos;
