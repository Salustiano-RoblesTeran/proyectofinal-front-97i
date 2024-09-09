import React, { useState } from 'react';
import TablaPacientes from '../components/PanelMedicos/TablaPacientes';

const MedicoScreen = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pacientesAceptados, setPacientesAceptados] = useState([]);
  const [pacientesRechazados, setPacientesRechazados] = useState([]);

   // Obtener citas pendientes del backend
   useEffect(() => {
    const fetchPacientesPendientes = async () => {
      try {
        const response = await fetch('/api/appointments/getAllAppointments');
        const data = await response.json();
        setPacientes(data.appointments); 
      } catch (error) {
        console.error('Error fetching pacientes pendientes:', error);
      }
    };   
    fetchPacientesPendientes();
   }, []);

  const aceptarPaciente = (id) => {
    const pacienteAceptado = pacientes.find(paciente => paciente.id === id);
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
    setPacientesAceptados([...pacientesAceptados, pacienteAceptado]);
  };

  const rechazarPaciente = (id) => {
    const pacienteRechazado = pacientes.find(paciente => paciente.id === id);
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
    setPacientesRechazados([...pacientesRechazados, pacienteRechazado]);
  };
  return (

    <div className="container">
    <h1 className="text-center my-4">Gestión de Pacientes</h1>

    <h2>Pacientes Pendientes</h2>
    <TablaPacientes pacientes={pacientes} onAceptar={aceptarPaciente} onRechazar={rechazarPaciente} />
    <h2>Pacientes Aceptados</h2>
    <TablaPacientes pacientes={pacientesAceptados} />
    <h2>Pacientes Rechazados</h2>
    <TablaPacientes pacientes={pacientesRechazados} />
  </div>
   
  )
}
export default MedicoScreen