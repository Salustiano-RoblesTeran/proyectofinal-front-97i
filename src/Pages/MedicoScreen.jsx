import React, { useState, useEffect } from 'react';
import TablaPacientes from '../Components/PanelMedicos/TablaPacientes';

const MedicoScreen = () => {
  const [pacientesPendientes, setPacientesPendientes] = useState([]);
  const [pacientesAceptados, setPacientesAceptados] = useState([]);
  const [pacientesRechazados, setPacientesRechazados] = useState([]);

  // Obtener citas del backend y clasificarlas según su estado
  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await fetch('https://comision97i-backfinal.vercel.app/api/getAllAppointments');
        const data = await response.json();
        console.log(data);

        // Clasificar pacientes por su estado
        const pendientes = data.appointments.filter(paciente => paciente.estado === 'pendiente');
        const aceptados = data.appointments.filter(paciente => paciente.estado === 'aceptado');
        const rechazados = data.appointments.filter(paciente => paciente.estado === 'rechazado');

        setPacientesPendientes(pendientes);
        setPacientesAceptados(aceptados);
        setPacientesRechazados(rechazados);

      } catch (error) {
        console.error('Error fetching pacientes:', error);
      }
    };

    fetchPacientes();
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

      // Actualizar el estado de la UI moviendo el paciente de "pendientes" a "aceptados"
      setPacientesPendientes(pacientesPendientes.filter(paciente => paciente._id !== id));
      setPacientesAceptados([...pacientesAceptados, updatedAppointment.appointment]);

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

      // Actualizar el estado de la UI moviendo el paciente de "pendientes" a "rechazados"
      setPacientesPendientes(pacientesPendientes.filter(paciente => paciente._id !== id));
      setPacientesRechazados([...pacientesRechazados, updatedAppointment.appointment]);

    } catch (error) {
      console.error('Error rejecting appointment:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Gestión de Pacientes</h1>
      <h2>Pacientes Pendientes</h2>
      <TablaPacientes pacientes={pacientesPendientes} onAceptar={aceptarPaciente} onRechazar={rechazarPaciente} />
      
      <h2>Pacientes Aceptados</h2>
      <TablaPacientes pacientes={pacientesAceptados} />

      <h2>Pacientes Rechazados</h2>
      <TablaPacientes pacientes={pacientesRechazados} />
    </div>
  );
}

export default MedicoScreen;
