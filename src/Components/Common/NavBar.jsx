import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import IniciarSesion from '../Home/IniciarSesion';
import Registrarse from '../Home/Registrarse'; 

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const navigate = useNavigate(); 

  const guardarUsuario = (datos) => {
    setUser(datos);  
    setIsAuthenticated(true); 
  };

  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/"); 
  };

  const handleLogin = () => setShowLoginModal(true);
  const handleRegister = () => setShowRegisterModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ProSalud</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Inicio</NavLink>
              </li>

              {isAuthenticated && (
                <>
                  {user?.role === "admin" && (
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/admin">Panel Admin</NavLink>
                    </li>
                  )}
                  {user?.role === "usuario" && (
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/perfil">Perfil</NavLink>
                    </li>
                  )}
                  {user?.role === "medico" && (
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/medico">Panel de Medico</NavLink>
                    </li>
                  )}
                </>
              )}

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Sobre Nosotros</NavLink>
              </li>
            </ul>

            <div className="d-flex">
              {isAuthenticated ? (
                <button className="btn btn-outline-danger" onClick={cerrarSesion}>
                  Cerrar sesión
                </button>
              ) : (
                <>
                  <button className="btn btn-outline-primary me-2" onClick={handleLogin}>
                    Iniciar sesión
                  </button>
                  <button className="btn btn-outline-secondary" onClick={handleRegister}>
                    Registrarse
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      <IniciarSesion show={showLoginModal} handleClose={handleCloseLoginModal} guardarUsuario={guardarUsuario} />
      <Registrarse show={showRegisterModal} handleClose={handleCloseRegisterModal} />
    </>
  );
};

export default NavBar;
