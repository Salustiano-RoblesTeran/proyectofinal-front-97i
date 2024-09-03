import React from "react";
import Usuario from "./Usuarios";
const TablaUsuarios = ({ usuarios, onAceptar, onRechazar }) => {
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
        <tbody>
          <tbody>
            {Array.isArray(usuarios) && usuarios.length > 0 ? (
              usuarios.map((usuario) => (
                <Usuario
                  key={usuario.id}
                  usuario={usuario}
                  onAceptar={onAceptar}
                  onRechazar={onRechazar}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={onAceptar && onRechazar ? 6 : 5}
                  className="text-center"
                >
                  No hay usuarios disponibles...
                </td>
              </tr>
            )}
          </tbody>
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;
