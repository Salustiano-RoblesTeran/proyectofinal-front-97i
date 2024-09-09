import React, { useState } from 'react';
import TablaUsuarios from '../Components/Admin/TablaUsuarios';
import { Paginacion } from '../Components/Admin/Paginacion';
import { Container } from 'react-bootstrap';


const PageAdmin = () => {
  const initialUsers = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'user' },
    { id: 2, name: 'María López', email: 'maria@example.com', role: 'medico' },
    // Agrega más usuarios según sea necesario
  ];

  const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);


  const handleRoleChange = (id, role) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, role } : user
    );
    setUsers(updatedUsers);
  };
  
    // Obtener usuarios actuales para la página
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
     <Container>
      <h1 className="my-4">Administración de Usuarios</h1>
      <TablaUsuarios users={currentUsers} onRoleChange={handleRoleChange} />
      <Paginacion
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </Container>
  )
}


export default PageAdmin