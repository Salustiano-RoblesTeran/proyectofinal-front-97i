import React, { useState } from 'react';
import IniciarSesion from '../Home/IniciarSesion'; // Importa correctamente el componente IniciarSesion
import Registrarse from '../Home/Registrarse'; // Importa correctamente el componente Registrarse

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleRegister = () => {
    setShowRegisterModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ProSalud</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Perfil</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Turnos
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Pendientes</a></li>
                      <li><a className="dropdown-item" href="#">Aprobados</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Rechazados</a></li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
            <div className="d-flex">
              {isAuthenticated ? (
                <button className="btn btn-outline-danger" onClick={handleLogout}>Cerrar sesión</button>
              ) : (
                <>
                  <button className="btn btn-outline-primary me-2" onClick={handleLogin}>Iniciar sesión</button>
                  <button className="btn btn-outline-secondary" onClick={handleRegister}>Registrarse</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <IniciarSesion show={showLoginModal} handleClose={handleCloseLoginModal} />
      <Registrarse show={showRegisterModal} handleClose={handleCloseRegisterModal} />
    </>
  );
};

export default NavBar;
