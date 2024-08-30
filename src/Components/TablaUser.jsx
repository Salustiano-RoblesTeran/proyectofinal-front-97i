import React from "react";
import User from "../Components/User";

const TablaUser = ({ pacientes, onAceptar, onRechazar }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>DNI</th>
            <th>Teléfono</th>
            <th>Consulta</th>
            <th>Turno</th>
            {onAceptar && onRechazar && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <User
              key={paciente.id}
              paciente={paciente}
              onAceptar={onAceptar}
              onRechazar={onRechazar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUser;
