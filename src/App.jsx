import React, { useState } from "react";
import FormularyUser from "../src/Components/FormularyUser";
import TablaUser from "../src/Components/TablaUser";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pacientesAceptados, setPacientesAceptados] = useState([]);
  const [pacientesRechazados, setPacientesRechazados] = useState([]);

  const agregarPaciente = (nuevoPaciente) => {
    setPacientes([...pacientes, nuevoPaciente]);
  };

  const aceptarPaciente = (id) => {
    const pacienteAceptado = pacientes.find((paciente) => paciente.id === id);
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
    setPacientesAceptados([...pacientesAceptados, pacienteAceptado]);
  };

  const rechazarPaciente = (id) => {
    const pacienteRechazado = pacientes.find((paciente) => paciente.id === id);
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
    setPacientesRechazados([...pacientesRechazados, pacienteRechazado]);
  };

  return (
    <div className="container">
      <h1 className="text-left my-4 ">Gestión de Usuarios</h1>
      <FormularyUser onAgregar={agregarPaciente} />
      <h2>Pacientes Pendientes</h2>
      <TablaUser
        pacientes={pacientes}
        onAceptar={aceptarPaciente}
        onRechazar={rechazarPaciente}
      />
      <h2>Pacientes Aceptados</h2>
      <TablaUser pacientes={pacientesAceptados} />
      <h2>Pacientes Rechazados</h2>
      <TablaUser pacientes={pacientesRechazados} />
    </div>
  );
};

export default App;
