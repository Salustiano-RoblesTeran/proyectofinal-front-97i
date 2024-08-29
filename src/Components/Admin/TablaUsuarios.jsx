import React from 'react'
import { Table, Button } from 'react-bootstrap';

const TablaUsuarios = ({users, onRoleChange}) => {
  return (
    <>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <Button
                variant="primary"
                onClick={() => onRoleChange(user.id, 'user')}
                disabled={user.role === 'user'}
                className="me-2"
              >
                Asignar Usuario
              </Button>
              <Button
                variant="secondary"
                onClick={() => onRoleChange(user.id, 'medico')}
                disabled={user.role === 'medico'}
              >
                Asignar Médico
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default TablaUsuarios