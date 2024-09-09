import React, { useState } from 'react';
import IniciarSesion from '../Home/IniciarSesion'; // Importa correctamente el componente IniciarSesion
import Registrarse from '../Home/Registrarse'; // Importa correctamente el componente Registrarse
import { Link, NavLink } from "react-router-dom";
import RoutesApp from '../../routes/RoutesApp';

const NavBar = ({ cerrarSesion, login }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [user, setUser] = useState(null);
  //Función para guardar datos del usuario autenticado
  const guardarUsuario = (datos) => {
    setUser(datos);
  };

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


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ProSalud</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
              {login && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/perfil">Perfil</NavLink>
                  </li>)}
                {/* TENGO QUE PONER USER.ROL, QUE VIENE DEL BACKEND */}
                {/* SI INICIO SESION COMO ADMINISTRADOR (VER PARA QUE USAMOS ESTE BOTON)*/}
              {user === "ADMIN_ROLE" && (              
                <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Panel Admin
                </NavLink>
              </li>)
              }
              {/* SI INICIO SESION COMO MEDICO (ES EL REGISTRO CLINICO DE CADA PACIENTE) */}
              {user === "MEDICO_ROLE" && (                
              <NavLink className="nav-link" to="/registropancientes">
                Registro de Pacientes
              </NavLink>)
              } 
              {/* SI INICIO SESION COMO USAUARIO  (HISTORIAL DE CONSULTAS)*/}
              {
                user === "USER_ROLE" && (                
                  <NavLink className="nav-link" to="/misconsultas">
                     Mis consultas
                  </NavLink>)
              }
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/about">
                Sobre Nosotros
              </NavLink>
            </li>
            </ul>
            <div className="d-flex">
              {user !== null ? (
                <button className="btn btn-outline-danger" onClick={cerrarSesion}>Cerrar sesión</button>
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

      <IniciarSesion show={showLoginModal} handleClose={handleCloseLoginModal}  guardarUsuario ={guardarUsuario}/>
      <Registrarse show={showRegisterModal} handleClose={handleCloseRegisterModal} />
    </>
  );
};

export default NavBar;
