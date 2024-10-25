// En `TablaUsuarios.js`
const TablaUsuarios = ({ users, onRoleChange }) => {
  console.log("Received users in TablaUsuarios:", users);  // Confirmar datos recibidos

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
        {users.length > 0 ? (
          users.map(user => (
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
          ))
        ) : (
          <tr>
            <td colSpan="4">No se encontraron usuarios.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TablaUsuarios;
