import React from 'react';

const IniciarSesion = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" id="staticBackdropLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Iniciar Sesión</h1>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="formularioLogin">
              <div className="mb-3">
                <label htmlFor="login_username" className="form-label">Ingrese su mail</label>
                <input
                  type="text"
                  className="form-control"
                  id="login_username"
                  placeholder="Ingrese su mail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="login_password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="login_password"
                  placeholder="Ingrese contraseña"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
