import React, { useState, useEffect } from 'react';
import TablaMedico from '../Components/TablaMedico';
import ModalTurno from '../Components/ModalTurno';

const Home = () => {
  const [medicos, setMedicos] = useState([]);
  const [selectedMedico, setSelectedMedico] = useState(null);

  useEffect(() => {
    const datosMedicos = [
        { nombre: 'Juan', apellido: 'Pérez', especialidad: 'Cardiología', edad: 45, localidad: 'Buenos Aires' },
        { nombre: 'María', apellido: 'López', especialidad: 'Pediatría', edad: 38, localidad: 'Rosario' },
        { nombre: 'Luis', apellido: 'Gómez', especialidad: 'Neurología', edad: 50, localidad: 'Córdoba' },
        { nombre: 'Ana', apellido: 'Martínez', especialidad: 'Ginecología', edad: 42, localidad: 'Mendoza' },
        { nombre: 'Pedro', apellido: 'Rodríguez', especialidad: 'Traumatología', edad: 48, localidad: 'San Juan' },
        { nombre: 'Laura', apellido: 'Fernández', especialidad: 'Oftalmología', edad: 35, localidad: 'San Luis' },
        { nombre: 'Carlos', apellido: 'Hernández', especialidad: 'Dermatología', edad: 41, localidad: 'La Plata' },
        { nombre: 'Sofía', apellido: 'García', especialidad: 'Psiquiatría', edad: 37, localidad: 'Salta' },
        { nombre: 'Martín', apellido: 'Mendoza', especialidad: 'Medicina Interna', edad: 46, localidad: 'Tucumán' },
        { nombre: 'Elena', apellido: 'Pérez', especialidad: 'Endocrinología', edad: 39, localidad: 'Jujuy' }
      ];
      
    setMedicos(datosMedicos);
  }, []);

  const abrirModal = (medico) => {
    setSelectedMedico(medico); // Guardar el médico seleccionado
  };

  const cerrarModal = () => {
    setSelectedMedico(null); // Cerrar el modal
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Médicos Disponibles</h2>
      <TablaMedico medicos={medicos} abrirModal={abrirModal} />
      
      {/* Modal para reservar turno */}
      {selectedMedico && (
        <ModalTurno medico={selectedMedico} cerrarModal={cerrarModal} />
      )}
    </div>
  );
};

export default Home;
