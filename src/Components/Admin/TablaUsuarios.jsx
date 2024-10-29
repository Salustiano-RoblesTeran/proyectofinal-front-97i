import React from 'react';
const TablaUsuarios = ({ users, onRoleChange }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => onRoleChange(user._id, user.role === 'usuario' ? 'medico' : 'usuario')}
                  >
                    Cambiar a {user.role === 'usuario' ? 'medico' : 'usuario'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No se encontraron usuarios.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;
