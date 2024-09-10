import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalTurno = ({ medico, cerrarModal }) => {
  const [dni, setDni] = useState("");
  const [consulta, setConsulta] = useState("");
  const [turno, setTurno] = useState("");

  const guardarTurno = (event) => {
    event.preventDefault();

    const nuevoTurno = {
      dni,
      consulta,
      turno,
      medico: `${medico.nombre} ${medico.apellido}`,
      especialidad: medico.especialidad,
    };

    console.log("Turno guardado:", nuevoTurno);
    alert("Turno guardado exitosamente");
    cerrarModal(); // Cerrar el modal tras guardar
  };

  return (
    <Modal show={!!medico} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sacar turno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Usted está sacando turno con el médico {medico?.nombre}{" "}
          {medico?.apellido} en la especialidad {medico?.especialidad}.
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
