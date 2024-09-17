import React from 'react';

const TablaUsuarios = ({ users, onRoleChange }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => onRoleChange(user._id, user.role === 'usuario' ? 'medico' : 'usuario')}
              >
                Cambiar a {user.role === 'usuario' ? 'medico' : 'usuario'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaUsuarios;
