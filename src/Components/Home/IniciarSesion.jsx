import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IniciarSesion = ({ show, handleClose,guardarUsuario }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formValues;
  const [errorMessage, setErrorMessage] = useState('');

  if (!show) return null;

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    console.log("Intentando iniciar sesión con:", formValues);

    try {
      const result = await authLogin(formValues);
      if (!result || !result.token) {
        setErrorMessage(result?.msg || 'Credenciales incorrectas');
        return;
      }

      guardarUsuario(result.user);  // Guarda la info del usuario en estado global o contexto
      
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));


      // Redirige según el rol del usuario
      if (result.user.role === 'admin') navigate('/admin');
      else if (result.user.role === 'usuario') navigate('/user');
      else if (result.user.role === 'medico') navigate('/medico');
      else setErrorMessage('No tienes permiso para acceder a esta sección');

      window.location.reload();

  
      handleClose();  // Cerrar modal si el login es exitoso
    } catch (error) {
      setErrorMessage('Error al iniciar sesión');
    }
    
  };

  return (
    <div
      className="modal fade show d-block"
      id="staticBackdropLogin"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
    >
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
                  value={formValues.email}
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
                  value={formValues.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
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
