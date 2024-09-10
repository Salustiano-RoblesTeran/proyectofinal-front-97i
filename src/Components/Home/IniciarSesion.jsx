import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../helpers/ApiLogin'; // Asumo que tienes este helper para la autenticación

const IniciarSesion = ({ show, handleClose, guardarUsuario }) => {
  const navigate = useNavigate();

  // Definir estados
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValues;
  const [errorMessage, setErrorMessage] = useState("");

  if (!show) return null;

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Enviar los datos al backend usando el helper `authLogin`
    try {
      const result = await authLogin({ email, password });

      if (!result || !result.token) {
        // Si no obtenemos un token, algo salió mal
        setErrorMessage(result?.msg || "Credenciales incorrectas");
        return;
      }

      // Guardar el token y la información del usuario en el localStorage
      localStorage.setItem("token", result.token); // Guardar solo el token
      localStorage.setItem("user", JSON.stringify(result.user)); // Guardar los datos del usuario

      // Guardar los datos del usuario en el estado global si es necesario
      guardarUsuario(result.user);

      // Redirigir según el rol del usuario
      if (result.user.role === "usuario") {
        navigate("/user");
      } else if (result.user.role === "admin") {
        navigate("/admin");
      }

      handleClose(); // Cerrar el modal después del login exitoso
    } catch (error) {
      console.error("Error en el login:", error);
      setErrorMessage("Error al iniciar sesión");
    }
  };

  return (
    <div className="modal fade show d-block" id="staticBackdropLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Iniciar Sesión</h1>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="formularioLogin" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="login_email" className="form-label">Ingrese su mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingrese su mail"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="login_password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Ingrese contraseña"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </form>
          </div>
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
