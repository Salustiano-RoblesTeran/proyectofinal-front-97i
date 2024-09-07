import React from "react";
import Usuario from "./Usuario";
import "../App.css";
import "../Components/ListaMedicos";

const TablaUsuarios = ({ usuario, onAceptar, onRechazar, onSolicitar }) => {
  return (
    <div className="table-responsive ">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th className="text-center">Nombre</th>
            <th className="text-center">Apellido</th>
            <th className="text-center">Email</th>
            <th className="text-center">DNI</th>
            <th className="text-center">Teléfono</th>
            <th className="text-center">Fecha del turno</th>
            <th className="text-center">Horario del turno</th>
            {onAceptar && onRechazar && onSolicitar && <th> Acciones </th>}
          </tr>
        </thead>
        <tbody>
          {usuario.map((user) => (
            <Usuario
              key={user.id}
              usuario={user}
              onAceptar={onAceptar}
              onRechazar={onRechazar}
              onSolicitar={onSolicitar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TablaUsuarios;
