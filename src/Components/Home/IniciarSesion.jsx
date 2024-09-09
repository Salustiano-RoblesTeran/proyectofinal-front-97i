import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Aseguramos que el hook esté al principio
import { authLogin } from '../../helpers/ApiLogin';

const IniciarSesion = ({ show, handleClose, guardarUsuario }) => {
  const navigate = useNavigate(); // El hook siempre se ejecuta

  // Definir estados
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  // Condición para ocultar el componente si no se debe mostrar
  if (!show) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Obtener datos ingresados
    const datos = {
      correo: inputCorreo,
      password: inputPassword,
    };

    // Hacer petición a la API
    const resp = await authLogin(datos);
    console.log(resp);

    if (resp?.success) {
      // Guardar token
      localStorage.setItem("token", JSON.stringify(resp.token));
      guardarUsuario(resp.usuario);
      navigate("/"); // Redirige al home o cualquier otra ruta tras login
    } else {
      // Si las credenciales son incorrectas, muestra el mensaje de error
      setResultado({ msg: resp.msg || "Credenciales incorrectas" });
    }

    setLoading(false);
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
            <form id="formularioLogin" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="login_username" className="form-label">Ingrese su mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingrese su mail"
                  value={inputCorreo}
                  onChange={(e) => setInputCorreo(e.target.value)}
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
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Cargando..." : "Iniciar Sesión"}
              </button>
            </form>
            {resultado?.msg && (
              <div className="alert alert-danger mt-3">{resultado.msg}</div>
            )}
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
