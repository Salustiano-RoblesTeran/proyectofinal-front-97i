import React from 'react';

const Registrarse = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" id="staticBackdropRegistar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Registrarse</h1>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="formularioRegistro">
              <div className="row">
                <div className="col-sm-12 col-md-6 my-2 mx-auto">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6 my-2 mx-auto">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Ingrese su apellido"
                    required
                  />
                </div>
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input
                  type="text"
                  className="form-control"
                  id="edad"
                  pattern="[0-9]{2}"
                  placeholder="Ingrese su edad"
                  required
                />
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="departamento" className="form-label">Departamento</label>
                <input
                  type="text"
                  className="form-control"
                  id="departamento"
                  placeholder="Ingrese su departamento"
                  required
                />
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su email"
                  required
                />
                <div id="emailHelp" className="form-text">
                  nombre.apellido@ejemplo.com
                </div>
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  aria-describedby="contraseñaHelp"
                  placeholder="Ingrese su contraseña"
                  required
                />
                <div id="contraseñaHelp" className="form-text">
                  Your password must contain at least 8 characters, at least one number and one uppercase and lowercase letter
                </div>
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="confirm_password" className="form-label">Confirmar contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm_password"
                  aria-describedby="contraseñaHelp"
                  placeholder="Confirmar contraseña"
                  required
                />
                <div id="contraseñaHelp" className="form-text">Enter the same password</div>
              </div>
              <button type="submit" className="btn btn-primary" id="button_submit">Crear cuenta</button>
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

export default Registrarse;
