import React, { useState } from "react";

const FormularioAgregar = ({ onAgregar }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    tel: "",
    Fecha: "",
    Horario: "",
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
    const nuevoUsuario = {
      ...formData,
      id: new Date().getTime(),
    };
    onAgregar(nuevoUsuario);
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      dni: "",
      tel: "",
      Fecha: "",
      Horario: "",
    });
    alert("Turno realizado con exito");
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(nuevoUsuario),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="tabla-formulario">
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Nombre1" className="componentes-tabla">
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
          <label htmlFor="Apellido1" className="componentes-tabla">
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
          <label htmlFor="email" className="componentes-tabla ">
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
          <label htmlFor="dni" className="componentes-tabla ">
            DNI
          </label>
          <input
            type="dni"
            className="form-control"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Telefono" className="componentes-tabla ">
            Teléfono
          </label>
          <input
            type="Telefono"
            className="form-control"
            id="Telefono"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Fecha del turno" className="componentes-tabla ">
            Fecha del turno
          </label>
          <input
            type="Fecha del turno"
            className="form-control"
            id="Fecha"
            name="Fecha"
            value={formData.Fecha}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Horario del turno" className="componentes-tabla ">
            Horario del turno
          </label>
          <input
            type="Horario del turno"
            className="form-control"
            id="Horario"
            name="Horario"
            value={formData.Horario}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 ">
          Reservar turno
        </button>
      </form>
    </div>
  );
};

export default FormularioAgregar;
