import React from "react";

const TablaMedico = ({ medicos, abrirModal }) => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr className="text-center">
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Especialidad</th>
          <th>Edad</th>
          <th>Localidad</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {medicos.map((medico, index) => (
          <tr key={index} className="text-center">
            <td>{medico.nombre}</td>
            <td>{medico.apellido}</td>
            <td>{medico.especialidad}</td>
            <td>{medico.edad} Años</td>
            <td>{medico.localidad}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => abrirModal(medico)}
              >
                Reservar Turno
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const getMedicoAppointments = async (req, res) => {
  try {
    const medicoId = req.params.id;
    const appointments = await AppointmentModel.find({ medico: medicoId })
      .populate("user", "name last_name")
      .populate("tipoEstudio", "name")
      .select("name tipoEstudio");

    if (!appointments) {
      return res.status(404).json({ msg: "Appointments not found" });
    }

    res.status(200).json({ msg: "Medico's appointments", appointments });
  } catch (error) {
    res.status(500).json({ msg: "Error: Server", error });
  }
};

export default TablaMedico;
