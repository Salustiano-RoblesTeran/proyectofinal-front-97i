import React, { useState } from 'react';
import { authRegistro } from '../../helpers/ApiRegistro';

const Registrarse = ({ show, handleClose }) => {
  if (!show) return null;

  // Estado para todos los campos
  const [formValues, setFormValues] = useState({
    name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { name, last_name, phone_number, email, password, confirm_password } = formValues;
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
  
    // Mostrar datos en consola
    console.log("Datos enviados al backend:", {
      email, password, name, last_name, phone_number
    });
  
    // Enviar los datos al backend usando el helper `authRegistro`
    const result = await authRegistro({
      email, password, name, last_name, phone_number
    });
  
    if (result.msg === "No se conectó con backend") {
      setErrorMessage("No se pudo conectar con el servidor");
    } else {
      // Manejar la respuesta exitosa
      console.log("Registro exitoso:", result);
      handleClose();
    }
  };
  

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
    
  //   // Validar que las contraseñas coincidan
  //   if (password !== confirm_password) {
  //     setErrorMessage("Las contraseñas no coinciden");
  //     return;
  //   }

  //   // Enviar los datos al backend usando el helper `authRegistro`
  //   const result = await authRegistro({
  //     email, password, name, last_name, phone_number
  //   });

  //   if (result.msg === "No se conectó con backend") {
  //     setErrorMessage("No se pudo conectar con el servidor");
  //   } else {
  //     // Manejar la respuesta exitosa
  //     console.log("Registro exitoso:", result);
  //     // Aquí puedes redirigir o cerrar el modal, por ejemplo:
  //     handleClose();
  //   }
  // };

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
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Ingrese su nombre"
                    pattern='^[a-zA-Z]+$'
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6 my-2 mx-auto">
                  <label htmlFor="last_name" className="form-label">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    pattern='^[a-zA-Z]+$'
                    placeholder="Ingrese su Apellido"
                    value={last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="phone_number" className="form-label">Teléfono</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone_number"
                  placeholder="Ingrese su teléfono"
                  value={phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <div id="emailHelp" className="form-text">
                  name.last_name@ejemplo.com
                </div>
              </div>
              <div className="col my-2 mx-auto">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  aria-describedby="contraseñaHelp"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <div id="contraseñaHelp" className="form-text">
                  Tu contraseña debe contener al menos 8 caracteres, al menos un número y una letra mayúscula y minúscula.
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
                <div id="confirm_passwordHelp" className="form-text">Vuelva a ingresar la contraseña</div>
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
