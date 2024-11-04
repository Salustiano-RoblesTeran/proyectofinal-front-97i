import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalTurno = ({ medico, cerrarModal }) => {
  const [dni, setDni] = useState("");
  const [consulta, setConsulta] = useState("");
  const [turno, setTurno] = useState("");

  const guardarTurno = async () => {
    const formData = {
      user: selectedUser,                // Asegúrate de que `selectedUser` tiene el valor correcto
      tipoEstudio: selectedTipoEstudio,  // Asegúrate de que `selectedTipoEstudio` tiene el valor correcto
      medico: selectedMedico,            // Asegúrate de que `selectedMedico` tiene el valor correcto
      message: message,                  // Asegúrate de que `message` tiene el valor correcto
      fecha: fecha.toISOString(),        // Convierte `fecha` a formato ISO
    };
    console.log("Datos del formulario:", formData); // Verifica que los datos están completos y correctos
  
    try {
      const response = await fetch("http://localhost:3000/api/createAppointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Error en la creación de la cita");
      }
  
      const result = await response.json();
      console.log("Cita creada exitosamente:", result);
    } catch (error) {
      console.error("Error al guardar el turno:", error);
    }
  };
  

  return (
    <Modal show={!!medico} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sacar turno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Usted está sacando turno con el médico {medico?.nombre} {medico?.apellido} en la especialidad {medico?.especialidad}.
        </p>
        <form onSubmit={guardarTurno}>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label">
              DNI:
            </label>
            <input
              type="number"
              className="form-control"
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="consulta" className="form-label">
              Consulta:
            </label>
            <input
              type="text"
              className="form-control"
              id="consulta"
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="turno" className="form-label">
              Fecha del Turno:
            </label>
            <input
              type="date"
              className="form-control"
              id="turno"
              value={turno}
              onChange={(e) => setTurno(e.target.value)}
              required
            />
          </div>
          <Button variant="primary" type="submit">
            Guardar Turno
          </Button>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={cerrarModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTurno;
