import React from 'react';
import CardSlider from '../Components/Home/CardSlider';

const UserScreen = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
      <h1 className="text-center my-4">Nuestros Médicos</h1>
        <CardSlider/>
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h2>¡Bienvenido, Usuario!</h2>
            </div>
            <div className="card-body">
              <p className="lead text-center">
                Nos alegra verte de nuevo. Disfruta de todas las funciones y beneficios de nuestra plataforma.
              </p>
              <div className="text-center mt-4">
                <button className="btn btn-outline-primary mx-2">Explorar Consultas</button>
                <button className="btn btn-outline-secondary mx-2">Ver Perfil</button>
              </div>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Pagina actualmente en desarrollo, disculpe las molestias.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserScreen;
