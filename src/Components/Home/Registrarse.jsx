import React, { useState } from 'react';
import { authRegistro } from '../../helpers/ApiRegistro';

const Registrarse = ({ show, handleClose }) => {
  if (!show) return null;

  // Estado para todos los campos
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    ciudad: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { nombre, apellido, edad, ciudad, email, password, confirm_password } = formValues;

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFormValues({
      ...formValues, 
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validar que las contraseñas coincidan
    if (password !== confirm_password) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    // Enviar los datos al backend usando el helper `authRegistro`
    const result = await authRegistro({
      nombre,
      apellido,
      edad,
      ciudad,
      email,
      password,
    });

    if (result.msg === "No se conectó con backend") {
      setErrorMessage("No se pudo conectar con el servidor");
    } else {
      // Manejar la respuesta exitosa
      console.log("Registro exitoso:", result);
      // Aquí puedes redirigir o cerrar el modal, por ejemplo:
      handleClose();
    }
  };

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
                    value={nombre}
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
                    value={apellido}
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
                  value={edad}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  name="ciudad"
                  placeholder="Ingrese su ciudad"
                  value={ciudad}
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
                  value={email}
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
                  value={password}
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
                  name="confirm_password"
                  placeholder="Confirmar contraseña"
                  value={confirm_password}
                  onChange={handleChange}
                  required
                />
                <div id="contraseñaHelp" className="form-text">Vuelva a ingresar la contraseña</div>
              </div>

              {/* Mostrar mensaje de error si hay uno */}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

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
