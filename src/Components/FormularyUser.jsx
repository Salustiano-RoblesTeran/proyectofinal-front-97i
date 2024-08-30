import React, { useState } from "react";

const FormularioAgregar = ({ onAgregar }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    tel: "",
    consulta: "",
    turno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPaciente = {
      ...formData,
      id: new Date().getTime(),
    };
    onAgregar(nuevoPaciente);
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      dni: "",
      tel: "",
      consulta: "",
      turno: "",
    });
  };

  return (
    <div className="d-flex justify-content-center mt-4" widht="100%">
      <form className="p-4 rounded bg-dark" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Nombre1" className="form-label text-light">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="Nombre1"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Apellido1" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="Apellido1"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dni" className="form-label">
            DNI
          </label>
          <input
            type="text"
            className="form-control"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Telefono" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="Telefono"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="consulta" className="form-label">
            Consulta
          </label>
          <input
            type="text"
            className="form-control"
            id="consulta"
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Turnos" className="form-label">
            Turno
          </label>
          <input
            type="text"
            className="form-control"
            id="Turnos"
            name="turno"
            value={formData.turno}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Agregar Paciente
        </button>
      </form>
    </div>
  );
};

export default FormularioAgregar;
