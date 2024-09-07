import React, { useState } from 'react';


const IniciarSesion = ({ show, handleClose, iniciarSesion, guardarUsuario }) => {
  // const navigate = useNavigate(); // defino función para redireccionar
  
  if (!show) return null;

  // Estado para todos los campos
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formValues;

  const handleChange = (event) => {

      setFormValues({
        // ... es el spreads operator
          ...formValues, [event.target.name]: event.target.value
      });

    };


    const handleSubmit = (event) => {
      event.preventDefault();

      console.log(formValues);
      // navigate("/");

      //! AQUI HACEMOS LA PETICION AL BACK
    }

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
                <label htmlFor="login_username" className="form-label">Ingrese su mail</label>
                <input
                  type="email"
                  className="form-control"
                  name='email'
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
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
