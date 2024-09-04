import React from 'react';
import { useState } from 'react';

const Registrarse = ({ show, handleClose }) => {
  if (!show) return null;

 // Estado para todos los campos
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    ciudad: "",
    email: "",
    password: ""
});

const { nombre, apellido, edad, ciudad, email, password } = formValues;

const handleChange = (event) => {
    setFormValues({
        ...formValues, [event.target.name]: event.target.value
    });

  };



const handleSubmit = (event) => {
  event.preventDefault();
  // Guardar valores en arreglo
  console.log(formValues); //! muestro los valores ingresados, nos servira para usarlos en la ApiLogin conectado con el back

  }

  return (
    <div className="modal fade show d-block" id="staticBackdropRegistar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Registrarse</h1>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="formularioRegistro" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-12 col-md-6 my-2 mx-auto">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Ingrese su nombre"
                    value={formValues.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6 my-2 mx-auto">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellido"
                    placeholder="Ingrese su apellido"
                    value={formValues.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input
                  type="text"
                  className="form-control"
                  name="edad"
                  pattern="[0-9]{2}"
                  placeholder="Ingrese su edad"
                  value={formValues.edad}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="departamento" className="form-label">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  name="ciudad"
                  placeholder="Ingrese su ciudad"
                  value={formValues.ciudad}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su email"
                  value={formValues.email}
                  onChange={handleChange}
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
                  name="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  aria-describedby="contraseñaHelp"
                  placeholder="Ingrese su contraseña"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                />
                <div id="contraseñaHelp" className="form-text">
                Tu contraseña debe contener al menos 8 caracteres, al menos un número y una letra mayúscula y minúscula
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
                <div id="contraseñaHelp" className="form-text">Vuelva a ingresar la contraseña</div>
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
