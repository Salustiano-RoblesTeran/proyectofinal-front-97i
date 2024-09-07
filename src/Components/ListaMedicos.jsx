import React from "react";

const medicos = [
  {
    nombre: "María",
    apellido: "García",
    especialidad: "Cardiología",
    localidad: "San miguel de tucuman",
  },
  {
    nombre: "José",
    apellido: "Martínez",
    especialidad: "Dermatología",
    localidad: "yerba buena",
  },
  {
    nombre: "Ana",
    apellido: "López",
    especialidad: "Pediatría",
    localidad: "Barrio Sur",
  },
  {
    nombre: "Luis",
    apellido: "Fernández",
    especialidad: "Oftalmología",
    localidad: "Barrio Norte",
  },
  {
    nombre: "Carla",
    apellido: "Gómez",
    especialidad: "Ginecología",
    localidad: "San miguel de tucuman",
  },
];

const App = () => {
  // Función para manejar el click en el botón de "Sacar turno"
  const handleSacarTurno = (medico) => {
    alert(
      `Turno solicitado con el Dr./Dra. ${medico.nombre} ${medico.apellido}, Especialidad: ${medico.especialidad}`
    );
  };

  return (
    <div>
      <h1>Lista de Médicos</h1>
      {medicos.map((medico, index) => (
        <div key={index} className="lista-m">
          <p>
            <strong>Nombre:</strong> {medico.nombre} {medico.apellido}
          </p>
          <p>
            <strong>Especialidad:</strong> {medico.especialidad}
          </p>
          <p>
            <strong>Localidad:</strong> {medico.localidad}
          </p>
          <button onClick={() => handleSacarTurno(medico)}>Sacar turno</button>
        </div>
      ))}
    </div>
  );
};

export default App;
