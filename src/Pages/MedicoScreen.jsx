import React, { useState, useEffect } from 'react';
import TablaPacientes from '../Components/PanelMedicos/TablaPacientes';

const MedicoScreen = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pacientesAceptados, setPacientesAceptados] = useState([]);
  const [pacientesRechazados, setPacientesRechazados] = useState([]);

  // Obtener citas pendientes del backend
  useEffect(() => {
    const fetchPacientesPendientes = async () => {
      try {
        const response = await fetch('https://comision97i-backfinal.vercel.app/api/getAllAppointments');
        const data = await response.json();
        console.log(data)
        setPacientes(data.appointments); 
      } catch (error) {
        console.error('Error fetching pacientes pendientes:', error);
      }
    };
    fetchPacientesPendientes();
  }, []);

  // Función para aceptar el turno de un paciente
  const aceptarPaciente = async (id) => {
    try {
      const response = await fetch(`https://comision97i-backfinal.vercel.app/api/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: 'aceptado' })
      });

      const updatedAppointment = await response.json();
      setPacientes(pacientes.filter(paciente => paciente._id !== id));
      setPacientesAceptados([...pacientesAceptados, pacientes.find(paciente => paciente._id === id)]);

    } catch (error) {
      console.error('Error accepting appointment:', error);
    }
  };

  // Función para rechazar el turno de un paciente
  const rechazarPaciente = async (id) => {
    try {
      const response = await fetch(`https://comision97i-backfinal.vercel.app/api/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: 'rechazado' })
      });

      const updatedAppointment = await response.json();
      setPacientes(pacientes.filter(paciente => paciente._id !== id));
      setPacientesRechazados([...pacientesRechazados, pacientes.find(paciente => paciente._id === id)]);

    } catch (error) {
      console.error('Error rejecting appointment:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Gestión de Pacientes</h1>
      <h2>Pacientes Pendientes</h2>
      <TablaPacientes pacientes={pacientes} onAceptar={aceptarPaciente} onRechazar={rechazarPaciente} />
      <h2>Pacientes Aceptados</h2>
      <TablaPacientes pacientes={pacientesAceptados}  />
      <h2>Pacientes Rechazados</h2>
      <TablaPacientes pacientes={pacientesRechazados} />
    </div>
  );
}

export default MedicoScreen;
