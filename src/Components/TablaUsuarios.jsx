import React from "react";
import Usuarios from "../Components/Usuarios";
const TablaUsuarios = ({ usuarios, onAceptar, onRechazar }) => {
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
            {onAceptar && onRechazar && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <Usuarios
              key={usuario.id}
              usuario={usuario}
              onAceptar={onAceptar}
              onRechazar={onRechazar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;
