import React from "react";
import Usuario from "../Components/Usuarios";

const TablaUsuarios = ({ usuario, onAceptar, onRechazar }) => {
  return (
    <div className="table-responsive ">
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
        {/*   <tbody>
          {usuario.map((usuario) => (
            <Usuario
              key={usuario.id}
              usuario={usuario}
              onAceptar={onAceptar}
              onRechazar={onRechazar}
            />
          ))}
        </tbody> */}
      </table>
    </div>
  );
};
export default TablaUsuarios;
