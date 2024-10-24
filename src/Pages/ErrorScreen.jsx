import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ErrorScreen = () => {
  const navigate = useNavigate();


  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Página No Encontrada</h2>
      <p className="mb-4">Lo sentimos, la página que estás buscando no existe o ha ocurrido un error.</p>
      <Button variant="primary" onClick={handleBackHome}>
        Volver a Inicio
      </Button>
    </Container>
  );
};

export default ErrorScreen;
